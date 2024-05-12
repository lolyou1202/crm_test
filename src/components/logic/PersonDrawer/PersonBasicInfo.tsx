import { personInfo } from '../../../constants/person'
import { Code } from '../../Icons/Code'

export const PersonBasicInfo = () => {
	const name = personInfo.generalInfo[0].cells[0].value
	const patronymic = personInfo.generalInfo[0].cells[1].value
	const id = personInfo.generalInfo[1].cells[0].value
	const department = personInfo.corporateEngagement[0].cells[1].value
	const post = personInfo.corporateEngagement[0].cells[2].value
	return (
		<div className='personDrawer__basicInfo'>
			<div className='personDrawer__basicInfo-imageEmploee'>
				{/*<img src='#' alt='image' />*/}
			</div>
			<span>
				<div className='personDrawer__basicInfo-signature'>
					<h2 className='personDrawer__basicInfo-name'>
						{name} {patronymic}
					</h2>
					<p className='personDrawer__basicInfo-id'>{id}</p>
				</div>
				<div className='personDrawer__basicInfo-work'>
					<div className='personDrawer__basicInfo-department'>
						<Code className='personDrawer__basicInfo-department-icon' />
						<p className='personDrawer__basicInfo-department-name'>
							{department}
						</p>
					</div>
					<p className='personDrawer__basicInfo-post'>{post}</p>
				</div>
			</span>
		</div>
	)
}
