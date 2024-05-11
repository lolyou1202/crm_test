import './Radio.style.scss'
import classNames from 'classnames'

export const Radio = ({
	active = false,
	disabled,
	onClick,
}: {
	active?: boolean
	disabled?: boolean
	onClick?: () => void
}) => {
	const radioClassNames = classNames(
		'radio',
		{ action: active },
		{ default: !active },
		{ disabled }
	)
	return (
		<div className={radioClassNames} onClick={onClick}>
			<div className='radio-backdrop'></div>
		</div>
	)
}
