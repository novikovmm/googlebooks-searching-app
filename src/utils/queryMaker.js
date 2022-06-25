const { REACT_APP_API_URL: api, REACT_APP_API_KEY: key } = process.env

export const queryMaker = (search, category, sort, startIndex = 0) => {
	return (
		`${api}?q=${search}` +
		(category !== 'all' ? `+subject:${category}` : '') +
		`&orderBy=${sort}` +
		(startIndex > 0 ? `&startIndex=${startIndex}` : '') +
		`&maxResults=30&key=${key}`
	)
}
