import { createContext, ReactNode, useState, useContext } from 'react'

export type AccessToken = {
	accessToken: string | undefined | null
	loggedIn: boolean
}

type AccessTokenContextType = {
	token: AccessToken|null
	setToken: React.Dispatch<React.SetStateAction<AccessToken | null>>
}

type AccessTokenContextProviderProps = {
	children: ReactNode
}

export const AccessTokenContext = createContext<AccessTokenContextType | null>(
	{} as AccessTokenContextType
)

export const AccessTokenContextProvider = ({
	children,
}: AccessTokenContextProviderProps) => {
	const [token, setToken] = useState<AccessToken|null>(null)

	return (
		<AccessTokenContext.Provider value={{ token, setToken }}>
			{children}
		</AccessTokenContext.Provider>
	)
}

export const useAccessToken = () => {
	return useContext(AccessTokenContext)
}
