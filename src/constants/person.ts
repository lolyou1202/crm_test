export type PersonTabsType =
	| 'generalInfo'
	| 'professionalInfo'
	| 'education'
	| 'workExperience'
	| 'corporateEngagement'

export type PersonTabsList = {
	value: PersonTabsType
	icon?: React.ReactElement
	label?: string
}

export const personTabs: PersonTabsList[] = [
	{
		value: 'generalInfo',
		label: 'Общие данные',
	},
	{ value: 'professionalInfo', label: 'Профессиональные сведения' },
	{ value: 'education', label: 'Образование' },
	{ value: 'workExperience', label: 'Опыт работы' },
	{ value: 'corporateEngagement', label: 'Корпоративное задействование' },
]
