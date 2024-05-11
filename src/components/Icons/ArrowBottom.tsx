export const ArrowBottom = ({
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
				d='M5 8.33337L10 13.3334L15 8.33337'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
