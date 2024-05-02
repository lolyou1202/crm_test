import './Tab.style.scss'
import { ReactNode } from 'react'

export const HeaderTab = ({
	text,
	icon,
	onClick,
	onMouseEnter,
	onMouseLeave,
	children,
}: {
	text?: string
	icon?: ReactNode
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	children?: ReactNode
}) => {
	return (
		<button
			className='tab'
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
