import './MainEmploee.style.scss'
import { useState } from 'react'
import { FilterDepartment } from '../../FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../../ui/FilterDefault/FilterDefault'
import { TableEmploee } from '../../../ui/TableEmploee/TableEmploee'
import { TableRow } from '../../../../constants/tableFields'
import { FilterDrawer } from '../../FilterDrawer/FilterDrawer'
import { DrawerTemplate } from '../../../ui/Drawer/DrawerTemplate'

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
	const [isOpenEmploeeDrawer, setOpenEmploeeDrawer] = useState(true)
	const [isOpenDepartmentFilter, setOpenDepartmentFilter] = useState(false)

	const toggleDrawer = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setStateFunction(prevState => !prevState)
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
						action={isOpenDepartmentFilter}
						handleFilterButtonClick={() =>
							toggleDrawer(setOpenDepartmentFilter)
						}
					/>
					<FilterDrawer
						isOpen={isOpenFilterDrawer}
						toggleDrawer={() => toggleDrawer(setOpenFilterDrawer)}
					/>
				</span>
			</span>
			<TableEmploee
				dataTable={dataTable}
				sorting={sorting}
				handleSortClick={handleSortClick}
			/>
			<DrawerTemplate
				isOpen={isOpenEmploeeDrawer}
				toggleDrawer={() => toggleDrawer(setOpenEmploeeDrawer)}
			/>
		</div>
	)
}
