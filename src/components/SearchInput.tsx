import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) setSearchText(ref.current.value);
			}}
			style={{ position: 'relative', display: 'inline-block' }}
		>
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
				ref={ref}
				placeholder='Search games...'
				style={{ paddingLeft: '15px' }}
			/>
		</form>
	);
};

export default SearchInput;
