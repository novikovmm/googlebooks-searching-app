import Book from './Book'
import { useSelector } from 'react-redux'

const BooksContainer = () => {
	const { total, books } = useSelector((state) => state.booksState)
	return (
		<>
			{total > 0 ? (
				<h5 className='text-center p-3'>Found {total} books</h5>
			) : (
				<h5 className='text-center p-3'> Start books searching</h5>
			)}
			<div className='container mt-2'>
				<div className='row g-3'>
					{books.length !== 0 && books.map((book) => <Book key={book.id + '+' + book.etag} {...book} />)}
				</div>
				<div className='d-grid gap-2 col-6 mx-auto'>
					{total > 0 && (
						<button type='button' className='btn btn-outline-secondary btn-lg mx-auto my-4'>
							load more...
						</button>
					)}
				</div>
			</div>
		</>
	)
}

export default BooksContainer
