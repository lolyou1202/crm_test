import './FilterDepartment.style.scss'
import { useState } from 'react'
import {
	Department,
	NUMOFUNCOVEREDFILTERS,
} from '../../../constants/departmens'
import { OutlineButton } from '../../ui/Button/OutlineButton/OutlineButton'
import classNames from 'classnames'

export const FilterDepartment = ({
	departmensFilter,
}: {
	departmensFilter: Department[]
}) => {
	const [isShowMore, setShowMore] = useState(false)

	return (
		<div className='filter-department'>
			<div className='department-list'>
				{departmensFilter.map((department, index) => {
					const departmentItemClassNames = classNames(
						'department-item',
						{
							hide:
								index + 1 > NUMOFUNCOVEREDFILTERS &&
								!isShowMore,
						}
					)
					return (
						<OutlineButton
							key={department.name}
							text={department.name}
							action={department.active}
							className={departmentItemClassNames}
							onClick={() => {}}
						/>
					)
				})}
				{departmensFilter.length > NUMOFUNCOVEREDFILTERS && (
					<OutlineButton
						text={isShowMore ? 'Скрыть' : 'Показать все'}
						action={false}
						onClick={() => setShowMore(prevState => !prevState)}
						className='department-showMore'
					/>
				)}
			</div>
		</div>
	)
}
