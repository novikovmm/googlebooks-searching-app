import { GET_BOOKS } from "../types";

const { REACT_APP_API_URL: api, REACT_APP_API_KEY: key } = process.env;
// 

export const getBooks =
	({ search, category, sort }) =>
	async (dispatch) => {
		const query =
			category !== "all"
				? `${api}/volumes?q=${search}+subject:${category}&orderBy=${sort}&maxResults=30&key=${key}`
				: `${api}/volumes?q=${search}&orderBy=${sort}&maxResults=30&key=${key}`;
		const response = await fetch(query);
		const books = await response.json();
		dispatch({
			type: GET_BOOKS,
			payload: books,
		});
	};
