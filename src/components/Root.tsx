import useCheckToken from "../hooks/useCheckToken"


const Root = () => {
	useCheckToken()

	return (
		<>
			<h1>Root</h1>
		</>
	)
}

export default Root 
