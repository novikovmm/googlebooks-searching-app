import { SAVE_SEARCH_PARAMS } from '../types'

const searchReducer = (state = {}, action) => {
	const { type, payload } = action

	switch (type) {
		case SAVE_SEARCH_PARAMS:
			const { search, category, sort } = payload
			console.log(payload)
			return { ...state, search, category, sort }
		default:
			return state
	}
}

export default searchReducer
