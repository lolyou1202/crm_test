import { ThemeProvider, createTheme } from '@mui/material'
import classNames from 'classnames'
import { useState } from 'react'
import { Sidebar } from './components/logic/Sidebar/Sidebar'

const theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
})

function App({ page }: { page: React.ReactNode }) {
	const [isCollapseSidebar, setCollapseSidebar] = useState(false)

	const handleShowHideButtonClick = () => {
		setCollapseSidebar(prevState => !prevState)
	}

	const mainClassNames = classNames('main', { collapse: isCollapseSidebar })

	return (
		<ThemeProvider theme={theme}>
			<div className='app'>
				<Sidebar
					isCollapse={isCollapseSidebar}
					handleShowHideButtonClick={handleShowHideButtonClick}
				/>
				<div className={mainClassNames}>{page}</div>
			</div>
		</ThemeProvider>
	)
}

export default App
