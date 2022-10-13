export type Company = {
	uuid: string
	ruc: string
	name: string
	employees: number
}

export type User = {
	uuid: string
	name: string
	email: string
	company: Company
}

export type UserNoCompany = {
	uuid: string
	name: string
	email: string
}

export type UserCreate = {
	uuid: string | undefined
	name: string
	email: string
	password: string | undefined
}

export type SupplierType = {
	contact_name: string
	contact_phone: string
	contact_email: string
	supplier_id: string
	name: string
	uuid: string
	user: UserNoCompany,
	company: Company
}
