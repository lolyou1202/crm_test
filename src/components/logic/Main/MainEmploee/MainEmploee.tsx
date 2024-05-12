import './MainEmploee.style.scss'
import { useState } from 'react'
import { FilterDepartment } from '../../FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../../ui/FilterDefault/FilterDefault'
import { TableEmploee } from '../../../ui/TableEmploee/TableEmploee'
import { TableRow } from '../../../../constants/tableFields'
import { FilterDrawer } from '../../FilterDrawer/FilterDrawer'
import { PersonDrawer } from '../../PersonDrawer/PersonDrawer'

export const MainEmploee = ({
	dataTable,
	departmensFilter,
	sorting,
	handleSortClick,
}: {
	dataTable: TableRow[]
	departmensFilter: {
		filterAtrName: string
		active: boolean
	}[]
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
	const [isOpenFilterDrawer, setOpenFilterDrawer] = useState(false)
	const [isOpenEmploeeDrawer, setOpenEmploeeDrawer] = useState(false)
	const [isFiltered, setFilter] = useState(false)

	const toggleDrawer = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setStateFunction(prevState => !prevState)
	}
	const handleEmploeeClick = () => {
		setOpenEmploeeDrawer(true)
	}

	return (
		<div className='main-emploee'>
			<span>
				<FilterDepartment departmensFilter={departmensFilter} />
				<span>
					<p>
						{dataTable.length} из {dataTable.length}
					</p>
					<FilterDefault
						action={isFiltered}
						handleFilterButtonClick={() =>
							toggleDrawer(setOpenFilterDrawer)
						}
						handleDeleteFilterClick={() => toggleDrawer(setFilter)}
					/>
					<FilterDrawer
						isOpen={isOpenFilterDrawer}
						toggleDrawer={() => toggleDrawer(setOpenFilterDrawer)}
						handleAddFilterClick={() => toggleDrawer(setFilter)}
					/>
				</span>
			</span>
			<TableEmploee
				dataTable={dataTable}
				sorting={sorting}
				handleSortClick={handleSortClick}
				handleEmploeeClick={handleEmploeeClick}
			/>
			<PersonDrawer
				isOpen={isOpenEmploeeDrawer}
				toggleDrawer={() => toggleDrawer(setOpenEmploeeDrawer)}
			/>
		</div>
	)
}
