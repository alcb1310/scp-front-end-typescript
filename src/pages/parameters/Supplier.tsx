import { useEffect, useState } from 'react'
import useCheckToken from '../../hooks/useCheckToken'
import { SupplierType } from '../../types/types'
import { Col, Row, Stack, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import '../../css/tables.scss'
import { useAccessToken } from '../../context/AccessTokenContext'
import axios from 'axios'

const Supplier = () => {
	useCheckToken()

	const [suppliers, setSuppliers] = useState<SupplierType[] | null>(null)

	const token = useAccessToken()

	const server = process.env.REACT_APP_API_SERVER
	const endPoint = process.env.REACT_APP_API_ENDPOINT

	useEffect(() => {
		console.log('useEffect')
		const getData = async () => {
			const response = await axios({
				method: 'GET',
				url: `${server}${endPoint}/suppliers`,
				headers: {
					Authorization: `Bearer ${token?.token?.accessToken}`,
				},
			})

			setSuppliers(response.data)
		}
		getData()
	}, [token, server, endPoint])

	const suppliersEl = suppliers?.map((supplier) => {
		return (
			<tr key={supplier.uuid}>
				<td>{supplier.supplier_id}</td>
				<td>{supplier.name}</td>
				<td>{supplier.contact_name}</td>
				<td>{supplier.contact_phone}</td>
				<td>{supplier.contact_email}</td>
			</tr>
		)
	})

	return (
		<>
			<Row className='mt-5'>
				<Col md={{ span: 8, offset: 2 }}>
					<Stack direction='horizontal'>
						<h1>Supplier</h1>

						<FontAwesomeIcon
							icon={faPlus}
							className='ms-auto add-icon'
						/>
					</Stack>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 8, offset: 2 }}>
					<Table>
						<thead>
							<th>ID</th>
							<th>Name</th>
							<th>Contact</th>
							<th>Phone</th>
							<th>Email</th>
						</thead>
						<tbody>{suppliersEl}</tbody>
					</Table>
				</Col>
			</Row>
		</>
	)
}

export default Supplier
