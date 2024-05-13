import './FilterDepartment.style.scss'
import { useState } from 'react'
import { OptionType } from '../../../constants/filterOptions'
import { NUMOFUNCOVEREDFILTERS } from '../../../constants/departmens'
import { OutlineButton } from '../../ui/Button/OutlineButton/OutlineButton'
import classNames from 'classnames'

export const FilterDepartment = ({
	optionList,
	handleDepartmentClick,
}: {
	optionList: OptionType[]
	handleDepartmentClick: (department: string) => void
}) => {
	const [isShowMore, setShowMore] = useState(false)

	return (
		<div className='filter-department'>
			<div className='department-list'>
				{optionList.map((department, index) => {
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
							key={department.label}
							text={department.label}
							action={department.active}
							className={departmentItemClassNames}
							onClick={() =>
								handleDepartmentClick(department.label)
							}
						/>
					)
				})}
				{optionList.length > NUMOFUNCOVEREDFILTERS && (
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
