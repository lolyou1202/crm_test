import './Sidebar.style.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { SidebarShowHideButton } from '../../ui/Button/SidebarButtons/SidebarShowHideButton'
import { menuSidebar } from '../../../constants/menuSidebar'
import { SidebarFilledButton } from '../../ui/Button/SidebarButtons/SidebarFilledButton'

export const Sidebar = () => {
	const [sidebarShow, setSidebarShow] = useState(true)

	const sidebarClassNames = classNames(
		'sidebar',
		{ show: sidebarShow },
		{ hide: !sidebarShow }
	)

	const handleClickShowHideButton = () => {
		setSidebarShow(prevState => !prevState)
	}

	return (
		<div className={sidebarClassNames}>
			<div className='sidebar__logo'>
				<SidebarShowHideButton
					handleClickShowHideButton={handleClickShowHideButton}
				/>
			</div>
			<div className='sidebar__menu'>
				{menuSidebar.map(menuItem => (
					<SidebarFilledButton
						key={menuItem.text}
						url={menuItem.url}
						icon={menuItem.icon}
						text={menuItem.text}
					/>
				))}
			</div>
		</div>
	)
}
