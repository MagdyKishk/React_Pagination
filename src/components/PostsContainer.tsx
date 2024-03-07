import { useRef } from 'react';
import { PostType } from '../App';
import Post from './Post';

type Props = {
	postPerPage: number;
	setPostPerPage: React.Dispatch<React.SetStateAction<number>>;
	posts: Array<PostType>;
	loading: boolean;
	indeOfLastPost: number;
	indeOfFirstPost: number;
};

export default function PostsContainer({
	setPostPerPage,
	posts,
	loading,
	indeOfLastPost,
	indeOfFirstPost,
}: Props) {
	const postCountInput = useRef<HTMLInputElement>(null);

	function handlePostCount() {
		if (postCountInput.current)
		setPostPerPage(+postCountInput.current.value);
	}

	return (
		<>
			<div className='w-[1000px] mx-auto flex-grow flex flex-col justify-center'>
				<form
					className='p-4 flex gap-2'
					onSubmit={(e) => {
						e.preventDefault();
						handlePostCount();
					}}>
					<div >Posts</div>
					<div className='border-2 border-gray-700'>
						<input
							className='px-2 focus:border-0 focus:outline-none'
							type='number'
							max={100}
							min={0}
							ref={postCountInput}
						/>
					</div>
				</form>
				<ul>
					{posts.map((post: PostType, index) => {
						if (index < indeOfLastPost && index >= indeOfFirstPost) {
							return (
								<li key={post.id} className='mb-2'>
									<Post postData={post} loading={loading} />
								</li>
							);
						}
					})}
				</ul>
			</div>
		</>
	);
}
