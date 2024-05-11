import './Accordion.style.scss'
import { useState } from 'react'
import classNames from 'classnames'
import { ArrowBottom } from '../../Icons/ArrowBottom'
import { AccordionLine } from './AccordionLine'

export const Accordion = ({
	optionType,
	label,
	optionsList,
	onClickOption,
}: {
	optionType: 'radio' | 'checkbox'
	label: string
	optionsList: {
		active: boolean
		label: string
	}[]
	onClickOption: (label: string) => void
}) => {
	const [isExpand, setExpand] = useState(true)

	const accordionClassName = classNames('accordion', {
		expanded: isExpand,
		collapsed: !isExpand,
	})

	const handlerCkickHeader = () => {
		setExpand(prevState => !prevState)
	}

	return (
		<div className={accordionClassName}>
			<div className='accordion__header' onClick={handlerCkickHeader}>
				<p className='accordion__header-label'>{label}</p>
				<ArrowBottom className='accordion__header-icon' />
			</div>
			<span>
				<div className='accordion__list'>
					{optionsList.map(option => (
						<AccordionLine
							key={option.label}
							type={optionType}
							label={option.label}
							action={option.active}
							onClick={() => onClickOption(option.label)}
						/>
					))}
				</div>
			</span>
		</div>
	)
}
