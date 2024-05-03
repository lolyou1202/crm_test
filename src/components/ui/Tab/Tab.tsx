import './Tab.style.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

export const Tab = ({
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
	const tabButtonClassNames = classNames('tab', { action: action }, className)

	return (
		<button
			className={tabButtonClassNames}
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
