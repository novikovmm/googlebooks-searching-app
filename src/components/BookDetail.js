import parse from 'html-react-parser'

const BookDetail = ({ book }) => {
	const { volumeInfo } = book
	const { description } = volumeInfo

	return (
		<div className='container my-3'>
			<div className='row'>
				<div className='col'>
					<a href={volumeInfo.previewLink}>
						<img src={volumeInfo.imageLinks?.thumbnail} className='img-fluid rounded-start' alt={volumeInfo?.title} />
					</a>
				</div>
				<div className='col'>
					<h3>{volumeInfo.title}</h3>
					<p className='text'>
						<i>{volumeInfo.authors?.join(', ')}</i>
					</p>
					<hr />
					{description && (
						<>
							<div>{parse(description)}</div>
							<hr />
						</>
					)}

					<ul className='mt-2'>
						{volumeInfo.categories?.map((category, i) => {
							return (
								<li key={i}>
									<small>{category}</small>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default BookDetail
