import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {
  const sessionUser = useSelector(state => state.session.user);

  return (
		<nav className='navbar'>
      <ul className='navbar-links'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
        {!sessionUser &&
          <>
            <li>
              <NavLink to='/signup'>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Log In</NavLink>
            </li>
          </>
        }
        {sessionUser &&
          <li><button id='navbar-button'>Log Out</button></li>
        }
			</ul>
		</nav>
  );
}