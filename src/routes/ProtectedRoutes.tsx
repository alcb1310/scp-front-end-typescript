import { Route, Routes } from 'react-router-dom'
import Login from '../authentication/Login'
import { Root } from '../components/Root'
import RequireAuth from '../authentication/RequireAuth'
import Supplier from '../pages/parameters/Supplier'
import BudgetItems from '../pages/parameters/BudgetItems'
import Project from '../pages/transactions/Project'
import ProjectBudget from '../pages/transactions/ProjectBudget'
import Invoice from '../pages/transactions/Invoice'
import Create from '../pages/users/Create'
import ChangePassword from '../pages/users/ChangePassword'

const ProtectedRoutes = () => {
	return (
		<Routes>
			<Route path='/*' element={<Login />} />
			<Route element={<RequireAuth />}>
				<Route path='/app' element={<Root />} />
				<Route
					path='/app/parameters/suppliers'
					element={<Supplier />}
				/>
				<Route
					path='/app/parameters/budget-items'
					element={<BudgetItems />}
				/>
				<Route path='/app/transactions/project' element={<Project />} />
				<Route
					path='/app/transactions/project-budget'
					element={<ProjectBudget />}
				/>
				<Route path='/app/transactions/invoice' element={<Invoice />} />
				<Route path='/app/users/create' element={<Create />} />
				<Route
					path='/app/users/change-password'
					element={<ChangePassword />}
				/>
			</Route>
		</Routes>
	)
}

export default ProtectedRoutes
