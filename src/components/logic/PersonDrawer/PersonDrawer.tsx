import './PersonDrawer.style.scss'
import { DrawerTemplate } from '../../ui/Drawer/DrawerTemplate'
import { TabSlider } from '../../ui/TabSlider/TabSlider'
import { PersonInfoCategoryType, personTabs } from '../../../constants/person'
import { useState } from 'react'
import { PersonBasicInfo } from './PersonBasicInfo'
import { DetailedInfo } from '../../ui/DetailedInfo/DetailedInfo'

export const PersonDrawer = ({
	isOpen,
	toggleDrawer,
}: {
	isOpen: boolean
	toggleDrawer: () => void
}) => {
	const [categoryState, setCategoryState] =
		useState<PersonInfoCategoryType>('generalInfo')

	const handleClickTab = (tabValue: PersonInfoCategoryType) => {
		setCategoryState(tabValue)
	}

	return (
		<DrawerTemplate
			isOpen={isOpen}
			toggleDrawer={toggleDrawer}
			classNameRoot='personDrawer-root'
			classNameWrapper='personDrawer-wrapper'
		>
			<PersonBasicInfo />
			<TabSlider
				value={categoryState}
				tabList={personTabs}
				handleClickTab={handleClickTab}
			/>
			<DetailedInfo categoryState={categoryState} />
		</DrawerTemplate>
	)
}
