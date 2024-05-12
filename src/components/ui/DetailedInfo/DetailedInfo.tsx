import './DetailedInfo.style.scss'
import {
	PersonInfoCategoryType,
	PersonInfoCellType,
	PersonInfoCellsType,
	personInfo,
} from '../../../constants/person'
import { DetailedInfoCell } from './DetailedInfoCell'

export const DetailedInfo = ({
	categoryState,
}: {
	categoryState: PersonInfoCategoryType
}) => {
	const cellList = (
		categoryCells: PersonInfoCellsType[],
		typeCell: PersonInfoCellType
	) => {
		const list = categoryCells.filter(cell => cell.type === typeCell)
		const lengthList = list.length
		return { list, lengthList }
	}
	return (
		<div className='detailedInfo'>
			{personInfo[categoryState].map(category => {
				const { cells, title, numColumns } = category
				const cellsStingType = cellList(cells, 'stringCell')
				const cellsTextFieldType = cellList(cells, 'textFieldCell')
				return (
					<div key={title} className='detailedInfo__block'>
						<h3 className='detailedInfo__block-title'>{title}</h3>
						{cellsStingType.lengthList > 0 && (
							<div
								className='detailedInfo__block-list'
								style={{
									gridTemplateColumns: `repeat(${
										numColumns ? numColumns : 3
									}, 1fr)`,
								}}
							>
								{cellsStingType.list.map(cell => (
									<DetailedInfoCell
										key={cell.name}
										cell={cell}
									/>
								))}
							</div>
						)}
						{cellsTextFieldType.list.map(cell => (
							<DetailedInfoCell key={cell.name} cell={cell} />
						))}
					</div>
				)
			})}
		</div>
	)
}
