import './TableEmploee.style.scss'
import { Star } from '../../Icons/Star'
import { TableSort } from '../../Icons/TableSort'
import { useState } from 'react'
import {
	TableRow,
	tableColumns,
	tableRows,
} from '../../../constants/tableFields'
import { colorTokens } from '../../../constants/colorTokens'

const { gray0, gray2, yellow } = colorTokens

export const TableEmploee = ({
	sorting,
	handleSortClick,
}: {
	sorting: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}
	handleSortClick: ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => void
}) => {
	const [hoverColumn, setHoverColumn] = useState<number | null>(null)

	return (
		<table className='table'>
			<thead className='table-head'>
				<tr className='table-row'>
					<th
						className='table-cell head'
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
					{tableColumns.map((column, index) => (
						<th
							key={column.id}
							className='table-cell head'
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
							<p className='table-cell-text'>{column.label}</p>
							<TableSort
								sort={
									sorting.atribute === column.id
										? sorting.direction
										: 'none'
								}
							/>
						</th>
					))}
				</tr>
			</thead>
			<tbody className='table-body'>
				{tableRows.map(row => (
					<tr key={row.id} className='table-row'>
						<td
							className='table-cell body'
							style={{
								backgroundColor: hoverColumn === 0 ? gray0 : '',
							}}
						>
							<Star />
						</td>
						{Object.values(row).map((cell, index) => (
							<td
								key={index}
								className='table-cell body'
								style={{
									backgroundColor:
										hoverColumn === index + 1 ? gray0 : '',
									minWidth: tableColumns[index].minWidth,
								}}
							>
								<p className='table-cell-text'>{cell}</p>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
