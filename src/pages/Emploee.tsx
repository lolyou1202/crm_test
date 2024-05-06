import { useState } from 'react'
import { HeaderEmploee } from '../components/logic/Header/HeaderEmploee'
import { Sidebar } from '../components/logic/Sidebar/Sidebar'
import { headerTabs } from '../constants/headerTabs'
import { departmens } from '../constants/departmens'
import { MainEmploee } from '../components/logic/Main/MainEmploee/MainEmploee'

export const Emploee = () => {
	const [variantShow, setVariantShow] = useState(headerTabs)
	const [departmensFilter, setDepartmensFilter] = useState(departmens)

	return (
		<div className='app'>
			<Sidebar />
			<div className='main'>
				<HeaderEmploee
					variantShow={variantShow}
					setVariantShow={setVariantShow}
				/>
				<MainEmploee departmensFilter={departmensFilter} />
			</div>
		</div>
	)
}
