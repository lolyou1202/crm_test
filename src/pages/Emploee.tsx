import { useState } from 'react'
import { HeaderEmploee } from '../components/logic/Header/HeaderEmploee'
import { Sidebar } from '../components/logic/Sidebar/Sidebar'
import { HeaderTab, headerTabs } from '../constants/headerTabs'

export const Emploee = () => {
	const [variantShow, setVariantShow] = useState<HeaderTab[]>(
		headerTabs.map(tabsItem => {
			if (tabsItem.variant === 'table') {
				return {
					active: true,
					...tabsItem,
				}
			} else {
				return {
					active: false,
					...tabsItem,
				}
			}
		})
	)

	return (
		<div className='app'>
			<Sidebar />
			<div className='main'>
				<HeaderEmploee
					variantShow={variantShow}
					setVariantShow={setVariantShow}
				/>
			</div>
		</div>
	)
}
