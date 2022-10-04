import './App.scss'
import { AccessTokenContextProvider } from './context/AccessTokenContext'
import { BrowserRouter as Router } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { NavigationBar } from './components/NavigationBar'
import Footer from './components/Footer'

const App = () => {
	return (
		<div className='App'>
			<AccessTokenContextProvider>
				<Router>
					<NavigationBar />
					<ProtectedRoutes />
					<Footer />
				</Router>
			</AccessTokenContextProvider>
		</div>
	)
}

export default App
