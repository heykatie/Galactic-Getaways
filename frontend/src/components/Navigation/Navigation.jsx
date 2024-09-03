import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../../../images/logo.png';
import name from '../../../../images/name.jpeg';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div className='nav'>
			<ul className='navbar'>
				<li id='logo'>
					<NavLink to='/'>
						<img src={logo} alt='logo' id='logo' />
					</NavLink>
				</li>
				<li id='name'>
					<NavLink to='/'>
						<img src={name} alt='name' id='name' />
					</NavLink>
				</li>
				{isLoaded && (
					<li id='user-button'>
						<ProfileButton user={sessionUser} />
					</li>
				)}
			</ul>
			{/* <hr className='nav-hr' /> */}
		</div>
	);
}

export default Navigation;
