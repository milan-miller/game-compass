import logo from '../assets/logo.png';
import logoText from '../assets/logo-text.png';
import SearchInput from './SearchInput';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

const NavBar = () => {
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<nav className='navbar'>
			<Link
				to='/'
				className='navbar__brand'
				onClick={() => {
					if (location.pathname !== '/') {
						setSelectedPlatformId(undefined);
						navigate('/');
					}
				}}
			>
				<img src={logo} alt='logo' className='navbar__logo' />
				<img src={logoText} alt='logo-text' className='navbar__logo-text' />
			</Link>
			<SearchInput />
		</nav>
	);
};
export default NavBar;
