import { useState } from 'react'
import { OutlineButton } from '../OutlineButton/OutlineButton'
import { CaretDoubleVertical } from '../../../Icons/CaretDoubleVertical'

export const SidebarShowHideButton = ({
	setSidebarShow,
}: {
	setSidebarShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const [variantButton, setVariantButton] = useState<'default' | 'outlined'>(
		'default'
	)

	return (
		<OutlineButton
			variant={variantButton}
			icon={<CaretDoubleVertical size={16} />}
			onClick={() => setSidebarShow(prevState => !prevState)}
			onMouseEnter={() => setVariantButton('outlined')}
			onMouseLeave={() => setVariantButton('default')}
			className='sidebar__showHideButton'
		/>
	)
}
