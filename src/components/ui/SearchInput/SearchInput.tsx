import './SearchInput.style.scss'
import classNames from 'classnames'
import { Search } from '../../Icons/Search'
import { Cross } from '../../Icons/Cross'

export const SearchInput = ({ className }: { className?: string }) => {
	const searchClassNames = classNames('search', className)
	return (
		<div className={searchClassNames}>
			<button className='search-icon'>
				<Search />
			</button>
			<input
				type='text'
				placeholder='Поиск...'
				className='search-input'
			/>
			<button className='search-cross'>
				<Cross />
			</button>
		</div>
	)
}
