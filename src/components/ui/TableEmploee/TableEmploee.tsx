import './TableEmploee.style.scss'
import { Star } from '../../Icons/Star'
import { TableSort } from '../../Icons/TableSort'
import { useState } from 'react'
import { TableRow, tableColumns } from '../../../constants/tableFields'
import { colorTokens } from '../../../constants/colorTokens'
import classNames from 'classnames'

const { gray0, gray2, yellow } = colorTokens

export const TableEmploee = ({
	dataTable,
	sorting,
	handleClickFavorite,
	handleSortClick,
	handleEmploeeClick,
}: {
	dataTable: TableRow[]
	sorting: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}
	handleClickFavorite: (rowId: string) => void
	handleSortClick: ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => void
	handleEmploeeClick: () => void
}) => {
	const [hoverColumn, setHoverColumn] = useState<number | null>(null)

	return (
		<table className='table'>
			<thead className='table-head'>
				<tr className='table-row'>
					<th
						className='table-cell head'
						onClick={() =>
							handleSortClick({
								atribute: 'favorite',
								direction: 'desc',
							})
						}
						onMouseEnter={() => setHoverColumn(0)}
						onMouseLeave={() => setHoverColumn(null)}
					>
						<Star
							stroke={
								sorting.atribute === 'favorite' ? yellow : gray2
							}
							fill={
								sorting.atribute === 'favorite'
									? yellow
									: 'none'
							}
						/>
					</th>
					{tableColumns.map((column, index) => {
						const tableCellClassName = classNames(
							'table-cell',
							'head',
							{ sort: sorting.atribute === column.id }
						)
						return (
							<th
								key={column.id}
								className={tableCellClassName}
								onClick={() =>
									handleSortClick({
										atribute: column.id,
										direction: sorting.direction,
									})
								}
								onMouseEnter={() => setHoverColumn(index + 1)}
								onMouseLeave={() => setHoverColumn(null)}
								style={{ minWidth: column.minWidth }}
							>
								<p className='table-cell-text'>
									{column.label}
								</p>
								<TableSort
									sort={
										sorting.atribute === column.id
											? sorting.direction
											: 'none'
									}
								/>
							</th>
						)
					})}
				</tr>
			</thead>
			<tbody className='table-body'>
				{dataTable.map(row => (
					<tr key={row.id} className='table-row'>
						{Object.keys(row).map((cell, index) =>
							cell === 'favorite' ? (
								<td
									key={index}
									className='table-cell body'
									onClick={() => handleClickFavorite(row.id)}
									style={{
										backgroundColor:
											hoverColumn === 0 ? gray0 : '',
									}}
								>
									<Star
										stroke={
											row[cell as keyof TableRow]
												? yellow
												: gray2
										}
										fill={
											row[cell as keyof TableRow]
												? yellow
												: 'none'
										}
									/>
								</td>
							) : (
								<td
									key={index}
									className='table-cell body'
									onClick={
										index === 1
											? handleEmploeeClick
											: () => {}
									}
									style={{
										backgroundColor:
											hoverColumn === index ? gray0 : '',
										minWidth:
											tableColumns[index - 1].minWidth,
									}}
								>
									<p className='table-cell-text'>
										{row[cell as keyof TableRow]}
									</p>
								</td>
							)
						)}
					</tr>
				))}
			</tbody>
		</table>
	)
}
