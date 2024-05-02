import './Sidebar.style.scss'
import { SidebarFilledButton } from '../../ui/Button/SidebarFilledButton/SidebarFilledButton'
import { useState } from 'react'
import { SidebarShowHideButton } from '../../ui/Button/SidebarShowHideButton/SidebarShowHideButton'
import classNames from 'classnames'
import { menuSidebar } from '../../../constants/menuSidebar'

export const Sidebar = () => {
	const [sidebarShow, setSidebarShow] = useState(true)

	const sidebarClassNames = classNames(
		'sidebar',
		{ show: sidebarShow },
		{ hide: !sidebarShow }
	)

	return (
		<div className={sidebarClassNames}>
			<div className='sidebar__logo'>
				<SidebarShowHideButton setSidebarShow={setSidebarShow} />
			</div>
			<div className='sidebar__menu'>
				{menuSidebar.map(menuItem => (
					<SidebarFilledButton
						url={menuItem.url}
						icon={menuItem.icon}
						text={menuItem.text}
					/>
				))}
			</div>
		</div>
	)
}
