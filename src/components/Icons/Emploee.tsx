export const Emploee = ({
	size = 20,
	className,
	stroke,
	strokeWidth = 1.5,
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
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.625 11.25C12.0057 11.25 13.125 10.1307 13.125 8.75C13.125 7.36929 12.0057 6.25 10.625 6.25C9.24429 6.25 8.125 7.36929 8.125 8.75C8.125 10.1307 9.24429 11.25 10.625 11.25Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 8.4375H4.375'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 5.3125H4.375'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 11.5625H4.375'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 14.6875H4.375'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.87478 13.1248C7.31147 12.5427 7.87768 12.0703 8.52857 11.7448C9.17947 11.4194 9.89718 11.25 10.6249 11.25C11.3526 11.25 12.0703 11.4194 12.7212 11.7447C13.3721 12.0701 13.9384 12.5426 14.3751 13.1247'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.875 16.875V3.125C16.875 2.77982 16.5952 2.5 16.25 2.5L5 2.5C4.65482 2.5 4.375 2.77982 4.375 3.125V16.875C4.375 17.2202 4.65482 17.5 5 17.5H16.25C16.5952 17.5 16.875 17.2202 16.875 16.875Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
