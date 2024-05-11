import './Sidebar.style.scss'
import classNames from 'classnames'
import { SidebarShowHideButton } from '../../ui/Button/SidebarButtons/SidebarShowHideButton'
import { menuSidebar } from '../../../constants/menuSidebar'
import { SidebarFilledButton } from '../../ui/Button/SidebarButtons/SidebarFilledButton'

export const Sidebar = ({
	isCollapse,
	handleShowHideButtonClick,
}: {
	isCollapse: boolean
	handleShowHideButtonClick: () => void
}) => {
	const sidebarClassNames = classNames('sidebar', { hide: isCollapse })

	return (
		<div className={sidebarClassNames}>
			<div className='sidebar__logo'>
				<SidebarShowHideButton
					handleClickShowHideButton={handleShowHideButtonClick}
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
