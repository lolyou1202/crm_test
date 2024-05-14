import './TableEmploee.style.scss'
import { useState } from 'react'
import { TableRow } from '../../../constants/tableFields'
import { TableEmploeeRow } from './TableEmploeeRow'

export const TableEmploee = ({
	dataTable,
	sorting,
	handleClickFavorite,
	handleClickSort,
	handleClickEmploee,
}: {
	dataTable: TableRow[]
	sorting: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}
	handleClickFavorite: (rowId: string) => void
	handleClickSort: ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => void
	handleClickEmploee: () => void
}) => {
	const [hoverColumn, setHoverColumn] = useState<number | null>(null)

	return (
		<table className='table'>
			<thead className='table-head'>
				<TableEmploeeRow
					typeRow='head'
					sorting={sorting}
					onClickHeaderCellFavorite={() =>
						handleClickSort({
							atribute: 'favorite',
							direction: 'desc',
						})
					}
					onMouseEnterHeaderCellFavorite={() => setHoverColumn(0)}
					onMouseLeaveHeaderCell={() => setHoverColumn(null)}
					onClickHeaderCellDefault={handleClickSort}
					onMouseEnterHeaderCellDefault={setHoverColumn}
				/>
			</thead>
			<tbody className='table-body'>
				{dataTable.map(row => (
					<TableEmploeeRow
						key={row.id}
						typeRow='body'
						sorting={sorting}
						hoverColumn={hoverColumn}
						cellsList={row}
						onClickBodyCellFavorite={() =>
							handleClickFavorite(row.id)
						}
						onClickBodyCellDefault={handleClickEmploee}
					/>
				))}
			</tbody>
		</table>
	)
}
