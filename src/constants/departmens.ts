export type Department = {
	name: string
	active: boolean
}

export const departmens: Department[] = [
	{
		name: 'Все',
		active: true,
	},
	{
		name: 'Маркетинг',
		active: false,
	},
	{
		name: 'Закупки',
		active: false,
	},
	{
		name: 'Кадры',
		active: false,
	},
	{
		name: 'Разработка',
		active: false,
	},
	//{
	//	name: 'Разработка',
	//	active: false,
	//},
	//{
	//	name: 'Разработка',
	//	active: false,
	//},
]

export const NUMOFUNCOVEREDFILTERS = 5