import useCheckToken from "../../hooks/useCheckToken";

const Create = () => {
    useCheckToken()

    return <h1>Create user</h1>
}

export default Create