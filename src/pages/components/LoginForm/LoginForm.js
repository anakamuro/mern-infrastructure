import { useState } from 'react'
import { logIn } from '../../../utilities/users-service'

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const userToLogIn = await logIn(credentials)
            setUser(userToLogIn)
        } catch {
            setError('Error Logging In')
        }
    }

    return (
        <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Note</label>
            <input 
                type='textl'
                onChange={handleChange}
                required
            />
            <button type='submit'>Log In</button>
        </form>
        <p className='error-message' >{error}</p>
    </div>        
    )
}