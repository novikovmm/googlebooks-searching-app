import style from './style.module.css'

const Loader = () => {
	return (
		<div className='d-flex justify-content-center'>
			<div className={style.ldsripple}>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
