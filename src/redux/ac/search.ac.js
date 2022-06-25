import { SAVE_SEARCH_PARAMS } from '../types'

export const saveSearchParams = (searchParams) => {
	return {
		type: SAVE_SEARCH_PARAMS,
		payload: searchParams,
	}
}
