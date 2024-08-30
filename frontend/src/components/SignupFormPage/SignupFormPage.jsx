import { useState } from 'react';

export default function SignupFormPage() {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();


  }

  return (
		<div id='signup'>
			<h1>Sign Up</h1>

			<form id='signup-form' onSubmit={onSubmit}>
				<label htmlFor='username'>Username: </label>
				<input
					type='text'
					name='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label htmlFor='first-name'>First Name: </label>
				<input
					type='text'
					name='first-name'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<label htmlFor='last-name'>Last Name: </label>
				<input
					type='text'
					name='last-name'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
				<label htmlFor='email'>Email: </label>
				<input
					type='text'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label htmlFor='password'>Password: </label>
				<input
					type='text'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<label htmlFor='confirm-password'>Confirm Password: </label>
				<input
					type='text'
					name='confirm-password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>

        <button disabled={password !== confirmPassword}>
          Sign Up
        </button>
			</form>
		</div>
  );
}