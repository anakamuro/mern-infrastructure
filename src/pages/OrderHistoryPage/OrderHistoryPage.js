import { checkToken } from '../../utilities/users-service'

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        checkToken()
    }

    return (
        <>
            <h2>OrderHistoryPage "No Notes Yet!"</h2>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
        )
}