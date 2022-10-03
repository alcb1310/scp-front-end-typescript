import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { AccessTokenContext } from '../context/AccessTokenContext'

import './Login.scss'

function Login() {
	const [loginInfo, setLoginInfo] = useState<{
		username: string
		password: string
	}>({
		username: '',
		password: '',
	})
	
	const [validated, setValidated] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const accesTokenContext = useContext(AccessTokenContext)
	const server = process.env.REACT_APP_API_SERVER

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/app'

	const handleChange = (event: any) => {
		const { name, value } = event.target

		setLoginInfo((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()
		event.stopPropagation()

		const form = event.currentTarget
		if (form.checkValidity() === false) {
			setValidated(true)
		}

		try {
			let bodyFormData: FormData = new FormData()
			bodyFormData.append('username', loginInfo.username)
			bodyFormData.append('password', loginInfo.password)
			const res = await axios({
				method: 'post',
				url: `${server}/login`,
				data: bodyFormData,
				headers: { 'Content-Type': 'multipart/form-data' },
			})

			accesTokenContext?.setToken({
				accessToken: res.data.access_token,
				loggedIn: true,
			})
			setError('')
			navigate(from, { replace: true })
		} catch (err: any) {
			accesTokenContext?.setToken({
				accessToken: null,
				loggedIn: false,
			})
			setError('Invalid credentials')
		}
	}

	return (
		<Row className='mt-5'>
			<Col md={{ span: 4, offset: 4 }}>
				<h1 className='title'>Login</h1>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className='mb-3'>
						<Form.Label className='label'>Email</Form.Label>
						<Form.Control
							required
							name='username'
							id='username'
							type='email'
							placeholder='name@example.com'
							value={loginInfo.username}
							onChange={handleChange}
							size='sm'
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a valid email.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label className='label'>Password</Form.Label>
						<Form.Control
							required
							name='password'
							id='password'
							type='password'
							placeholder='password'
							value={loginInfo.password}
							onChange={handleChange}
							size='sm'
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a password.
						</Form.Control.Feedback>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button
							type='submit'
							variant='outline-primary'
							size='sm'
						>
							Login
						</Button>
					</div>
				</Form>
				{error === '' ? '' : <h4 className='error'>{error}</h4>}
			</Col>
		</Row>
	)
}

export default Login
