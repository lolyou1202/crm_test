import './FilterDepartment.style.scss'
import { OptionType } from '../../../constants/filterOptions'
import { useState } from 'react'
import classNames from 'classnames'
import { NUMOFUNCOVEREDFILTERS } from '../../../constants/departmens'
import { OutlineButton } from '../../ui/Button/OutlineButton/OutlineButton'

export const FilterDepartment = ({
	optionList,
	handleClickDepartment,
}: {
	optionList: OptionType[]
	handleClickDepartment: (department: string) => void
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
								handleClickDepartment(department.label)
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
