import axios from 'axios'
import { useAccessToken } from '../context/AccessTokenContext'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const useCheckToken = () => {
	const [validate, setValidate] = useState<boolean>(false)
	const accessToken = useAccessToken()
	const navigate = useNavigate()
	const location = useLocation()

	const server = process.env.REACT_APP_API_SERVER
	const endPoint = process.env.REACT_APP_API_ENDPOINT

	const url = `${server}${endPoint}/users/me`

	if (!validate) {
		axios({
			method: 'POST',
			url: url,
			headers: {
				Authorization: `Bearer ${accessToken?.token?.accessToken}`,
			},
		})
			.then((res) => {
				axios({
					method: 'POST',
					url: `${server}/refresh`,
					headers: {
						Authorization: `Bearer ${accessToken?.token?.accessToken}`,
					},
				})
					.then((res) => {
						accessToken?.setToken({
							accessToken: res.data.access_token,
							loggedIn: true,
						})
					})
					.catch(() => {
						navigate('/', {
							state: { from: location },
							replace: true,
						})
					})
					.finally(() => setValidate(true))
			})
			.catch(() => {
				navigate('/', { state: { from: location }, replace: true })
			})
			.finally(() => setValidate(true))
	}

	return useCheckToken
}

export default useCheckToken
