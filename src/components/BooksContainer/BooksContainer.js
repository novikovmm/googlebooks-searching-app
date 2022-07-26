import Book from '../Book/Book'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoreBooks } from '../../redux/ac/books.ac'
import styles from './style.module.css'

const BooksContainer = () => {
	const { total, books } = useSelector((state) => state.booksState)
	const { search, category, sort } = useSelector((state) => state.searchState)

	const dispatch = useDispatch()

	const load = (startIndex = books.length) => {
		dispatch(loadMoreBooks({ search, category, sort, startIndex }))
	}

	return (
		// (
		// 	<>
		// 		{total > 0 ? (
		// 			<h5 className='text-center p-3'>Found {total} books</h5>
		// 		) : (
		// 			<h5 className='text-center p-3'> Start books searching</h5>
		// 		)}
		// 		<div className='container mt-2'>
		// 			<div className='row g-3'>
		// 				{books?.length !== 0 && books?.map((book) => <Book key={book.id + '+' + book.etag} {...book} />)}
		// 			</div>
		// 			<div className='d-grid gap-2 col-6 mx-auto'>
		// 				{total > 0 && (
		// 					<button
		// 						onClick={() => load(books.length)}
		// 						type='button'
		// 						className='btn btn-outline-secondary btn-lg mx-auto my-4'>
		// 						load more...
		// 					</button>
		// 				)}
		// 			</div>
		// 		</div>
		// 	</>
		// )

		<>
			{total > 0 ? (
				<h5 className={styles.title}>Found {total} books</h5>
			) : (
				<h5 className={styles.title}> Start books searching</h5>
			)}
			<div className={styles.container}>
					{books?.length !== 0 && books?.map((book) => <Book key={book.id + '+' + book.etag} {...book} />)}
					
			</div>
			{total > 0 && (
						<button
							onClick={() => load(books.length)}
							type='button'
							className={styles['btn-load']}>
							load more...
						</button>
					)}
		</>
	)
}

export default BooksContainer
