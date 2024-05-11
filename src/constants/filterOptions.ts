export type AccordionOptionType = { active: boolean; label: string }
export type AccordionType = {
	optionType: 'radio' | 'checkbox'
	optionList: AccordionOptionType[]
}

export const branchOptions: AccordionOptionType[] = [
	{ active: true, label: 'Москва' },
	{ active: false, label: 'Санкт-Петербург' },
]
export const departmentOptions: AccordionOptionType[] = [
	{ active: false, label: 'Маркетинг' },
	{ active: false, label: 'Разработка' },
	{ active: false, label: 'Закупки' },
	{ active: false, label: 'Кадры' },
]
export const postOptions: AccordionOptionType[] = [
	{ active: false, label: 'Начальник отдела' },
	{ active: false, label: 'Разработчик' },
	{ active: false, label: 'Стажер' },
	{ active: false, label: 'Менеджеп' },
]
export const directorOptions: AccordionOptionType[] = [
	{ active: false, label: 'Терентьев А. А.' },
	{ active: false, label: 'Егорова А. М.' },
	{ active: false, label: 'Зимин Я. Д.' },
	{ active: false, label: 'Никитин И. А.' },
	{ active: false, label: 'Малинина Я. А.' },
	{ active: false, label: 'Мещерякова М. Ю.' },
	{ active: false, label: 'Морозов С. Ф.' },
]