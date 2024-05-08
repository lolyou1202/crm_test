import './FilterDefault.style.scss'
import { Cross } from '../../Icons/Cross'
import { Filter } from '../../Icons/Filter'
import { FilledButton } from '../Button/FilledButton/FilledButton'

export const FilterDefault = ({
	action,
	handleFilterButtonClick,
}: {
	action: boolean
	handleFilterButtonClick: () => void
}) => {
	return (
		<div className='filterDefault'>
			{action && (
				<button className='filterDefault-cross'>
					<Cross size={20} />
				</button>
			)}
			<FilledButton
				icon={<Filter />}
				text='Фильтр'
				action={action}
				onClick={handleFilterButtonClick}
				className='filterDefault-button'
			/>
		</div>
	)
}
