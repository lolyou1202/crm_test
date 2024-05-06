import './FilterDefault.style.scss'
import { Cross } from '../../Icons/Cross'
import { Filter } from '../../Icons/Filter'
import { FilledButton } from '../Button/FilledButton/FilledButton'

export const FilterDefault = ({ action }: { action: boolean }) => {
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
				onClick={() => {}}
				className='filterDefault-button'
			/>
		</div>
	)
}
