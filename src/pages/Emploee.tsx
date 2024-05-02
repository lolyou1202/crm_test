import { useState } from 'react'
import { HeaderEmploee } from '../components/logic/Header/HeaderEmploee'
import { Sidebar } from '../components/logic/Sidebar/Sidebar'
import { headerTabs } from '../constants/headerTabs'

export const Emploee = () => {
	const [variantList, setVariantList] = useState(headerTabs.map(tabsItem => ({
		active: false, 
	})))

	return (
		<div className='app'>
			<Sidebar />
			<div className='main'>
				<HeaderEmploee variantList />
			</div>
		</div>
	)
}
