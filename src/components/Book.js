const Book = (book) => {
	/**
	 * Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги,
	 *  названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий,
	 *  то отображается только первая. Авторы отображаются все.
	 *  Если не приходит какой-либо части данных, то вместо нее просто пустое место.
	 */

	

	return (
		<div className='col-12 col-md-6 col-lg-4 col-xl-3'>
			<div className='card h-100'>
				<img
					src='https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88%D0%BE%D0%BC005.jpg'
					alt='book cover'
					className='card-img-top'
				/>
        <div className='card-body'>
          <h5 className='card-title'>sgfk;aghfa;</h5>
          <hr/>
          <h6 className='card-text'>gsfjhlkjfahg</h6>
          <p className='card-text'>ahg;ljhgohhj</p>
        </div>
			</div>
		</div>
	);
};

export default Book;
