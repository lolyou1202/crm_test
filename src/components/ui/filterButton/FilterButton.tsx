import './FilterButton.style.scss'
import { Cross } from '../../Icons/Cross'
import { Filter } from '../../Icons/Filter'
import { FilledButton } from '../Button/FilledButton/FilledButton'

export const FilterButton = ({
	action,
	handleClickFilterButton,
	handleClickDeleteFilter,
}: {
	action: boolean
	handleClickFilterButton: () => void
	handleClickDeleteFilter: () => void
}) => {
	return (
		<div className='filterButton'>
			{action && (
				<button
					className='filterButton-cross'
					onClick={handleClickDeleteFilter}
				>
					<Cross size={20} />
				</button>
			)}
			<FilledButton
				icon={<Filter />}
				text='Фильтр'
				action={action}
				onClick={handleClickFilterButton}
				className='filterButton-button'
			/>
		</div>
	)
}
