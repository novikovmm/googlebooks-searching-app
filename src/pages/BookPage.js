const BookPage = () => {
	return (
		<div className='container'>
			<div className='card my-5 custom'>
				<div className='row g-0'>
					<div className='col-md-4'>
						<img
							src='https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg'
							className='img-fluid rounded-start'
							alt='...'
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>This is title</h5>
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
