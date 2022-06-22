import { Link } from "react-router-dom";

const Book = (props) => {
	const { volumeInfo: book } = props;
	return (
		<div className='col-12 col-md-6 col-lg-4 col-xl-3'>
			<Link to={`book/${props.id}`}>
				<div type='button' className='card h-100'>
					<img src={book.imageLinks.thumbnail} alt={book.title} className='card-img-top' />
					<div className='card-body'>
						<h5 className='card-title'>{book.title}</h5>
						<hr />
						{book.categories && <h6 className='card-text'>{book.categories[0]}</h6>}
						{book.authors && <p className='card-text'>{book.authors.join(" & ")}</p>}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Book;
