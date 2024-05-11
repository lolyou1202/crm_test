import { Checkbox } from '../Checkbox/Checkbox'
import { Radio } from '../Radio/Radio'

export const AccordionLine = ({
	type,
	action,
	label,
	onClick,
}: {
	type: 'radio' | 'checkbox'
	action: boolean
	label: string
	onClick?: () => void
}) => {
	return (
		<div className='accordionLine' onClick={onClick}>
			{type === 'radio' && <Radio active={action} />}
			{type === 'checkbox' && <Checkbox active={action} />}
			<p className='accordionLine-label'>{label}</p>
		</div>
	)
}
