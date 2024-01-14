import { LiaGamepadSolid } from 'react-icons/lia';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<nav>
			<LiaGamepadSolid />
			<p>GameCompass</p>
			<SearchInput />
		</nav>
	);
};
export default NavBar;
