import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors({});
			return dispatch(
				sessionActions.signup({
					email,
					username,
					firstName,
					lastName,
					password,
				})
			)
				.then(closeModal)
				.catch(async (res) => {
					const data = await res.json();
					if (data?.errors) {
						setErrors(data.errors);
					}
				});
		}
		return setErrors({
			confirmPassword:
				'Confirm Password field must be the same as the Password field',
		});
	};

	return (
		<div className='signup'>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit} className='signup-form'>
				<input
					className='input'
					placeholder='Email'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				{errors.email && <p>{errors.email}</p>}
				<br></br>
				<input
					placeholder='Username'
					className='input'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				{errors.username && <p>{errors.username}</p>}
				<br></br>
				<input
					placeholder='First Name'
					className='input'
					type='text'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				{errors.firstName && <p>{errors.firstName}</p>}
				<br></br>
				<input
					placeholder='Last Name'
					className='input'
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
				{errors.lastName && <p>{errors.lastName}</p>}
				<br></br>
				<input
					placeholder='Password'
					className='input'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				{errors.password && <p>{errors.password}</p>}
				<br></br>
				<input
					placeholder='Confirm Password'
					className='input'
					type='password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				<br></br>
				<br></br>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
