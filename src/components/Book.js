import { Link } from 'react-router-dom'

const Book = (props) => {
	const { volumeInfo } = props
	return (
		<div className='col-12 col-md-6 col-lg-4 col-xl-3'>
			<Link to={`book/${props.id}`}>
				<div type='button' className='card h-100'>
					<img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} className='card-img-top' />
					<div className='card-body'>
						<h5 className='card-title'>{volumeInfo.title}</h5>
						<hr />
						{volumeInfo.categories && <h6 className='card-text'>{volumeInfo.categories[0]}</h6>}
						{volumeInfo.authors && <p className='card-text'>{volumeInfo.authors.join(' & ')}</p>}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Book
