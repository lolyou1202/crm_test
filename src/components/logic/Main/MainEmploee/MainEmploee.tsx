import './MainEmploee.style.scss'
import { Department } from '../../../../constants/departmens'
import { FilterDepartment } from '../../FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../../ui/FilterDefault/FilterDefault'
import { TableEmploee } from '../../../ui/TableEmploee/TableEmploee'

export const MainEmploee = ({
	departmensFilter,
}: {
	departmensFilter: Department[]
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
			<TableEmploee />
		</div>
	)
}
