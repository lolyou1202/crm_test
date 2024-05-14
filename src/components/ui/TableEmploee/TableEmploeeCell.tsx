import { Star } from '../../Icons/Star'
import { TableSort } from '../../Icons/TableSort'

interface CustomCellProps extends React.HTMLProps<HTMLTableCellElement> {
	minWidth?: number
	backgroundColor?: string
}

export const TableEmploeeCell = ({
	typeRow,
	typeCell,
	labelCell,
	strokeStar,
	sortStateCell,
	fillStar,
	className,
	style,
	onClick,
	onMouseEnter,
	onMouseLeave,
}: {
	typeRow: 'head' | 'body'
	typeCell: 'favorite' | 'default'
	labelCell?: string
	strokeStar?: string
	sortStateCell?: 'asc' | 'desc' | 'none'
	fillStar?: string
	className: string
	style?: CustomCellProps
	onClick: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}) => {
	switch (typeCell) {
		case 'favorite':
			if (typeRow === 'head')
				return (
					<th
						className={className}
						onClick={onClick}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						style={style}
					>
						<Star stroke={strokeStar} fill={fillStar} />
					</th>
				)
			if (typeRow === 'body')
				return (
					<td
						className={className}
						onClick={onClick}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						style={style}
					>
						<Star stroke={strokeStar} fill={fillStar} />
					</td>
				)
			break
		case 'default':
			if (typeRow === 'head')
				return (
					<th
						className={className}
						onClick={onClick}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						style={style}
					>
						<p className='table-cell-text'>{labelCell}</p>
						<TableSort sort={sortStateCell} />
					</th>
				)
			if (typeRow === 'body')
				return (
					<td className={className} onClick={onClick} style={style}>
						<p className='table-cell-text'>{labelCell}</p>
					</td>
				)
			break
	}
}
