export const Kanban = ({
	size = 20,
	className,
	stroke,
	strokeWidth = 1.5,
}: {
	size?: number
	stroke?: string
	strokeWidth?: number
	className?: string
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.75 11.1818V3.98485C8.75 3.78611 8.47018 3.625 8.125 3.625L5 3.625C4.65482 3.625 4.375 3.78611 4.375 3.98485L4.375 11.1818C4.375 11.3806 4.65482 11.5417 5 11.5417H8.125C8.47018 11.5417 8.75 11.3806 8.75 11.1818Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.625 16.75V4.25C15.625 3.90482 15.3452 3.625 15 3.625L11.875 3.625C11.5298 3.625 11.25 3.90482 11.25 4.25V16.75C11.25 17.0952 11.5298 17.375 11.875 17.375H15C15.3452 17.375 15.625 17.0952 15.625 16.75Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
