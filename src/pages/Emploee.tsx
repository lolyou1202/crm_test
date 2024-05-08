import { useState } from 'react'
import { HeaderEmploee } from '../components/logic/Header/HeaderEmploee'
import { Sidebar } from '../components/logic/Sidebar/Sidebar'
import { headerTabs } from '../constants/headerTabs'
import { MainEmploee } from '../components/logic/Main/MainEmploee/MainEmploee'
import { TableRow, tableRows } from '../constants/tableFields'
import { useCreateFilterAtr } from '../hooks/useCreateFilterAtr'

const dataTable = tableRows

export const Emploee = () => {
	const [filteredDataTable, setFilteredDataTable] = useState<TableRow[]>(
		dataTable.map(row => ({ favorite: false, ...row }))
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
		setSorting(prevState => {
			if (prevState.atribute === atribute) {
				if (atribute === 'favorite') {
					return { atribute: 'name', direction: 'asc' }
				}
				return {
					...prevState,
					direction: direction === 'asc' ? 'desc' : 'asc',
				}
			} else {
				return { atribute, direction: 'asc' }
			}
		})
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
					dataTable={filteredDataTable}
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
