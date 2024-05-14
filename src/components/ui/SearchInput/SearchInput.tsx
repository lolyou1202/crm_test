import './SearchInput.style.scss'
import classNames from 'classnames'
import { Search } from '../../Icons/Search'
import { Cross } from '../../Icons/Cross'

export const SearchInput = ({
	value,
	results,
	onChange,
	className,
}: {
	value: string
	results: {
		id: string
		name: string
	}[]
	onChange: (value: string) => void
	className?: string
}) => {
	const searchClassNames = classNames('search', className)

	return (
		<div className={searchClassNames}>
			<button className='search-icon' onClick={() => onChange('')}>
				<Search />
			</button>
			<span>
				<input
					type='text'
					placeholder='Поиск...'
					className='search-input'
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
				{results.length > 0 && (
					<div className='search__results'>
						{results.map(result => (
							<div
								key={result.id}
								className='search__results-item'
								onClick={() => onChange('')}
							>
								<p>{`${result.id}, ${result.name}`}</p>
							</div>
						))}
					</div>
				)}
			</span>
			{value.length > 0 && (
				<button className='search-cross' onClick={() => onChange('')}>
					<Cross size={8} strokeWidth={2.5} />
				</button>
			)}
		</div>
	)
}
