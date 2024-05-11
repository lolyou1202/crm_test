import { useState } from 'react'
import classNames from 'classnames'
import { Sidebar } from './components/logic/Sidebar/Sidebar'

function App({ page }: { page: React.ReactNode }) {
	const [isCollapseSidebar, setCollapseSidebar] = useState(false)

	const handleShowHideButtonClick = () => {
		setCollapseSidebar(prevState => !prevState)
	}

	const mainClassNames = classNames('main', { collapse: isCollapseSidebar })

	return (
		<div className='app'>
			<Sidebar
				isCollapse={isCollapseSidebar}
				handleShowHideButtonClick={handleShowHideButtonClick}
			/>
			<div className={mainClassNames}>{page}</div>
		</div>
	)
}

export default App
