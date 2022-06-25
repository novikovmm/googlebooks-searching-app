import { GET_BOOKS, GET_MORE_BOOKS } from '../types'
import { queryMaker } from '../../utils/queryMaker'

export const getBooks =
	({ search, category, sort }) =>
	async (dispatch) => {
		try {
			const query = queryMaker(search, category, sort)
			const response = await fetch(query)
			const books = await response.json()
			dispatch({
				type: GET_BOOKS,
				payload: books,
			})
		} catch (error) {
			console.log(error)
		}
	}

export const loadMoreBooks =
	({ search, category, sort, startIndex }) =>
	async (dispatch) => {
		try {
			const query = queryMaker(search, category, sort, startIndex)
			const response = await fetch(query)
			const moreBooks = await response.json()
			dispatch({
				type: GET_MORE_BOOKS,
				payload: moreBooks,
			})
		} catch (error) {
			console.log(error)
		}
	}
