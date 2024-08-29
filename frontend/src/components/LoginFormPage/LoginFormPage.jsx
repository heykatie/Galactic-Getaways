import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'
import { Navigate } from 'react-router-dom';

export default function LoginFormPage() {
  const dispatch = useDispatch();

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Navigate to='/' replace={true} />;

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      }
    )
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <label>Credentials: </label>
        <input
          type='text'
          name='credential'
          value={credential}
          placeholder='Email or Username'
          onChange={e => setCredential(e.target.value)}
          required
        />
        <br></br>
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {errors.credential && <p>{errors.credential}</p>}
        <br></br>
        <button>Log In</button>
      </form>
    </div>
  )
}