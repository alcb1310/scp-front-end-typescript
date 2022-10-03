
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
// import { useAccessToken } from '../context/AccessTokenContext'

const NavbarLink = styled(Link)`
	text-decoration: none;
	color: #06283D;
`

const NavDropdownItem = styled(NavDropdown.Item)`
	color: #06283D;
`

export const NavigationBar: React.FC = () => {
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
							<NavDropdownItem>
								<NavbarLink to='/app/transactions/project'>
									Project
								</NavbarLink>
							</NavDropdownItem>
							<NavDropdownItem>
								<NavbarLink to='/app/transactions/project-budget'>
									Project Budget
								</NavbarLink>
							</NavDropdownItem>
							<NavDropdownItem>
								<NavbarLink to='/app/transactions/invoice'>
									Invoices
								</NavbarLink>
							</NavDropdownItem>
						</NavDropdown>
						<NavDropdown
							title='Parameters'
							id='scp-navbar-nav-parameters'
						>
							<NavDropdownItem>
								<NavbarLink to='/app/parameters/suppliers'>
									Supplier
								</NavbarLink>
							</NavDropdownItem>
							<NavDropdownItem>
								<NavbarLink to='/app/parameters/budget-items'>
									Budget Items
								</NavbarLink>
							</NavDropdownItem>
						</NavDropdown>
						<NavDropdown
							title='Users'
							id='scp-navbar-nav-users'
							className='ms-auto'
						>
							<NavDropdownItem>
								<NavbarLink to='/app/users/create'>Create User</NavbarLink>
							</NavDropdownItem>
							<NavDropdownItem>
								<NavbarLink to='/app/users/change-password'>
									Change Password
								</NavbarLink>
							</NavDropdownItem>
							<NavDropdownItem>
								<NavbarLink to='/app/users/reset-password'>Reset Password</NavbarLink>
							</NavDropdownItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<ul>
					<li>
						<NavbarLink to='/app'>App</NavbarLink>
					</li>
				</ul>
			</Container>
		</Navbar>
	) // : <p>&nbsp;</p>
	return navBar
}
