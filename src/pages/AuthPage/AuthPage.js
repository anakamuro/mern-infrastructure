import SignupForm from "../components/SignupForm/SignupForm";
import LoginForm from '../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
	return (
		<>
			<h2>AuthPage</h2>
            <SignupForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</>
	)
}