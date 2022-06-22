const Book = (props) => {
	const { volumeInfo: book } = props;
	console.log(book);
	return (
		<div className='col-12 col-md-6 col-lg-4 col-xl-3'>
			<div className='card h-100'>
				<img src={book.imageLinks.smallThumbnail} alt={book.title} className='card-img-top' />
				<div className='card-body'>
					<h5 className='card-title'>{book.title}</h5>
					<hr />
					{book.categories && <h6 className='card-text'>{book.categories[0]}</h6>}
					{book.authors && <p className='card-text'>{book.authors.join(" & ")}</p>}
				</div>
			</div>
		</div>
	);
};

export default Book;
