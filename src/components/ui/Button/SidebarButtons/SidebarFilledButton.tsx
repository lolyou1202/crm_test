import { useLocation, useNavigate } from 'react-router-dom'
import { FilledButton } from '../FilledButton/FilledButton'
import { ReactNode, useEffect, useState } from 'react'

export const SidebarFilledButton = ({
	url,
	icon,
	text,
}: {
	url: string
	icon: ReactNode
	text: string
}) => {
	const [isActiveButton, setActiveButton] = useState(false)

	const navigate = useNavigate()
	const location = useLocation()

	const handleClickButton = () => {
		if (location.pathname !== url) {
			navigate(url)
		}
	}

	useEffect(() => {
		if (location.pathname === url) {
			setActiveButton(true)
		} else {
			setActiveButton(false)
		}
	}, [location.pathname, setActiveButton, url])

	return (
		<FilledButton
			icon={icon}
			text={text}
			action={isActiveButton}
			onClick={handleClickButton}
		/>
	)
}
