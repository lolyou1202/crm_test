import './FilledButton.style.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

export const FilledButton = ({
	variant = 'default',
	text,
	icon,
	onClick,
	onMouseEnter,
	onMouseLeave,
	className,
	children,
}: {
	variant?: 'default' | 'hover' | 'action'
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
		variant,
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
