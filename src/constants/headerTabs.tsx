import { ReactNode } from 'react'
import { Kanban } from '../components/Icons/Kanban'
import { Table } from '../components/Icons/Table'

export type HeaderTab = {
	variant: 'kanban' | 'table'
	icon: ReactNode
	text: string
	active: boolean
}

export const headerTabs: HeaderTab[] = [
	{
		variant: 'kanban',
		icon: <Kanban />,
		text: 'Канбан',
		active: false,
	},
	{
		variant: 'table',
		icon: <Table />,
		text: 'Таблица',
		active: true,
	},
]
