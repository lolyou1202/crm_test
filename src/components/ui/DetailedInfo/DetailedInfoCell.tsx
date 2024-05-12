import { PersonInfoCellsType } from '../../../constants/person'

export const DetailedInfoCell = ({ cell }: { cell: PersonInfoCellsType }) => {
	const { type, name, value } = cell
	
	switch (type) {
		case 'stringCell':
			return (
				<div key={name} className='detailedInfo__block-cell stringCell'>
					{name && <p>{name}</p>}
					<span>{value ? value : '-'}</span>
				</div>
			)
		case 'textFieldCell':
			return (
				<div className='detailedInfo__block-cell textFieldCell'>
					{name && <p>{name}</p>}
					<div className='textField'>
						<p>{value}</p>
					</div>
				</div>
			)
	}
}
