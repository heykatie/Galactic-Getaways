import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../../../images/logo.png';
import name from '../../../../images/name.jpeg';
import nav from './Navigation.module.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div className={nav.nav}>
			<ul className={nav.navbar}>
				<li id={nav.left}>
					<NavLink to='/'>
						<img src={logo} alt='logo' id={nav.logo} />
					</NavLink>
					<NavLink to='/'>
						<img src={name} alt='name' id={nav.name} />
					</NavLink>
				</li>

				{isLoaded && (
					<div id={nav.right}>
						{sessionUser && (
							<li>
								<NavLink id={nav.createSpot} to='/spots/new'>
									Create a New Spot
								</NavLink>
							</li>
						)}
						<li id={nav.userButton}>
							<ProfileButton user={sessionUser} />
						</li>
					</div>
				)}
			</ul>
		</div>
	);
}

export default Navigation;
