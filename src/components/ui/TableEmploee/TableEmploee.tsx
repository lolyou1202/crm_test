import './TableEmploee.style.scss'
import { Star } from '../../Icons/Star'
import { TableSort } from '../../Icons/TableSort'
import { useState } from 'react'

const columns = [
	{
		id: 'name',
		label: 'ФИО',
		minWidth: 320,
	},
	{
		id: 'id',
		label: 'Внутр. номер',
		minWidth: 140,
	},
	{
		id: 'phone',
		label: 'Телефон',
		minWidth: 160,
	},
	{
		id: 'mail',
		label: 'Почта',
		minWidth: 220,
	},
	{
		id: 'branch',
		label: 'Филиал',
		minWidth: 160,
	},
	{
		id: 'department',
		label: 'Отдел',
		minWidth: 160,
	},
	{
		id: 'post',
		label: 'Должность',
		minWidth: 200,
	},
	{
		id: 'director',
		label: 'Руководитель',
		minWidth: 180,
	},
	{
		id: 'experience',
		label: 'Стаж работы (лет)',
		minWidth: 200,
	},
	{
		id: 'fullyear',
		label: 'Полных лет',
		minWidth: 140,
	},
	{
		id: 'nationality',
		label: 'Гражданство',
		minWidth: 160,
	},
]

export const TableEmploee = () => {
	const [hoverColumn, setHoverColumn] = useState<number | null>(null)

	return (
		<div className='table'>
			<div className='table-head'>
				<div className='table-row'>
					<div
						className='table-cell head favorite'
						onMouseEnter={() => setHoverColumn(0)}
						onMouseLeave={() => setHoverColumn(null)}
					>
						<Star />
					</div>
					{columns.map((column, index) => (
						<div
							className='table-cell head'
							onMouseEnter={() => setHoverColumn(index + 1)}
							onMouseLeave={() => setHoverColumn(null)}
							style={{ minWidth: column.minWidth }}
						>
							<p className='table-cell-text'>{column.label}</p>
							<TableSort sort='asc' />
						</div>
					))}
				</div>
			</div>
			<div className='table-body'>
				<div className='table-row'>
					<div
						className='table-cell body favorite'
						style={{
							backgroundColor:
								hoverColumn === 0 ? 'var(--gray-0)' : '',
						}}
					>
						<Star />
					</div>
					{columns.map((asd, index) => (
						<div
							className='table-cell body'
							style={{
								backgroundColor:
									hoverColumn === index + 1
										? 'var(--gray-0)'
										: '',
								minWidth: asd.minWidth,
							}}
						>
							<p className='table-cell-text'>{asd.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
