import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import NotePage from '../NotePage/NotePage';
//import NewOrderPage from '../NewOrderPage/NewOrderPage';
//import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

 return (
		<main className='App'>
			{user ? (
				<>
					<Navbar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/notes' element={<NotePage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}
