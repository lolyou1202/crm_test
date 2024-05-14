import { colorTokens } from '../../../constants/colorTokens'
import classNames from 'classnames'
import { TableRow, tableColumns } from '../../../constants/tableFields'
import { TableEmploeeCell } from './TableEmploeeCell'

const { gray0, gray2, yellow } = colorTokens

export const TableEmploeeRow = ({
	typeRow,
	sorting,
	cellsList,
	hoverColumn,
	onClickHeaderCellFavorite,
	onClickHeaderCellDefault,
	onClickBodyCellFavorite,
	onClickBodyCellDefault,
	onMouseEnterHeaderCellFavorite,
	onMouseEnterHeaderCellDefault,
	onMouseLeaveHeaderCell,
}: {
	typeRow: 'head' | 'body'
	sorting: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}
	cellsList?: TableRow
	hoverColumn?: number | null
	onClickHeaderCellFavorite?: () => void
	onClickHeaderCellDefault?: ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => void
	onClickBodyCellFavorite?: () => void
	onClickBodyCellDefault?: () => void
	onMouseEnterHeaderCellFavorite?: () => void
	onMouseEnterHeaderCellDefault?: (value: number | null) => void
	onMouseLeaveHeaderCell?: () => void
}) => {
	switch (typeRow) {
		case 'head':
			return (
				<tr className='table-row'>
					<TableEmploeeCell
						typeRow='head'
						typeCell='favorite'
						className='table-cell head'
						strokeStar={
							sorting.atribute === 'favorite' ? yellow : gray2
						}
						fillStar={
							sorting.atribute === 'favorite' ? yellow : 'none'
						}
						onClick={onClickHeaderCellFavorite || (() => {})}
						onMouseEnter={onMouseEnterHeaderCellFavorite}
						onMouseLeave={onMouseLeaveHeaderCell}
					/>
					{tableColumns.map((column, index) => {
						const tableCellClassName = classNames(
							'table-cell',
							'head',
							{ sort: sorting.atribute === column.id }
						)
						return (
							<TableEmploeeCell
								key={column.id}
								typeRow='head'
								typeCell='default'
								labelCell={column.label}
								sortStateCell={
									sorting.atribute === column.id
										? sorting.direction
										: 'none'
								}
								className={tableCellClassName}
								style={{ minWidth: column.minWidth }}
								onClick={() =>
									onClickHeaderCellDefault &&
									onClickHeaderCellDefault({
										atribute: column.id,
										direction: sorting.direction,
									})
								}
								onMouseEnter={() =>
									onMouseEnterHeaderCellDefault &&
									onMouseEnterHeaderCellDefault(index + 1)
								}
								onMouseLeave={onMouseLeaveHeaderCell}
							/>
						)
					})}
				</tr>
			)
		case 'body':
			return (
				<tr className='table-row'>
					{cellsList &&
						Object.keys(cellsList).map((cell, index) =>
							cell === 'favorite' ? (
								<TableEmploeeCell
									key={index}
									typeRow='body'
									typeCell='favorite'
									className='table-cell body'
									onClick={
										onClickBodyCellFavorite || (() => {})
									}
									strokeStar={
										cellsList.favorite ? yellow : gray2
									}
									fillStar={
										cellsList.favorite ? yellow : 'none'
									}
									style={{
										backgroundColor:
											hoverColumn === 0 ? gray0 : '',
									}}
								/>
							) : (
								<TableEmploeeCell
									key={index}
									typeRow='body'
									typeCell='default'
									labelCell={cellsList[cell]}
									className='table-cell body'
									style={{
										backgroundColor:
											hoverColumn === index ? gray0 : '',
										minWidth:
											tableColumns[index - 1].minWidth,
									}}
									onClick={
										index === 1 && onClickBodyCellDefault
											? onClickBodyCellDefault
											: () => {}
									}
								/>
							)
						)}
				</tr>
			)
	}
}
