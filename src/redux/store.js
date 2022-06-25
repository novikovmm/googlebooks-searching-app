import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const initialState = {
	booksState: {
		total: 0,
		books: [],
	},
	searchState: {
		search: null,
		sort: null,
		category: null,
	},
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store
