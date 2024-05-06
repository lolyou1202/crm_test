export const Star = ({
	size = 20,
	stroke,
	strokeWidth = 1.5,
	fill = 'none',
	className,
}: {
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
	className?: string
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox='0 0 20 20'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.0001 1.66663L12.5751 6.88329L18.3334 7.72496L14.1667 11.7833L15.1501 17.5166L10.0001 14.8083L4.85008 17.5166L5.83341 11.7833L1.66675 7.72496L7.42508 6.88329L10.0001 1.66663Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
