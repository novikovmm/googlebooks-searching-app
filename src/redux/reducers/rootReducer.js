import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
	booksState: booksReducer,
	searchState: searchReducer,
})

export default rootReducer
