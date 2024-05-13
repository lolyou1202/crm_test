import './Pagination.style.scss'
import { Pagination, PaginationItem } from '@mui/material'
import { ArrowLeft } from '../../Icons/ArrowLeft'
import { ArrowRight } from '../../Icons/ArrowRight'

export const PaginationCustom = ({
	paginationPage,
	handleChangePagination,
}: {
	paginationPage: number
	handleChangePagination: (
		event: React.ChangeEvent<unknown>,
		value: number
	) => void
}) => {
	return (
		<Pagination
			count={10}
			page={paginationPage}
			onChange={handleChangePagination}
			className='pagination'
			renderItem={item => (
				<PaginationItem
					slots={{
						previous: ArrowLeft,
						next: ArrowRight,
					}}
					{...item}
				/>
			)}
		/>
	)
}
