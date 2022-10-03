import useCheckToken from "../../hooks/useCheckToken";

const ResetPassword = () => {
    useCheckToken()

    return <h1>Reset Password</h1>
}

export default ResetPassword