import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

function LoginFormModal() {
	const dispatch = useDispatch();
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({});
		return dispatch(sessionActions.login({ credential, password }))
			.then(closeModal)
			.catch(async (res) => {
				const data = await res.json();
				if (data?.message) {
					setErrors({ message: 'The provided credentials were invalid' });
				}
			});
	};

	const demoLogin = (e) => {
		e.stopPropagation();
		const demoCredential = 'DemoUser';
		const demoPassword = 'password4';
		return dispatch(
			sessionActions.login({ credential: demoCredential, password: demoPassword })
		)
		.then(closeModal)
		.catch(async (res) => {
			const data = await res.json();
			if (data && data.message) {
				setErrors(data);
			}
		});
	};

	return (
		<div className='login'>
			<h1>Log In</h1>
			{errors.message && <p>{errors.message}</p>}
			<form onSubmit={handleSubmit}>
				<input
					className='input'
					type='text'
					placeholder='Username or Email'
					value={credential}
					onChange={(e) => setCredential(e.target.value)}
					required
				/>
				<br></br>
				<input
					type='password'
					className='input'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<br></br>
				<br></br>
				<button
					type='submit'
					disabled={credential.length < 4 || password.length < 6}>
					Log In
				</button>
			</form>
			<br></br>
			<a href='#' onClick={demoLogin} id='demo-login' className='demo-link'>
				Log in as Demo User
			</a>
		</div>
	);
}

export default LoginFormModal;
