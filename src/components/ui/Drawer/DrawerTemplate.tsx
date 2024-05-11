import './DrawerTemplate.style.scss'
import classNames from 'classnames'
import { Drawer } from '@mui/material'
import { FilledButton } from '../Button/FilledButton/FilledButton'
import { ArrowRight } from '../../Icons/ArrowRight'

export const DrawerTemplate = ({
	isOpen,
	toggleDrawer,
	anchor = 'right',
	classNameRoot,
	classNameWrapper,
	children,
}: {
	isOpen: boolean
	toggleDrawer: () => void
	anchor?: 'right' | 'left' | 'top' | 'bottom'
	classNameRoot?: string
	classNameWrapper?: string
	children?: React.ReactNode
}) => {
	const drawerRootClassNames = classNames('drawerContainer', classNameRoot)
	const drawerWrapperClassNames = classNames(
		'drawerContainer-wrapper',
		classNameWrapper
	)

	return (
		<Drawer open={isOpen} onClose={toggleDrawer} anchor={anchor}>
			<div className={drawerRootClassNames}>
				<span>
					<FilledButton
						icon={<ArrowRight />}
						text='Назад'
						action={false}
						onClick={toggleDrawer}
						className='drawerContainer-backButton'
					/>
				</span>
				<div className={drawerWrapperClassNames}>{children}</div>
			</div>
		</Drawer>
	)
}
