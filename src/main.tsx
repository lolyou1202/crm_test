import './index.style.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import { Emploee } from './pages/Emploee/Emploee'
import { Dashboard } from './pages/Dashboard/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename={window.location.pathname}>
		<Routes>
			<Route path='/' element={<Navigate to='/dashboard' />} />
			<Route path='/employee' element={<App page={<Emploee />} />} />
			<Route path='/dashboard' element={<App page={<Dashboard />} />} />
			<Route path='*' element={<h1>404 - Page Not Found</h1>} />
		</Routes>
	</BrowserRouter>
)
