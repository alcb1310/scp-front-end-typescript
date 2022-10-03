import './App.scss'
import { AccessTokenContextProvider } from './context/AccessTokenContext'
import { BrowserRouter as Router } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { NavigationBar } from './components/NavigationBar'

const App = () => {
	return (
		<div className='App'>
			<AccessTokenContextProvider>
				<Router>
					<NavigationBar />
					<ProtectedRoutes />
				</Router>
			</AccessTokenContextProvider>
		</div>
	)
}

export default App
