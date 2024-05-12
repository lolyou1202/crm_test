import { TabScrollButtonProps } from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase'
import { ArrowLeft } from '../../Icons/ArrowLeft'
import { ArrowRight } from '../../Icons/ArrowRight'

export const TabScrollButton = (props: TabScrollButtonProps) => {
	const { direction, disabled, slotProps, ...other } = props

	return (
		<ButtonBase
			component='div'
			className='scrollButtons'
			style={{ opacity: disabled ? 0 : 1 }}
			disabled={disabled}
			{...other}
		>
			{direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
		</ButtonBase>
	)
}
