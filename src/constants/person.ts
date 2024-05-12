export type PersonInfoCategoryType =
	| 'generalInfo'
	| 'professionalInfo'
	| 'education'
	| 'workExperience'
	| 'corporateEngagement'

export type PersonTabsList = {
	value: PersonInfoCategoryType
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

export type PersonInfoType = {
	[key in PersonInfoCategoryType]: PersonInfoBlockType[]
}

export type PersonInfoCellType = 'stringCell' | 'textFieldCell'
export type PersonInfoCellsType = {
	type: PersonInfoCellType
	name: string | null
	value: string | null
}

export type PersonInfoBlockType = {
	title: string
	numColumns?: number
	cells: PersonInfoCellsType[]
}

export const personInfo: PersonInfoType = {
	generalInfo: [
		{
			title: 'Личные данные',
			cells: [
				{
					type: 'stringCell',
					name: 'Имя',
					value: 'Александр',
				},
				{
					type: 'stringCell',
					name: 'Отчество',
					value: 'Александрович',
				},
				{
					type: 'stringCell',
					name: 'Фамилия',
					value: 'Александров',
				},
				{
					type: 'stringCell',
					name: 'Дата рождения',
					value: '12.04.1992',
				},
				{
					type: 'stringCell',
					name: 'Полных лет',
					value: '34',
				},
				{
					type: 'stringCell',
					name: 'Гражданство',
					value: 'Россия',
				},
				{
					type: 'stringCell',
					name: 'Семейное положение',
					value: 'Женат',
				},
				{
					type: 'stringCell',
					name: 'Водительские права',
					value: 'Есть',
				},
			],
		},
		{
			title: 'Контактная информация',
			cells: [
				{
					type: 'stringCell',
					name: 'Внутренний номер',
					value: 'Р0233',
				},
				{
					type: 'stringCell',
					name: 'Почта',
					value: 'kdibben2@purevolume.com',
				},
				{
					type: 'stringCell',
					name: 'Адрес проживания',
					value: '1-й Варшавский проезд, дом 1 А, строение 63',
				},
				{
					type: 'stringCell',
					name: 'Номер телефона',
					value: '+79266661266',
				},
				{
					type: 'stringCell',
					name: 'Резервный номер телефона',
					value: '+79266661266',
				},
			],
		},
	],
	professionalInfo: [
		{
			title: 'Навыки и компетенции',
			cells: [
				{
					type: 'textFieldCell',
					name: null,
					value: 'За 8 лет успешной разработки интерактивных веб-приложений, использования передовых технологий и наставничества молодых разработчиков я значительно улучшил масштабируемость организации, удобство работы с пользователями и дизайн пользовательского интерфейса /UX, что привело к повышению удовлетворенности пользователей на 50%, эффективности продукта на 80% и улучшению клиентской базы на 25%.дополнительные скрипты. Владея навыками работы с React, HTML, JS, AJAX и CSS, я уверен в своей способности привнести ценный опыт и инновационные решения на любую должность.',
				},
			],
		},
		{
			title: 'Сертификаты и квалификации',
			cells: [
				{
					type: 'textFieldCell',
					name: null,
					value: '- Сертификат о прохождении курса «Frontend-разработчик» от компании XYZ.\n- Квалификация Senior Frontend Developer, полученная после успешного завершения программы обучения в школе программирования ABC.\n- Сертификат об окончании специализированных курсов по JavaScript, HTML/CSS и React от образовательного центра DEF.\n- Квалификация Senior Frontend Developer, подтверждённая сертификатом от компании Google.\n- Сертификат о прохождении интенсивного курса по фронтенд-разработке от IT-компании GHI.',
				},
			],
		},
	],
	education: [
		{
			title: 'Образовательно учреждение 1',
			numColumns: 2,
			cells: [
				{
					type: 'stringCell',
					name: 'Название учебного заведения',
					value: 'Московский авиационный институт (национальный исследовательский университет)',
				},
				{
					type: 'stringCell',
					name: 'Факультет',
					value: 'Системы управления, информатика и электроэнергетика',
				},
				{
					type: 'stringCell',
					name: 'Специализация',
					value: 'Информатика и вычислительная техника',
				},
				{
					type: 'stringCell',
					name: 'Степень образования',
					value: 'Бакалавр',
				},
				{
					type: 'stringCell',
					name: 'Документ об образовании',
					value: 'ИВТ123456',
				},
				{
					type: 'stringCell',
					name: 'Квалификация',
					value: 'Инженер-программист',
				},
				{
					type: 'stringCell',
					name: 'Год поступления',
					value: '2019',
				},
				{
					type: 'stringCell',
					name: 'Год окончания',
					value: '2023',
				},
			],
		},
		{
			title: 'Образовательно учреждение 2',
			numColumns: 2,
			cells: [
				{
					type: 'stringCell',
					name: 'Название учебного заведения',
					value: 'Московский авиационный институт (национальный исследовательский университет)',
				},
				{
					type: 'stringCell',
					name: 'Факультет',
					value: 'Системы управления, информатика и электроэнергетика',
				},
				{
					type: 'stringCell',
					name: 'Специализация',
					value: 'Информатика и вычислительная техника',
				},
				{
					type: 'stringCell',
					name: 'Степень образования',
					value: 'Магистр',
				},
				{
					type: 'stringCell',
					name: 'Документ об образовании',
					value: 'ИВТ123456',
				},
				{
					type: 'stringCell',
					name: 'Квалификация',
					value: 'Инженер-программист',
				},
				{
					type: 'stringCell',
					name: 'Год поступления',
					value: '2023',
				},
				{
					type: 'stringCell',
					name: 'Год окончания',
					value: '2025',
				},
			],
		},
		{
			title: 'Образовательно учреждение 3',
			numColumns: 2,
			cells: [
				{
					type: 'stringCell',
					name: 'Название учебного заведения',
					value: 'Московский авиационный институт (национальный исследовательский университет)',
				},
				{
					type: 'stringCell',
					name: 'Факультет',
					value: 'Системы управления, информатика и электроэнергетика',
				},
				{
					type: 'stringCell',
					name: 'Специализация',
					value: 'Информатика и вычислительная техника',
				},
				{
					type: 'stringCell',
					name: 'Степень образования',
					value: 'Аспирант',
				},
				{
					type: 'stringCell',
					name: 'Документ об образовании',
					value: 'ИВТ123456',
				},
				{
					type: 'stringCell',
					name: 'Квалификация',
					value: 'Инженер-программист',
				},
				{
					type: 'stringCell',
					name: 'Год поступления',
					value: '2025',
				},
				{
					type: 'stringCell',
					name: 'Год окончания',
					value: '2027',
				},
			],
		},
	],
	workExperience: [
		{
			title: 'Организация 1',
			cells: [
				{
					type: 'stringCell',
					name: 'Название компании',
					value: 'IT hard',
				},
				{
					type: 'stringCell',
					name: 'Должность',
					value: 'Senior Frontend-разработчик',
				},
				{
					type: 'stringCell',
					name: 'Стаж работы',
					value: '9 месяцев',
				},
				{
					type: 'stringCell',
					name: 'Начало работы',
					value: 'Июль 2023',
				},
				{
					type: 'stringCell',
					name: 'Окончание работы',
					value: 'Март 2024',
				},
				{
					type: 'textFieldCell',
					name: 'Обязанности и достижения',
					value: '- Разработал и поддерживал веб-приложение с использованием современных технологий, таких как Rect, Node.js и MongoDB, что привело к увеличению клиентской базы на 40% и повышению надежности системы на 25%.\n- Совместная работа с другими разработчиками по разработке и сопровождению модульных тестов для веб-приложения привела к сокращению задержек, связанных с ошибками, на 20% и повышению общего качества кода на 30%.\n- Отслеживалась и оптимизировалась производительность веб-приложений, что привело к увеличению времени загрузки страниц на 15% и сокращению времени отклика сервера на 20%.',
				},
			],
		},
		{
			title: 'Организация 2',
			cells: [
				{
					type: 'stringCell',
					name: 'Название компании',
					value: 'IT hard',
				},
				{
					type: 'stringCell',
					name: 'Должность',
					value: 'Senior Frontend-разработчик',
				},
				{
					type: 'stringCell',
					name: 'Стаж работы',
					value: '9 месяцев',
				},
				{
					type: 'stringCell',
					name: 'Начало работы',
					value: 'Июль 2023',
				},
				{
					type: 'stringCell',
					name: 'Окончание работы',
					value: 'Март 2024',
				},
				{
					type: 'textFieldCell',
					name: 'Обязанности и достижения',
					value: '- Разработал и поддерживал веб-приложение с использованием современных технологий, таких как Rect, Node.js и MongoDB, что привело к увеличению клиентской базы на 40% и повышению надежности системы на 25%.\n- Совместная работа с другими разработчиками по разработке и сопровождению модульных тестов для веб-приложения привела к сокращению задержек, связанных с ошибками, на 20% и повышению общего качества кода на 30%.\n- Отслеживалась и оптимизировалась производительность веб-приложений, что привело к увеличению времени загрузки страниц на 15% и сокращению времени отклика сервера на 20%.',
				},
			],
		},
	],
	corporateEngagement: [
		{
			title: 'Офисная информация',
			cells: [
				{
					type: 'stringCell',
					name: 'Филиал',
					value: 'Москва',
				},
				{
					type: 'stringCell',
					name: 'Отдел',
					value: 'Разработка',
				},
				{
					type: 'stringCell',
					name: 'Должность',
					value: 'Начальник отдела',
				},
				{
					type: 'stringCell',
					name: 'Руководитель',
					value: null,
				},
				{
					type: 'stringCell',
					name: 'Подчиненные',
					value: 'Отдел разработки',
				},
				{
					type: 'stringCell',
					name: 'Задействование в проектах',
					value: 'Онлайн кинотеатр, Умный дом',
				},
				{
					type: 'stringCell',
					name: 'Группа совместной работы',
					value: null,
				},
				{
					type: 'stringCell',
					name: 'График работы',
					value: 'ПН - ПТ: 09:00 - 18:00',
				},
				{
					type: 'stringCell',
					name: 'Дата приёма на работу',
					value: '12.01.2024',
				},
				{
					type: 'stringCell',
					name: 'Стаж работы',
					value: '8 лет 3 месяца',
				},
			],
		},
	],
}
