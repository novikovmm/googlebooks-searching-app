import Book from "./Book";

const BooksContainer = () => {

	return (
		<>
			<h5 className='text-center p-3'>Found 463 results</h5>
			<div className='container'>
				<div className='row g-3'>
					<Book />
					<Book />
					<Book />
					<Book />
					<Book />
				</div>
				<div className='d-grid gap-2 col-6 mx-auto'>
					<button type='button' className='btn btn-outline-secondary btn-lg mx-auto my-4'>
						load more...
					</button>
				</div>
			</div>
		</>
	);
};

export default BooksContainer;
