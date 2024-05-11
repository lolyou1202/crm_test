import './PersonDrawer.style.scss'
import { DrawerTemplate } from '../../ui/Drawer/DrawerTemplate'
import { Code } from '../../Icons/Code'
import { TabSlider } from '../../ui/TabSlider/TabSlider'
import { PersonTabsType, personTabs } from '../../../constants/person'
import { useState } from 'react'

export const PersonDrawer = ({
	isOpen,
	toggleDrawer,
}: {
	isOpen: boolean
	toggleDrawer: () => void
}) => {
	const [tabsState, setTabsState] = useState<PersonTabsType>('generalInfo')

	const handleClickTab = (tabValue: PersonTabsType) => {
		setTabsState(tabValue)
	}

	return (
		<DrawerTemplate
			isOpen={isOpen}
			toggleDrawer={toggleDrawer}
			classNameRoot='personDrawer-root'
			classNameWrapper='personDrawer-wrapper'
		>
			<div className='personDrawer__basicInfo'>
				<div className='personDrawer__basicInfo-imageEmploee'>
					{/*<img src='#' alt='image' />*/}
				</div>
				<span>
					<div className='personDrawer__basicInfo-signature'>
						<h2 className='personDrawer__basicInfo-name'>
							Александр Александрович
						</h2>
						<p className='personDrawer__basicInfo-id'>Р0233</p>
					</div>
					<div className='personDrawer__basicInfo-work'>
						<div className='personDrawer__basicInfo-department'>
							<Code className='personDrawer__basicInfo-department-icon' />
							<p className='personDrawer__basicInfo-department-name'>
								Разработка
							</p>
						</div>
						<p className='personDrawer__basicInfo-post'>
							Начальник отдела
						</p>
					</div>
				</span>
			</div>
			<div className='personDrawer-detailedInfo'>
				<TabSlider
					value={tabsState}
					tabList={personTabs}
					handleClickTab={handleClickTab}
				/>
			</div>
		</DrawerTemplate>
	)
}
