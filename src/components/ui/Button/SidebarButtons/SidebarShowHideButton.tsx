import { OutlineButton } from '../OutlineButton/OutlineButton'
import { CaretDoubleVertical } from '../../../Icons/CaretDoubleVertical'

export const SidebarShowHideButton = ({
	handleClickShowHideButton,
}: {
	handleClickShowHideButton: () => void
}) => {
	return (
		<OutlineButton
			className='sidebar__showHideButton'
			icon={<CaretDoubleVertical size={16} />}
			onClick={handleClickShowHideButton}
		/>
	)
}
