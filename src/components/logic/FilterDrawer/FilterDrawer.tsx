import './FilterDrawer.style.scss'
import { useMemo } from 'react'
import { DrawerTemplate } from '../../ui/Drawer/DrawerTemplate'
import { Swich } from '../../ui/Swich/Swich'
import { Accordion } from '../../ui/Accordion/Accordion'
import { OptionType, AccordionType } from '../../../constants/filterOptions'
import { FilledButton } from '../../ui/Button/FilledButton/FilledButton'

export const FilterDrawer = ({
	filterState,
	isOpen,
	setFilterState,
	toggleDrawer,
	handleClickClear,
	handleClickAdd,
}: {
	filterState: {
		favorites: boolean
		branch: AccordionType
		department: AccordionType
		post: AccordionType
		director: AccordionType
	}
	isOpen: boolean
	setFilterState: React.Dispatch<
		React.SetStateAction<{
			favorites: boolean
			branch: AccordionType
			department: AccordionType
			post: AccordionType
			director: AccordionType
		}>
	>
	toggleDrawer: () => void
	handleClickClear: () => void
	handleClickAdd: () => void
}) => {
	const isSelectedOne = useMemo(() => {
		for (const index in filterState) {
			const key = index as keyof typeof filterState

			switch (key) {
				case 'favorites':
					if (filterState[key] === true) return true
					break
				case 'department':
				case 'director':
				case 'post':
					if (
						filterState[key].optionList.find(
							option => option.active
						)
					) {
						return true
					}
					break
				case 'branch':
					break
			}
		}
		return false
	}, [filterState])

	const handleClickSwich = () => {
		setFilterState(prevState => ({
			...prevState,
			favorites: !prevState.favorites,
		}))
	}

	const handleClickOption = (
		filterAtr: Exclude<keyof typeof filterState, 'favorites'>
	) => {
		return (label: string) => {
			setFilterState(prevState => {
				let newOptionList: OptionType[] = []
				switch (prevState[filterAtr].optionType) {
					case 'radio':
						newOptionList = prevState[filterAtr].optionList.map(
							option =>
								option.label === label
									? { ...option, active: true }
									: { ...option, active: false }
						)
						break
					case 'checkbox':
						newOptionList = prevState[filterAtr].optionList.map(
							option =>
								option.label === label
									? { ...option, active: !option.active }
									: option
						)
						break
				}
				return {
					...prevState,
					[filterAtr]: {
						...prevState[filterAtr],
						optionList: newOptionList,
					},
				}
			})
		}
	}

	return (
		<DrawerTemplate
			isOpen={isOpen}
			toggleDrawer={toggleDrawer}
			classNameRoot='filtersDrawer-root'
			classNameWrapper='filtersDrawer-wrapper'
		>
			<div className='filtersDrawer-content'>
				<h2 className='filtersDrawer-label'>Фильтр</h2>
				<div className='filterSwichLine' onClick={handleClickSwich}>
					<p className='filterSwichLine-label'>Только избранное</p>
					<Swich active={filterState.favorites} />
				</div>
				<Accordion
					label='Филиал'
					optionType={filterState.branch.optionType}
					optionsList={filterState.branch.optionList}
					onClickOption={handleClickOption('branch')}
				/>
				<Accordion
					label='Отдел'
					optionType={filterState.department.optionType}
					optionsList={filterState.department.optionList}
					onClickOption={handleClickOption('department')}
				/>
				<Accordion
					label='Должность'
					optionType={filterState.post.optionType}
					optionsList={filterState.post.optionList}
					onClickOption={handleClickOption('post')}
				/>
				<Accordion
					label='Руководитель'
					optionType={filterState.director.optionType}
					optionsList={filterState.director.optionList}
					onClickOption={handleClickOption('director')}
				/>
			</div>
			<div className='filtersDrawer-buttons'>
				<FilledButton
					className='filtersDrawer-funcButton'
					text='Сбросить'
					action={isSelectedOne}
					disabled={!isSelectedOne}
					onClick={handleClickClear}
				/>
				<FilledButton
					className='filtersDrawer-funcButton'
					variant='dark'
					text='Показать'
					action={true}
					disabled={!isSelectedOne}
					onClick={() => {
						toggleDrawer()
						handleClickAdd()
					}}
				/>
			</div>
		</DrawerTemplate>
	)
}
