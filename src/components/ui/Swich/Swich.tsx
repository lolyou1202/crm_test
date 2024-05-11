import './Swich.style.scss'
import classNames from 'classnames'

export const Swich = ({
	active = false,
	disabled,
	onClick,
}: {
	active?: boolean
	disabled?: boolean
	onClick?: () => void
}) => {
	const swichClassNames = classNames(
		'swich',
		{ action: active },
		{ default: !active },
		{ disabled }
	)
	return (
		<div className={swichClassNames} onClick={onClick}>
			<div className='swich-track'></div>
			<div className='swich-slider'></div>
		</div>
	)
}
