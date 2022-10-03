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
					<NavigationBar />
					<ProtectedRoutes />
				</Router>
			</AccessTokenContextProvider>
		</div>
	)
}

export default App
const NavigationBar = () => {
	return <ul>
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
			<Link to='/app/transactions/project-budget'>
				Project Budget
			</Link>
		</li>
		<li>
			<Link to='/app/transactions/invoice'>Invoices</Link>
		</li>
		<li>
			<Link to='/app/users/create'>Create User</Link>
		</li>
		<li>
			<Link to='/app/users/change-password'>
				Change Password
			</Link>
		</li>
		<li>
			<Link to='/app/users/reset-password'>
				Reset Password
			</Link>
		</li>
	</ul>
}

