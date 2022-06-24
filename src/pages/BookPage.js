import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookDetail from '../components/BookDetail'

const { REACT_APP_API_URL: api } = process.env

const BookPage = () => {
	const { id } = useParams()
	const [book, setBook] = useState(null)

	useEffect(() => {
		fetch(`${api}/${id}`)
			.then((res) => res.json())
			.then((data) => setBook(data))
			.catch(console.error)
	}, [id])

	if (book) {
		return <BookDetail book={book} />
	} else {
		return null
	}
}

export default BookPage
