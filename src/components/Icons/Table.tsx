export const Table = ({
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
				d='M2.50003 4.875H17.5V15.5C17.5 15.6658 17.4342 15.8247 17.3169 15.9419C17.1997 16.0592 17.0408 16.125 16.875 16.125H3.12503C2.95927 16.125 2.8003 16.0592 2.68309 15.9419C2.56588 15.8247 2.50003 15.6658 2.50003 15.5V4.875Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 8.625H17.5'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 12.375H17.5'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.875 8.625V16.125'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
