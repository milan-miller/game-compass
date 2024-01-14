import { LiaGamepadSolid } from 'react-icons/lia';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<Link to='/'>
				<LiaGamepadSolid />
				<p>GameCompass</p>
			</Link>
			<SearchInput />
		</nav>
	);
};
export default NavBar;
