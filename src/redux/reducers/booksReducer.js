import { GET_BOOKS} from '../types'

const booksReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_BOOKS:
			const { totalItems: total, items: books } = payload
			return { ...state, total, books }

		default:
			return state
	}
}

export default booksReducer
