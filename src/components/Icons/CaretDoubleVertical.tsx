export const CaretDoubleVertical = ({
	size = 16,
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
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10 11.3333L13.3333 7.99996L10 4.66663'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6 4.66665L2.66667 7.99998L6 11.3333'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
