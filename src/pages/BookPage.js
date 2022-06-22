import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { REACT_APP_API_URL: api, REACT_APP_API_KEY: key } = process.env;

const BookPage = () => {
	const { id } = useParams();

	const [book, setBook] = useState({});

	useEffect(() => {
		fetch(`${api}/volumes/${id}`)
			.then((data) => data.json())
			.then(console.log)
			// .then((data) => setBook(data));
	});

	return (
		<div onClick={() => console.log(book.volumeInfo.title)} className='container'>
			<div className='card my-5 custom'>
				<div className='row g-0'>
					<div className='col-md-4'>
						<img className='img-fluid rounded-start' alt='...' />
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>title</h5>
							<hr />
							<h6 className='card-text'>Category</h6>
							<p className='card-text'> John Malkovic, Persik Jackson, Uma Truman</p>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookPage;
