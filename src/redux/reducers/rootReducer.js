import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import loaderReducer from './loaderReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
	booksState: booksReducer,
	searchState: searchReducer,
	loaderState: loaderReducer,
})

export default rootReducer
