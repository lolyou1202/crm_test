import './FilterButton.style.scss'
import { Cross } from '../../Icons/Cross'
import { Filter } from '../../Icons/Filter'
import { FilledButton } from '../Button/FilledButton/FilledButton'

export const FilterButton = ({
	action,
	handleFilterButtonClick,
	handleDeleteFilterClick,
}: {
	action: boolean
	handleFilterButtonClick: () => void
	handleDeleteFilterClick: () => void
}) => {
	return (
		<div className='filterButton'>
			{action && (
				<button
					className='filterButton-cross'
					onClick={handleDeleteFilterClick}
				>
					<Cross size={20} />
				</button>
			)}
			<FilledButton
				icon={<Filter />}
				text='Фильтр'
				action={action}
				onClick={handleFilterButtonClick}
				className='filterButton-button'
			/>
		</div>
	)
}
