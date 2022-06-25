import { GET_BOOKS, GET_MORE_BOOKS } from '../types'

const booksReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_BOOKS: {
			const { totalItems: total, items: books } = payload
			return { ...state, total, books }
		}
		case GET_MORE_BOOKS: {
			const { totalItems: total, items: moreBooks } = payload
			return { ...state, total, books: [...state.books, ...moreBooks] }
		}
		default:
			return state
	}
}

export default booksReducer
