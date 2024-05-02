import { headerTabs } from '../../../constants/headerTabs'
import { HeaderTab } from '../../ui/Tab/HeaderTab'
import './Header.style.scss'

export const HeaderEmploee = () => {
	return (
		<div className='header'>
			<span>
				<h1 className='header-name'>Сотрудники</h1>
				<div className='header-tabs'>
					{headerTabs.map(tabsItem => (
						<HeaderTab icon={tabsItem.icon} text={tabsItem.text} />
					))}
				</div>
			</span>
			<div className='header-search'></div>
		</div>
	)
}
