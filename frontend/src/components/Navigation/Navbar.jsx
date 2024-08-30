import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';

export default function Navbar() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<div className='navbar'>
			<nav className='navbar-links'>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
				</ul>
				<ul id='logged-out-nav'>
					{!sessionUser && (
						<>
							<li>
								<NavLink to='/signup'>Sign Up</NavLink>
							</li>
							<li>
								<NavLink to='/login'>Log In</NavLink>
							</li>
						</>
					)}
				</ul>
				<ul id='logged-in-nav'>
					{sessionUser && (
						<li>
							<ProfileButton />
							<button id='logout-button' onClick={logout}>
								Log Out
							</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
}