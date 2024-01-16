import { useRef } from 'react';
import useGameQueryStore from '../store';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from './SearchIcon';

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);

					if (location.pathname !== '/') {
						setSelectedPlatformId(undefined);
						navigate('/');
					}
				}
			}}
			className='search-input'
		>
			<input
				type='text'
				placeholder='Search games'
				ref={ref}
				className='search-input__input'
			/>
			<SearchIcon className='search-input__search-icon' />
		</form>
	);
};

export default SearchInput;
