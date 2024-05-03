import { useState } from 'react'
import { OutlineButton } from '../OutlineButton/OutlineButton'
import { CaretDoubleVertical } from '../../../Icons/CaretDoubleVertical'

export const SidebarShowHideButton = ({
	handleClickShowHideButton,
}: {
	handleClickShowHideButton: () => void
}) => {
	const [variantButton, setVariantButton] = useState<'default' | 'hover'>(
		'default'
	)

	return (
		<OutlineButton
			variant={variantButton}
			icon={<CaretDoubleVertical size={16} />}
			onClick={handleClickShowHideButton}
			onMouseEnter={() => setVariantButton('hover')}
			onMouseLeave={() => setVariantButton('default')}
			className='sidebar__showHideButton'
		/>
	)
}
