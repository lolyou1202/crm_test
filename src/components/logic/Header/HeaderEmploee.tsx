import './Header.style.scss'
import { SearchInput } from '../../ui/SearchInput/SearchInput'
import { TableRow } from '../../../constants/tableFields'

export const HeaderEmploee = ({
	valueInput,
	resultsInput,
	onChangeInput,
}: {
	valueInput: string
	resultsInput: TableRow[] | undefined
	onChangeInput: (value: string) => void
}) => {
	return (
		<div className='header'>
			<span>
				<h1 className='header-name'>Сотрудники</h1>
			</span>
			<SearchInput
				className='header-search'
				value={valueInput}
				onChange={onChangeInput}
			/>
			<div>{resultsInput?.map(asd => asd.name)}</div>
		</div>
	)
}
