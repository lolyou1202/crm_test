export const TableSort = ({
	size = 12,
	className,
	strokeWidth = 1.5,
	sort,
}: {
	size?: number
	strokeWidth?: number
	className?: string
	sort?: 'asc' | 'desc' | 'none'
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.25 3.75L6 1.5L3.75 3.75'
				stroke={sort === 'asc' ? 'var(--primary)' : 'var(--gray-2)'}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.25 8.25L6 10.5L3.75 8.25'
				stroke={sort === 'desc' ? 'var(--primary)' : 'var(--gray-2)'}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
