import useCheckToken from '../../hooks/useCheckToken'

const BudgetItems = () => {
	useCheckToken()

	return <h1>Budget Items</h1>
}

export default BudgetItems
