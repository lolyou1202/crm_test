import './PersonDrawer.style.scss'
import { DrawerTemplate } from '../../ui/Drawer/DrawerTemplate'

export const PersonDrawer = ({
	isOpen,
	toggleDrawer,
}: {
	isOpen: boolean
	toggleDrawer: () => void
}) => {
	return (
		<DrawerTemplate
			isOpen={isOpen}
			toggleDrawer={toggleDrawer}
			classNameRoot='personDrawer-root'
			classNameWrapper='personDrawer-wrapper'
		>
			<div className='personDrawer__basicInfo'>
				<div className='personDrawer__basicInfo-imageEmploee'>
					<img src='#' alt='image' />
				</div>
				<div>
					<div className='personDrawer__basicInfo-signature'>
						<h2 className='personDrawer__basicInfo-name'>
							Александр Александрович
						</h2>
						<p className='personDrawer__basicInfo-id'>Р0233</p>
					</div>
					<div className='personDrawer__basicInfo-work'>
						<div className='personDrawer__basicInfo-department'>
							<div className='personDrawer__basicInfo-department-icon'></div>
							<p className='personDrawer__basicInfo-department-name'>
								Разработка
							</p>
						</div>
						<p className='personDrawer__basicInfo-post'>
							Начальник отдела
						</p>
					</div>
				</div>
			</div>
			<div className='personDrawer-detailedInfo'></div>
		</DrawerTemplate>
	)
}
