export type OptionType = { active: boolean; label: string }
export type AccordionType = {
	optionType: 'radio' | 'checkbox'
	optionList: OptionType[]
}

export const branchOptions: OptionType[] = [
	{ active: true, label: 'Москва' },
	{ active: false, label: 'Санкт-Петербург' },
	{ active: false, label: 'Казань' },
	{ active: false, label: 'Воронеж' },
]
export const departmentOptions: OptionType[] = [
	{ active: false, label: 'Маркетинг' },
	{ active: false, label: 'Разработка' },
	{ active: false, label: 'Аналитика' },
	{ active: false, label: 'Закупки' },
	{ active: false, label: 'Финансы' },
	{ active: false, label: 'Юридический' },
	{ active: false, label: 'Продакшн' },
	{ active: false, label: 'Дизайн' },
	{ active: false, label: 'Кадры' },
]
export const postOptions: OptionType[] = [
	{ active: false, label: 'Начальник отдела' },
	{ active: false, label: 'Разработчик' },
	{ active: false, label: 'Стажер' },
	{ active: false, label: 'Менеджер' },
	{ active: false, label: 'Дизайнер' },
	{ active: false, label: 'Тестировщик' },
	{ active: false, label: 'HR' },
	{ active: false, label: 'Системный администратор' },
	{ active: false, label: 'Верстальщик' },
]
export const directorOptions: OptionType[] = [
	{ active: false, label: 'Терентьев А. А.' },
	{ active: false, label: 'Егорова А. М.' },
	{ active: false, label: 'Зимин Я. Д.' },
	{ active: false, label: 'Никитин И. А.' },
	{ active: false, label: 'Малинина Я. А.' },
	{ active: false, label: 'Мещерякова М. Ю.' },
	{ active: false, label: 'Морозов С. Ф.' },
]
