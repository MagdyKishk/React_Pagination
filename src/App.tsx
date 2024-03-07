import axios from 'axios';
import { useEffect, useState } from 'react';
import PostsContainer from './components/PostsContainer';
import Pagination from './components/Pagination';

export type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type DataRes = {
	data: Array<PostType>;
};

function App(): JSX.Element {
	const [posts, setPosts] = useState<Array<PostType>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [numberOfPages, setNumberOfPages] = useState<number>(0);
	const [postPerPage, setPostPerPage] = useState<number>(5);
	const indeOfLastPost = currentPage * postPerPage;
	const indeOfFirstPost = indeOfLastPost - postPerPage;

	async function fetchPosts() {
		setLoading(true);
		const res = (await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)) as DataRes;
		const responseData = res.data;
		setPosts(responseData);
		setNumberOfPages(Math.ceil(responseData.length / postPerPage));
		setLoading(false);
	}

	useEffect(() => {
		fetchPosts();
	}, [postPerPage, currentPage]);

	return (
		<div className='min-h-dvh flex flex-col'>
			<h1 className='text-center text-4xl py-4'>React Pagination</h1>

			<PostsContainer
				postPerPage={postPerPage}
				setPostPerPage={setPostPerPage}
				posts={posts}
				indeOfLastPost={indeOfLastPost}
				indeOfFirstPost={indeOfFirstPost}
				loading={loading}
			/>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				numberOfPages={numberOfPages}
			/>
		</div>
	);
}

export default App;
