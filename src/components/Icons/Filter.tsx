export const Filter = ({
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
				d='M4.5111 5H15.4889C15.5879 5 15.6848 5.02797 15.7678 5.08051C15.8508 5.13305 15.9163 5.2079 15.9563 5.29595C15.9964 5.38401 16.0093 5.48149 15.9934 5.57654C15.9776 5.67159 15.9337 5.76012 15.8671 5.83137L11.6662 10.3251C11.5807 10.4166 11.5333 10.5358 11.5333 10.6595V14.1776C11.5333 14.2594 11.5125 14.3399 11.4728 14.4121C11.4331 14.4842 11.3757 14.5457 11.3057 14.5911L9.26131 15.9165C9.18434 15.9664 9.09488 15.9951 9.00248 15.9994C8.91008 16.0038 8.8182 15.9836 8.73664 15.9412C8.65508 15.8987 8.58689 15.8356 8.53935 15.7584C8.49182 15.6812 8.46671 15.5929 8.46671 15.503V10.6595C8.46671 10.5358 8.41932 10.4166 8.33379 10.3251L4.13292 5.83137C4.06631 5.76012 4.02242 5.67159 4.00658 5.57654C3.99074 5.48149 4.00363 5.38401 4.04369 5.29595C4.08375 5.2079 4.14925 5.13305 4.23222 5.08051C4.3152 5.02797 4.41208 5 4.5111 5V5Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
