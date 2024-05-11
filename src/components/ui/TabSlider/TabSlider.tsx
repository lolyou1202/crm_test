import './TabSlider.style.scss'
import classNames from 'classnames'
import { PersonTabsList, PersonTabsType } from '../../../constants/person'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const TabSlider = ({
	value,
	tabList,
	handleClickTab,
	classNameSlider,
	classNameTab,
}: {
	value: PersonTabsType
	tabList: PersonTabsList[]
	handleClickTab?: (tabValue: PersonTabsType) => void
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
			scrollButtons={false}
		>
			{tabList.map(tab => (
				<Tab
					key={tab.value}
					value={tab.value}
					icon={tab.icon}
					label={tab.label}
					className={tabClassNames}
					onClick={() => handleClickTab && handleClickTab(tab.value)}
					disableRipple
				/>
			))}
		</Tabs>
	)
}
