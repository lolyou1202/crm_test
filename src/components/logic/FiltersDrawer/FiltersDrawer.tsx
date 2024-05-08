import './FiltersDrawer.style.scss'
import { FilledButton } from '../../ui/Button/FilledButton/FilledButton'
import { ArrowRight } from '../../Icons/ArrowRight'

export const FiltersDrawer = ({
	toggleDrawer,
}: {
	toggleDrawer: () => void
}) => {
	return (
		<div className='filtersDrawer'>
			<span>
				<FilledButton
					icon={<ArrowRight />}
					text='Назад'
					action={false}
					onClick={toggleDrawer}
					className='filtersDrawer-backButton'
				/>
			</span>
			<h2 className='filtersDrawer-label'>Фильтр</h2>
		</div>
	)
}
