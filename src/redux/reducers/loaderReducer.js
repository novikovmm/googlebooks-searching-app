import { DISABLE_LOADER, ENABLE_LOADER } from '../types'

const loaderReducer = (state = false, action) => {
	const { type } = action
	switch (type) {
		
		case ENABLE_LOADER:
			return true

		case DISABLE_LOADER:
			return false

		default:
			return state
	}
}

export default loaderReducer
