import useCheckToken from "../../hooks/useCheckToken";

const ChangePassword = () => {
    useCheckToken()

    return <h1>Change Password</h1>
}

export default ChangePassword