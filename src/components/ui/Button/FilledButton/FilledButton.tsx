import './FilledButton.style.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

export const FilledButton = ({
	action = false,
	text,
	icon,
	onClick,
	onMouseEnter,
	onMouseLeave,
	className,
	children,
}: {
	action?: boolean
	text?: string
	icon?: ReactNode
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	className?: string
	children?: ReactNode
}) => {
	const filledButtonClassNames = classNames(
		'filledButton',
		{ action: action },
		className
	)
	return (
		<button
			className={filledButtonClassNames}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{icon}
			{text && <p>{text}</p>}
			{children}
		</button>
	)
}
