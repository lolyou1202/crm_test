import './OutlineButton.style.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

export const OutlineButton = ({
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
	const outlinedButtonClassNames = classNames(
		'outlinedButton',
		variant,
		className
	)
	return (
		<button
			className={outlinedButtonClassNames}
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
