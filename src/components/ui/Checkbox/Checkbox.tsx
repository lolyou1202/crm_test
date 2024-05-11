import './Checkbox.style.scss'
import classNames from 'classnames'
import { CheckForCheckbox } from '../../Icons/CheckForCheckbox'

export const Checkbox = ({
	active = false,
	disabled,
	onClick,
}: {
	active?: boolean
	disabled?: boolean
	onClick?: () => void
}) => {
	const checkboxClassNames = classNames(
		'checkbox',
		{ action: active },
		{ default: !active },
		{ disabled }
	)
	return (
		<div className={checkboxClassNames} onClick={onClick}>
			<div className='checkbox-backdrop'></div>
			<CheckForCheckbox className='checkbox-check' />
		</div>
	)
}
