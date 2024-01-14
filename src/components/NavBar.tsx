import logo from '../assets/logo.png';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<Link to='/'>
				<img src={logo} alt='logo' style={{ height: '65px', width: '70px' }} />
				<p>GameCompass</p>
			</Link>
			<SearchInput />
		</nav>
	);
};
export default NavBar;
