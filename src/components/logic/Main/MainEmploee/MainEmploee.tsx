import './MainEmploee.style.scss'
import { FilterDepartment } from '../../FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../../ui/FilterDefault/FilterDefault'
import { TableEmploee } from '../../../ui/TableEmploee/TableEmploee'
import { TableRow } from '../../../../constants/tableFields'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import { FiltersDrawer } from '../../FiltersDrawer/FiltersDrawer'

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
	const [isOpenDrawer, setOpenDrawer] = useState(false)

	const toggleDrawer = () => {
		setOpenDrawer(prevState => !prevState)
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
						action={false}
						handleFilterButtonClick={toggleDrawer}
					/>
					<Drawer
						open={isOpenDrawer}
						onClose={toggleDrawer}
						anchor='right'
					>
						<FiltersDrawer toggleDrawer={toggleDrawer} />
					</Drawer>
				</span>
			</span>
			<TableEmploee
				dataTable={dataTable}
				sorting={sorting}
				handleSortClick={handleSortClick}
			/>
		</div>
	)
}
