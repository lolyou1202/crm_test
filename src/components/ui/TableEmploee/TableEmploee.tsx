import './TableEmploee.style.scss'
import { Star } from '../../Icons/Star'
import { TableSort } from '../../Icons/TableSort'
import { useState } from 'react'
import { tableColumns, tableRows } from '../../../constants/tableFields'

export const TableEmploee = () => {
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
						<Star />
					</th>
					{tableColumns.map((column, index) => (
						<th
							className='table-cell head'
							onMouseEnter={() => setHoverColumn(index + 1)}
							onMouseLeave={() => setHoverColumn(null)}
							style={{ minWidth: column.minWidth }}
						>
							<p className='table-cell-text'>{column.label}</p>
							<TableSort sort='asc' />
						</th>
					))}
				</tr>
			</thead>
			<tbody className='table-body'>
				{tableRows.map(row => (
					<tr className='table-row'>
						<td
							className='table-cell body'
							style={{
								backgroundColor:
									hoverColumn === 0 ? 'var(--gray-0)' : '',
							}}
						>
							<Star />
						</td>
						{Object.values(row).map((cell, index) => (
							<td
								className='table-cell body'
								style={{
									backgroundColor:
										hoverColumn === index + 1
											? 'var(--gray-0)'
											: '',
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
