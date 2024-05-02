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
	children,
}: {
	variant?: 'default' | 'outlined' | 'filled'
	text?: string
	icon?: ReactNode
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	children?: ReactNode
}) => {
	const filledButtonClassNames = classNames('filledButton', variant)

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
