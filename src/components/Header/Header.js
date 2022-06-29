import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getBooks } from '../../redux/ac/books.ac'
import { saveSearchParams } from '../../redux/ac/search.ac'

import styles from './style.module.css'

const Header = () => {
	const [search, setSearch] = useState('')
	const [category, setCategory] = useState('all')
	const [sort, setSort] = useState('relevance')

	console.log(styles['content__search-form'])

	const dispatch = useDispatch()

	const submitHandler = (ev) => {
		ev.preventDefault()
		const searchParams = {
			search,
			category,
			sort,
		}
		dispatch(saveSearchParams(searchParams))
		dispatch(getBooks(searchParams))
	}
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<form onSubmit={submitHandler}>
						<h3 className={styles.content__title}>search for books...</h3>

						<div className={styles.content__searchForm}>
							<input
								className={styles.content__input}
								placeholder='book...'
								onChange={(ev) => setSearch(ev.target.value)}
								value={search}
							/>
							<button type='submit' className={styles.content__button}>
								Search
							</button>
						</div>

						<div className={styles.selectors}>
							<div className={styles.selectors__category}>
								<label className={styles.selectors__label}>
									categories:
									<select onChange={(ev) => setCategory(ev.target.value)} className={styles.selectors__select}>
										<option value='all'>all</option>
										<option value='art'>art</option>
										<option value='biography'>biography</option>
										<option value='computers'>computers</option>
										<option value='history'>history</option>
										<option value='medical'>medical</option>
										<option value='poetry'>poetry</option>
									</select>
								</label>
							</div>

							<div className={styles.selectors__sort}>
								<label className={styles.selectors__label}>
									sort by:
									<select onChange={(ev) => setSort(ev.target.value)} className={styles.selectors__select}>
										<option value='relevance'>relevance</option>
										<option value='newest'>newest</option>
									</select>
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</header>
	)
}

export default Header
