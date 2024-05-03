import './index.style.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Emploee } from './pages/Emploee'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Navigate to='/dashboard' />} />
			<Route path='/employee' element={<Emploee />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='*' element={<h1>404 - Page Not Found</h1>} />
		</Routes>
	</BrowserRouter>
)
