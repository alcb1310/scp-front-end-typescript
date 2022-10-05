import axios from 'axios'
import { useEffect, useState } from 'react'
import useCheckToken from '../../hooks/useCheckToken'
import { User, Company, UserCreate } from '../../types/types'
import { useAccessToken } from '../../context/AccessTokenContext'
import { Col, Modal, Row, Stack, Table, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import '../../css/tables.scss'
import '../../css/user.scss'

const Create = () => {
	useCheckToken()
	const [users, setUsers] = useState<User[] | null>()
	const [company, setCompany] = useState<Company | null>()
	const [show, setShow] = useState<boolean>(false)
	const [selectedUser, setSelectedUser] = useState<UserCreate | null>(null)
	const [passwordRepeat, setPasswordRepeat] = useState<string | undefined>()
	const [error, setError] = useState<string | undefined>()
	const [success, setSuccess] = useState<boolean>(false)

	const token = useAccessToken()

	const server = process.env.REACT_APP_API_SERVER
	const endPoint = process.env.REACT_APP_API_ENDPOINT

	useEffect(() => {
		const getData = async () => {
			const url = `${server}${endPoint}/users`
			const response = await axios({
				method: 'GET',
				url: url,
				headers: {
					Authorization: `Bearer ${token?.token?.accessToken}`,
				},
			})
			setUsers(response.data)
		}

		getData()
	}, [token, server, endPoint, success])

	useEffect(() => {
		setCompany(() => {
			return users && users[0].company
		})
	}, [users])

	const addUser = (event: any) => {
		event.preventDefault()
		setShow(true)
		setSelectedUser(null)
		setError(undefined)
		setPasswordRepeat(undefined)
	}

	const handleClose = () => {
		setShow(false)
	}

	const getUser = async (uuidStr: string) => {
		const response = await axios({
			method: 'GET',
			url: `${server}${endPoint}/users/${uuidStr}`,
			headers: {
				Authorization: `Bearer ${token?.token?.accessToken}`,
			},
		})

		setSelectedUser({
			uuid: response.data.uuid,
			email: response.data.email,
			name: response.data.name,
			password: undefined,
		})
		setPasswordRepeat(undefined)
		setError(undefined)
		setShow(true)
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target
		setSelectedUser((prev) => ({ ...prev, [name]: value } as UserCreate))
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		// validate passwords
		if (!selectedUser?.uuid) {
			if (
				selectedUser?.password === undefined ||
				selectedUser?.password?.length < 3 ||
				selectedUser.password !== passwordRepeat
			) {
				setError('Invalid password')

				return
			}
		}

		const method = selectedUser.uuid ? 'PUT' : 'POST'
		const url = selectedUser.uuid
			? `${server}${endPoint}/users/${selectedUser.uuid}`
			: `${server}${endPoint}/users`

		console.log(method, url)

		try {
			await axios({
				method: method,
				url: url,
				headers: {
					Authorization: `Bearer ${token?.token?.accessToken}`,
				},
				data: selectedUser,
			})
			setSuccess((prev) => !prev)
			setShow(false)
		} catch (error) {
			console.log(error)

			setSuccess((prev) => !prev)
		}
	}

	const usersEl = users?.map((user) => {
		return (
			<tr key={user.uuid} onClick={() => getUser(user.uuid)}>
				<td>{user.email}</td>
				<td>{user.name}</td>
			</tr>
		)
	})

	const paragraphCountEl =
		users &&
		`You have ${users.length} users of a maximum of ${
			company && company?.employees
		}`

	return (
		<>
			<Row className='mt-5'>
				<Col md={{ span: 8, offset: 2 }}>
					<Stack direction='horizontal'>
						<h1>Create user</h1>

						<FontAwesomeIcon
							icon={faPlus}
							className='ms-auto add-icon'
							onClick={addUser}
						/>
					</Stack>
					<hr />
					<p>{paragraphCountEl}</p>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 8, offset: 2 }}>
					<Table hover striped bordered>
						<thead>
							<tr>
								<th>E-mail</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>{usersEl}</tbody>
					</Table>
				</Col>
			</Row>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Form onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>User</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId='formEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								name='email'
								onChange={handleChange}
								value={selectedUser?.email}
								disabled={selectedUser?.uuid ? true : false}
							/>
						</Form.Group>
						<Form.Group controlId='formName'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								onChange={handleChange}
								value={selectedUser?.name}
							/> 
						</Form.Group>
						<Form.Group controlId='formPassword' className={selectedUser?.uuid ? 'hidden' : ''}>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								onChange={handleChange}
								value={selectedUser?.password}
								isInvalid={!!error}
							/>
							<Form.Control.Feedback type='invalid'>
								{error}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId='formPasswordRepeat' className={selectedUser?.uuid ? 'hidden' : ''}>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password_repeat'
								value={passwordRepeat}
								onChange={(event: any) => {
									const value = event.target.value
									setPasswordRepeat(value)
								}}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='outline-secondary'
							onClick={handleClose}
						>
							Cancel
						</Button>
						<Button variant='outline-primary' type='submit'>
							Save
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	)
}

export default Create
