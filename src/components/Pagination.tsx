type PaginationProps = {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	numberOfPages: number;
};

export default function Pagination({
	currentPage,
	setCurrentPage,
	numberOfPages,
}: PaginationProps) {
	function handleClick(pageNumber: number) {
		setCurrentPage(pageNumber);
	}

	const PaginationList = [];
	for (let i = 1; i <= numberOfPages; i++) {
		PaginationList.push(i);
	}

	return (
		<div className='mx-auto py-2'>
			<ul className='flex gap-1'>
				{PaginationList.map((num) => {
					return (
						<PaginationButton
							pageNumber={num}
							current={num == currentPage}
							handleClick={handleClick}
						/>
					);
				})}
			</ul>
		</div>
	);
}

type PaginationButtonProps = {
	pageNumber: number;
	current: boolean;
	handleClick: (pageNumber: number) => void;
};

function PaginationButton({
	pageNumber,
	current,
	handleClick,
}: PaginationButtonProps) {
	return (
		<li
			className={`p-2 rounded flex items-center justify-center text-white w-8 h-8 bg-blue-800 cursor-pointer ${
				current && 'border-4 border-blue-500'
			}`}
			onClick={() => {
				handleClick(pageNumber);
			}}>
			<span>{pageNumber}</span>
		</li>
	);
}
