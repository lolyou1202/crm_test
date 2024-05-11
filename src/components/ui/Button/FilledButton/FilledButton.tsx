import './FilledButton.style.scss'
import classNames from 'classnames'

export const FilledButton = ({
	variant = 'light',
	disabled = false,
	action = false,
	text,
	icon,
	onClick,
	onMouseEnter,
	onMouseLeave,
	className,
	children,
}: {
	variant?: 'light' | 'dark'
	disabled?: boolean
	action?: boolean
	text?: string
	icon?: React.ReactNode
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	className?: string
	children?: React.ReactNode
}) => {
	const filledButtonClassNames = classNames(
		'filledButton',
		variant,
		disabled,
		{ action: action },
		className
	)
	return (
		<button
			className={filledButtonClassNames}
			disabled={disabled}
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
