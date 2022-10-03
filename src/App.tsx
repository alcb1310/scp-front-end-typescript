import './App.scss'
// import Login from './authentication/Login'
import { AccessTokenContextProvider } from './context/AccessTokenContext'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'

const App = () => {
	return (
		<div className='App'>
			<AccessTokenContextProvider>
				<Router>
					<ul>
						<li>
							<Link to='/app'>App</Link>
						</li>
						<li>
							<Link to='/app/parameters/suppliers'>
								Suppliers
							</Link>
						</li>
						<li>
							<Link to='/app/parameters/budget-items'>
								Budget Items
							</Link>
						</li>
						<li>
							<Link to='/app/transactions/project'>Project</Link>
						</li>
						<li>
							<Link to='/app/transactions/project-budget'>Project Budget</Link>
						</li>
					</ul>
					{/* <Routes>
						<Route path='/' element={<Login />} />
					</Routes> */}
					<ProtectedRoutes />
				</Router>
			</AccessTokenContextProvider>
		</div>
	)
}

export default App
