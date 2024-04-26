import './index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Navigate to='/dashboard' />} />
			<Route path='/employee' element={<>asd</>} />
			<Route path='/dashboard' element={<>qwe</>} />
			<Route path='*' element={<h1>404 - Page Not Found</h1>} />
		</Routes>
	</BrowserRouter>
)
