import './Header.style.scss'
import { SearchInput } from '../../ui/SearchInput/SearchInput'

export const HeaderEmploee = ({
	valueInput,
	resultsInput,
	onChangeInput,
}: {
	valueInput: string
	resultsInput: {
		id: string
		name: string
	}[]
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
				results={resultsInput}
				onChange={onChangeInput}
			/>
		</div>
	)
}
