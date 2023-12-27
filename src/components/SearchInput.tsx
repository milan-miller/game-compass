import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
	const [searchInput, setSearchInput] = useState('');

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			<BsSearch
				style={{
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					left: '3px',
					zIndex: 1,
					color: 'grey',
					width: '13px',
				}}
			/>
			<input
				type='text'
				value={searchInput}
				placeholder='Search games...'
				onChange={(e) => setSearchInput(e.target.value)}
				style={{ paddingLeft: '15px' }}
			/>
		</div>
	);
};

export default SearchInput;
