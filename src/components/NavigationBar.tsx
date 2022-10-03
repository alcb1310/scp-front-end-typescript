import { Link } from 'react-router-dom'

export const NavigationBar = () => {
	return (
		<ul>
			<li>
				<Link to='/app'>App</Link>
			</li>
			<li>
				<Link to='/app/parameters/suppliers'>Suppliers</Link>
			</li>
			<li>
				<Link to='/app/parameters/budget-items'>Budget Items</Link>
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
				<Link to='/app/users/change-password'>Change Password</Link>
			</li>
			<li>
				<Link to='/app/users/reset-password'>Reset Password</Link>
			</li>
		</ul>
	)
}
