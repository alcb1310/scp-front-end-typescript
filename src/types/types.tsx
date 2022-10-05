export type Company = {
    uuid: string,
    ruc: string,
    name: string,
    employees: number
}

export type User = {
    uuid: string,
    name: string,
    email: string,
    company: Company
}

export type UserCreate = {
    uuid: string | undefined,
    name: string,
    email: string,
    password: string | undefined
}