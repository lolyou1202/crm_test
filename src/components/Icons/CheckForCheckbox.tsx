export const CheckForCheckbox = ({
	size = 10,
	className,
	stroke,
	strokeWidth = 2,
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
			viewBox='0 0 10 10'
			className={className}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.33329 2.5L3.74996 7.08333L1.66663 5'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
