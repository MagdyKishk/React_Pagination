import { PostType } from '../App';

type Props = {
	postData: PostType;
	loading: boolean;
};

export default function Post({ postData, loading }: Props) {
	return (
		<details className='w-full min-h-fit border-2 rounded cursor-pointer bg-blue-300 text-white'>
			{!loading ? (
				<>
					<summary className='hover:bg-gray-200 p-4 text-xl font-bold'>
						{postData.title}
					</summary>
					<div className='px-4 py-2'>{postData.body}</div>
				</>
			) : (
				<summary className='hover:bg-gray-200 p-4 text-xl font-bold'>
					Loading...
				</summary>
			)}
		</details>
	);
}
