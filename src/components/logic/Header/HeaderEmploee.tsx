import './Header.style.scss'
import { Tab } from '../../ui/TabSlider/TabSlider'
import { HeaderTab } from '../../../constants/headerTabs'
import { SearchInput } from '../../ui/SearchInput/SearchInput'
import { useState } from 'react'

export const HeaderEmploee = ({
	variantShow,
	setVariantShow,
}: {
	variantShow: HeaderTab[]
	setVariantShow: React.Dispatch<React.SetStateAction<HeaderTab[]>>
}) => {
	const [searchInput, setSearchInput] = useState('')

	const handleClickTab = (variant: string) => {
		setVariantShow(prevState =>
			[...prevState].map(tab =>
				tab.variant === variant
					? { ...tab, active: true }
					: { ...tab, active: false }
			)
		)
	}

	return (
		<div className='header'>
			<span>
				<h1 className='header-name'>Сотрудники</h1>
				<div className='header-tabs'>
					{/*{variantShow.map(tabsItem => (
						<Tab
							key={tabsItem.text}
							action={tabsItem.active}
							icon={tabsItem.icon}
							text={tabsItem.text}
							onClick={() =>
								!tabsItem.active &&
								handleClickTab(tabsItem.variant)
							}
						/>
					))}*/}
				</div>
			</span>
			<SearchInput
				className='header-search'
				value={searchInput}
				onChange={setSearchInput}
			/>
		</div>
	)
}
