import './Emploee.style.scss'
import { useMemo, useState } from 'react'
import { HeaderEmploee } from '../../components/logic/Header/HeaderEmploee'
import { TableRow, tableRows } from '../../constants/tableFields'
import { FilterDepartment } from '../../components/logic/FilterDepartment/FilterDepartment'
import { FilterButton } from '../../components/ui/filterButton/FilterButton'
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
import { PaginationCustom } from '../../components/ui/Pagination/PaginationCustom'

export const Emploee = () => {
	const [filteredDataTable, setFilteredDataTable] = useState<TableRow[]>(
		tableRows.map(row => ({ favorite: false, ...row }))
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

	const [paginationPage, setPaginationPage] = useState(1)

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
		setFilter(false)
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
	const handleChangePagination = (
		_: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPaginationPage(value)
	}
	const getSearchResults = useMemo(() => {
		if (searchInput.length > 0) {
			const findedRows = filteredDataTable.filter(
				row =>
					row.id.includes(searchInput) ||
					row.name.includes(searchInput) ||
					row.email.includes(searchInput) ||
					row.phone.includes(searchInput) ||
					row.post.includes(searchInput)
			)
			return findedRows.map(row => ({ id: row.id, name: row.name }))
		} else {
			return []
		}
	}, [filteredDataTable, searchInput])

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
							{`${filteredDataTable.length} из ${filteredDataTable.length}`}
						</p>
						<FilterButton
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
				<PaginationCustom
					paginationPage={paginationPage}
					handleChangePagination={handleChangePagination}
				/>
			</div>
		</>
	)
}
