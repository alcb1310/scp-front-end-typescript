import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
// import { useAccessToken } from '../context/AccessTokenContext'

export const NavigationBar = () => {
	// const accessToken = useAccessToken()

	// const navBar = accessToken?.token?.accessToken ? (
	const navBar = (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Toggle aria-controls='scp-navbar-nav' />
				<Navbar.Collapse id='scp-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/company'>Create Company</Nav.Link>
						<NavDropdown
							title='Transactions'
							id='scp-navbar-nav-transactions'
						>
							<NavDropdown.Item>
								<Link to='/app/transactions/project'>
									Project
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/app/transactions/project-budget'>
									Project Budget
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/app/transactions/invoice'>
									Invoices
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Parameters'
							id='scp-navbar-nav-parameters'
						>
							<NavDropdown.Item>
								<Link to='/app/parameters/suppliers'>
									Supplier
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/app/parameters/budget-items'>
									Budget Items
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Users'
							id='scp-navbar-nav-users'
							className='ms-auto'
						>
							<NavDropdown.Item>
								<Link to='/app/users/create'>Create User</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/app/users/change-password'>
									Change Password
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/app/users/reset-password'>Reset Password</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<ul>
					<li>
						<Link to='/app'>App</Link>
					</li>
				</ul>
			</Container>
		</Navbar>
	) // : <p>&nbsp;</p>
	return navBar
}
