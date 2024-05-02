import { useLocation, useNavigate } from 'react-router-dom'
import { FilledButton } from '../FilledButton/FilledButton'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export const SidebarFilledButton = ({
	url,
	icon,
	text,
}: {
	url: string
	icon: ReactNode
	text: string
}) => {
	const [variantButton, setVariantButton] = useState<
		'default' | 'outlined' | 'filled'
	>('default')

	const navigate = useNavigate()
	const location = useLocation()

	const handleClickButton = () => {
		if (location.pathname !== url) {
			navigate(url)
		}
	}

	const handleEventButton = useCallback(
		(variant: 'default' | 'outlined' | 'filled') => {
			if (location.pathname === url) {
				setVariantButton('filled')
				return
			}
			setVariantButton(variant)
		},
		[location.pathname, url]
	)

	useEffect(() => {
		handleEventButton('default')
	}, [handleEventButton])

	return (
		<FilledButton
			icon={icon}
			text={text}
			variant={variantButton}
			onClick={handleClickButton}
			onMouseEnter={() => handleEventButton('outlined')}
			onMouseLeave={() => handleEventButton('default')}
		/>
	)
}
