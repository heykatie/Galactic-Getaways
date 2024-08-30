import './SignupForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../../store/session';

export default function SignupFormPage() {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const sessionUser = useSelector((state) => state.session.user);
	if (sessionUser) return <Navigate to='/' replace={true} />;

	const onSubmit = async (e) => {
		e.preventDefault();
		setErrors({});

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          'Confirm Password field must be the same as the Password field',
      });
    }

    try {
      await dispatch(signup({ email, username, firstName, lastName, password}))
    } catch (err) {
      setErrors(err.errors)
		}
	};

	return (
		<div id='signup'>
			<h1>Sign Up</h1>

			<form id='signup-form' onSubmit={onSubmit}>
				<label htmlFor='email'>Email: </label>
				<input
					type='text'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				{errors.email && <p className='error'>{errors.email}</p>}
				<label htmlFor='username'>Username: </label>
				<input
					type='text'
					name='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				{errors.username && <p className='error'>{errors.username}</p>}
				<label htmlFor='first-name'>First Name: </label>
				<input
					type='text'
					name='first-name'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				{errors.firstName && <p className='error'>{errors.firstName}</p>}
				<label htmlFor='last-name'>Last Name: </label>
				<input
					type='text'
					name='last-name'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
				{errors.lastName && <p className='error'>{errors.lastName}</p>}
				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				{errors.password && <p className='error'>{errors.password}</p>}
				<label htmlFor='confirm-password'>Confirm Password: </label>
				<input
					type='password'
					name='confirm-password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				{errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

				<button>Sign Up</button>
			</form>
		</div>
	);
}
