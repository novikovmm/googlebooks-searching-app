import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookDetail from '../components/BookDetail'
import { enableLoader, disableLoader } from '../redux/ac/loader.ac'
import Loader from '../components/Loader/Loader'

const { REACT_APP_API_URL: api } = process.env

const BookPage = () => {
	const { id } = useParams()
	const [book, setBook] = useState(null)

	const dispatch = useDispatch()
	const loader = useSelector((state) => state.loaderState)

	useEffect(() => {
		dispatch(enableLoader())
		fetch(`${api}/${id}`)
			.then((res) => res.json())
			.then((data) => setBook(data))
			.catch(console.error)
			.finally(() => dispatch(disableLoader()))
	}, [id])

	return loader ? <Loader /> : book ? <BookDetail book={book} /> : <p>something gone wrong</p>
}

export default BookPage
