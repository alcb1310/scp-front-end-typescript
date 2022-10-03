import { Route, Routes } from 'react-router-dom'
import Login from '../authentication/Login'
import { Root } from '../components/Root'
import RequireAuth from '../authentication/RequireAuth'
import Supplier from '../pages/parameters/Supplier'

const ProtectedRoutes = () => {

	// const shouldRedirect = !accessTokenContext?.token?.loggedIn

	return (
		<Routes>
			<Route path='/*' element={<Login />} />
			<Route element={<RequireAuth />}>
				<Route path='/app' element={<Root />} />
				<Route
					path='/app/parameters/suppliers'
					element={<Supplier />}
				/>
			</Route>
		</Routes>
	)
}

export default ProtectedRoutes
