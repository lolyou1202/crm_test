import './TabSlider.style.scss'
import classNames from 'classnames'
import {
	PersonInfoCategoryType,
	PersonTabsList,
} from '../../../constants/person'
import { TabScrollButton } from './TabsScrollButtons'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const TabSlider = ({
	value,
	tabList,
	handleClickTab,
	classNameSlider,
	classNameTab,
}: {
	value: PersonInfoCategoryType
	tabList: PersonTabsList[]
	handleClickTab: (tabValue: PersonInfoCategoryType) => void
	classNameSlider?: string
	classNameTab?: string
}) => {
	const sliderClassNames = classNames('tabsSlider', classNameSlider)
	const tabClassNames = classNames('tabsSlider-tab', classNameTab)

	return (
		<Tabs
			value={value}
			className={sliderClassNames}
			variant='scrollable'
			scrollButtons='auto'
			allowScrollButtonsMobile
			ScrollButtonComponent={TabScrollButton}
		>
			{tabList.map(tab => (
				<Tab
					key={tab.value}
					value={tab.value}
					icon={tab.icon}
					label={tab.label}
					className={tabClassNames}
					onClick={() => handleClickTab(tab.value)}
				/>
			))}
		</Tabs>
	)
}
