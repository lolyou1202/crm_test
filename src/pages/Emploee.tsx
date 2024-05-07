import { useState } from 'react'
import { HeaderEmploee } from '../components/logic/Header/HeaderEmploee'
import { Sidebar } from '../components/logic/Sidebar/Sidebar'
import { headerTabs } from '../constants/headerTabs'
import { MainEmploee } from '../components/logic/Main/MainEmploee/MainEmploee'
import { TableRow, tableRows } from '../constants/tableFields'
import { useCreateFilterAtr } from '../hooks/useCreateFilterAtr'

export const Emploee = () => {
	const [dataTable, setDataTable] = useState(tableRows)
	const [filteredDataTable, setFilteredDataTable] = useState<TableRow[]>(
		tableRows.map(row => ({ ...row, favorite: false }))
	)
	const [variantShow, setVariantShow] = useState(headerTabs)

	const createFilterAtr = useCreateFilterAtr(dataTable)

	const [filters, setFilters] = useState({
		favorites: false,
		branch: createFilterAtr('branch'),
		department: createFilterAtr('department'),
		post: createFilterAtr('post'),
		director: createFilterAtr('director'),
	})
	const [sorting, setSorting] = useState<{
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}>({ atribute: 'name', direction: 'asc' })

	const handleSortClick = ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => {
		switch (direction) {
			case 'asc':
				setFilteredDataTable(prevState =>
					prevState.sort(
						(first, second) =>
							(first[atribute] as unknown) -
							(second[atribute] as unknown)
					)
				)
				setSorting({ atribute: atribute, direction: 'desc' })
				break
			case 'desc':
				setFilteredDataTable(prevState =>
					prevState.sort(
						(first, second) =>
							(second[atribute] as unknown) -
							(first[atribute] as unknown)
					)
				)
				setSorting({ atribute: atribute, direction: 'asc' })
				break
		}
	}

	return (
		<div className='app'>
			<Sidebar />
			<div className='main'>
				<HeaderEmploee
					variantShow={variantShow}
					setVariantShow={setVariantShow}
				/>
				<MainEmploee
					departmensFilter={
						filters.department as {
							filterAtrName: string
							active: boolean
						}[]
					}
					sorting={sorting}
					handleSortClick={handleSortClick}
				/>
			</div>
		</div>
	)
}
