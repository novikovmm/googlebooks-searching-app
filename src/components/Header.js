const Header = () => {
	return (
		<header className='container-fluid pt-3 bg-dark text-white'>
			<h2 className='text-center'>Search for books</h2>
			<form>
				<div className='row d-flex justify-content-center my-3'>
					<div className='col-md-6'>
						<div className='input-group'>
							<input className='form-control' />
							<button type='submit' className='btn btn-secondary'>
								Search
							</button>
						</div>
					</div>
				</div>

				<div className='row d-flex justify-content-center'>
					<div className='col-sm-9 col-md-3 mb-3'>
						<label htmlFor='categories'>Categories:</label>
						<select id='categories' className='form-select'>
							<option value='all'>all</option>
							<option value='art'>art</option>
							<option value='biography'>biography</option>
							<option value='computers'>computers</option>
							<option value='history'>history</option>
							<option value='medical'>medical</option>
							<option value='poetry'>poetry</option>
						</select>
					</div>

					<div className='col-md-3 mb-3'>
						<label htmlFor='sort'>Sorting by:</label>
						<select id='sort' className='form-select'>
							<option value='relevance'>relevance</option>
							<option value='newest'>newest</option>
						</select>
					</div>
				</div>
			</form>
		</header>
	);
};

export default Header;
