import './Emploee.style.scss'
import { useMemo, useState } from 'react'
import { HeaderEmploee } from '../../components/logic/Header/HeaderEmploee'
import { TableRow, tableRows } from '../../constants/tableFields'
import { FilterDepartment } from '../../components/logic/FilterDepartment/FilterDepartment'
import { FilterDefault } from '../../components/ui/FilterDefault/FilterDefault'
import { FilterDrawer } from '../../components/logic/FilterDrawer/FilterDrawer'
import { TableEmploee } from '../../components/ui/TableEmploee/TableEmploee'
import { PersonDrawer } from '../../components/logic/PersonDrawer/PersonDrawer'
import {
	AccordionType,
	OptionType,
	branchOptions,
	departmentOptions,
	directorOptions,
	postOptions,
} from '../../constants/filterOptions'

const dataTable = tableRows

export const Emploee = () => {
	const [filteredDataTable, setFilteredDataTable] = useState<TableRow[]>(
		dataTable.map(row => ({ favorite: false, ...row }))
	)
	const [searchInput, setSearchInput] = useState('')

	const [FilterDepartmentOptions, setFilterDepartmentOptions] = useState<
		OptionType[]
	>([{ active: true, label: 'Все' }, ...departmentOptions])

	const [filterState, setFilterState] = useState<{
		favorites: boolean
		branch: AccordionType
		department: AccordionType
		post: AccordionType
		director: AccordionType
	}>({
		favorites: false,
		branch: { optionType: 'radio', optionList: branchOptions },
		department: { optionType: 'checkbox', optionList: departmentOptions },
		post: { optionType: 'checkbox', optionList: postOptions },
		director: { optionType: 'checkbox', optionList: directorOptions },
	})

	const [sorting, setSorting] = useState<{
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}>({ atribute: 'name', direction: 'asc' })

	const [isOpenFilterDrawer, setOpenFilterDrawer] = useState(false)
	const [isOpenEmploeeDrawer, setOpenEmploeeDrawer] = useState(false)
	const [isFiltered, setFilter] = useState(false)

	const handleClickDepartment = (departmentChoice: string) => {
		if (departmentChoice === 'Все') {
			setFilterDepartmentOptions(prevState =>
				prevState.map((department, index) =>
					index === 0
						? { ...department, active: true }
						: { ...department, active: false }
				)
			)
		} else {
			setFilterDepartmentOptions(prevState =>
				prevState.map((department, index) =>
					index === 0
						? { ...department, active: false }
						: department.label === departmentChoice
						? { ...department, active: !department.active }
						: { ...department }
				)
			)
		}
	}

	const handleClickClearFilter = () => {
		const clearFunc = (array: OptionType[]) =>
			array.map(option => ({
				...option,
				active: false,
			}))
		setFilterState(prevState => ({
			favorites: false,
			branch: prevState.branch,
			department: {
				...prevState.department,
				optionList: clearFunc(prevState.department.optionList),
			},
			director: {
				...prevState.director,
				optionList: clearFunc(prevState.director.optionList),
			},
			post: {
				...prevState.post,
				optionList: clearFunc(prevState.post.optionList),
			},
		}))
	}
	const handleClickFavorite = (rowId: string) => {
		setFilteredDataTable(prevState => {
			return prevState.map(row =>
				row.id === rowId
					? { ...row, favorite: !row.favorite }
					: { ...row }
			)
		})
	}
	const handleClickSort = ({
		atribute,
		direction,
	}: {
		atribute: keyof TableRow
		direction: 'asc' | 'desc'
	}) => {
		switch (atribute) {
			case 'favorite':
				if (sorting.atribute === 'favorite') {
					setSorting({ atribute: 'name', direction: 'asc' })
					setFilteredDataTable(prevState => {
						return prevState.map(row => ({
							...row,
							favorite: false,
						}))
					})
				} else {
					setSorting({ atribute: 'favorite', direction: 'asc' })
					setFilteredDataTable(prevState => {
						return prevState.map(row => ({
							...row,
							favorite: true,
						}))
					})
				}
				break
			default:
				setSorting(prevState => {
					if (prevState.atribute === atribute) {
						return {
							...prevState,
							direction: direction === 'asc' ? 'desc' : 'asc',
						}
					} else {
						return { atribute, direction: 'asc' }
					}
				})
		}
	}
	const handleClickEmploee = () => {
		setOpenEmploeeDrawer(true)
	}
	const toggleDrawer = (
		setStateFunction: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setStateFunction(prevState => !prevState)
	}
	const getSearchResults = useMemo(() => {
		return filteredDataTable.filter(row => row.name.includes(searchInput))
	}, [searchInput])

	return (
		<>
			<HeaderEmploee
				valueInput={searchInput}
				resultsInput={getSearchResults}
				onChangeInput={setSearchInput}
			/>
			<div className='main-emploee'>
				<span>
					<FilterDepartment
						optionList={FilterDepartmentOptions}
						handleDepartmentClick={handleClickDepartment}
					/>
					<span>
						<p>
							{dataTable.length} из {dataTable.length}
						</p>
						<FilterDefault
							action={isFiltered}
							handleFilterButtonClick={() =>
								toggleDrawer(setOpenFilterDrawer)
							}
							handleDeleteFilterClick={() => {
								toggleDrawer(setFilter)
								handleClickClearFilter()
							}}
						/>
						<FilterDrawer
							filterState={filterState}
							setFilterState={setFilterState}
							isOpen={isOpenFilterDrawer}
							toggleDrawer={() =>
								toggleDrawer(setOpenFilterDrawer)
							}
							handleClickClear={handleClickClearFilter}
							handleClickAdd={() => toggleDrawer(setFilter)}
						/>
					</span>
				</span>
				<TableEmploee
					dataTable={filteredDataTable}
					sorting={sorting}
					handleClickFavorite={handleClickFavorite}
					handleSortClick={handleClickSort}
					handleEmploeeClick={handleClickEmploee}
				/>
				<PersonDrawer
					isOpen={isOpenEmploeeDrawer}
					toggleDrawer={() => toggleDrawer(setOpenEmploeeDrawer)}
				/>
			</div>
		</>
	)
}
