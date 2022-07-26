import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Book = (props) => {
	const { volumeInfo } = props
	return (
		<div className={styles.card}>
			<Link to={`book/${props.id}`} style={{ color: 'black', 'text-decoration': 'none' }}>
				<div className={styles['img-wrapper']}>
					<img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} className={styles.img} />
				</div>
				<div className={styles['card-info']}>
					<h5 className={styles['card-title']}>{volumeInfo.title}</h5>
					<hr />
					{volumeInfo.categories && <h6 className={styles['card-category']}>{volumeInfo.categories[0]}</h6>}
					{volumeInfo.authors && <p className={styles['card-authors']}>{volumeInfo.authors.join(' & ')}</p>}
				</div>
			</Link>
		</div>
	)
}

export default Book
