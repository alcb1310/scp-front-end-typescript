import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAccessToken } from '../context/AccessTokenContext'

const RequireAuth = () => {
	const tokenContext = useAccessToken()
	const location = useLocation()

	return tokenContext?.token?.accessToken ? (
		<Outlet />
	) : (
		<Navigate to='/' state={{ from: location }} replace />
	)
}

export default RequireAuth
