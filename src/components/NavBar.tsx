import { LiaGamepadSolid } from 'react-icons/lia';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<nav>
			<LiaGamepadSolid />
			<p>GameHub</p>
			<SearchInput onSearch={onSearch} />
		</nav>
	);
};
export default NavBar;
