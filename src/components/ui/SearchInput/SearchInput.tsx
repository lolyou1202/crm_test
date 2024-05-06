import './SearchInput.style.scss'
import classNames from 'classnames'
import { Search } from '../../Icons/Search'
import { Cross } from '../../Icons/Cross'

export const SearchInput = ({
	value,
	onChange,
	className,
}: {
	value: string
	onChange: (value: string) => void
	className?: string
}) => {
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
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
			{value.length > 0 && (
				<button className='search-cross' onClick={() => onChange('')}>
					<Cross size={8} strokeWidth={2.5} />
				</button>
			)}
		</div>
	)
}
