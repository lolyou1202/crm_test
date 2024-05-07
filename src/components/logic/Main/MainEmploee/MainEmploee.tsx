import './MainEmploee.style.scss'
import { FilterDepartment } from '../../FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../../ui/FilterDefault/FilterDefault'
import { TableEmploee } from '../../../ui/TableEmploee/TableEmploee'
import { TableRow } from '../../../../constants/tableFields'

export const MainEmploee = ({
	departmensFilter,
	sorting,
	handleSortClick,
}: {
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
	return (
		<div className='main-emploee'>
			<span>
				<FilterDepartment departmensFilter={departmensFilter} />
				<span>
					<p>152 из 152</p>
					<FilterDefault action={true} />
				</span>
			</span>
			<TableEmploee sorting={sorting} handleSortClick={handleSortClick} />
		</div>
	)
}
