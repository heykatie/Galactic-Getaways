import './LoginForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/session'
import { Navigate } from 'react-router-dom';
// import { useModal } from '.../.../context/Modal';

export default function LoginFormPage() {
  const dispatch = useDispatch();

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Navigate to='/' replace={true} />;

  const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});
    try {
			await dispatch(login({ credential, password }));
		} catch (err) {
			if (err) {
				setErrors({ message: 'The provided credentials were invalid' });
			}
		}
  };

  return (
		<div id='signup'>
			<h1>Log In</h1>

			<form id='login-form' onSubmit={handleSubmit}>
				<label htmlFor='credential'>Credentials: </label>
				<input
					type='text'
					name='credential'
					value={credential}
					placeholder='Email or Username'
					onChange={(e) => setCredential(e.target.value)}
					required
				/>

				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
        />

				<div className='error'>
					{errors.message && <p>{errors.message}</p>}{' '}
				</div>

				<button type='submit'>Log In</button>
			</form>
		</div>
  );
}