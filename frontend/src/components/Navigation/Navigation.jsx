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
				<li id='logo-name'>
					<NavLink to='/'>
						<img src={logo} alt='logo' />
					</NavLink>
					<NavLink to='/'>
						<img src={name} alt='name' />
					</NavLink>
				</li>

				{isLoaded && (
					<div id='right-nav'>
						{sessionUser && (
							<li>
								<NavLink id='create-spot' to='/spots/new'>
									Create a New Spot
								</NavLink>
							</li>
						)}
						<li id='user-button'>
							<ProfileButton user={sessionUser} />
						</li>
					</div>
				)}
			</ul>
		</div>
	);
}

export default Navigation;
