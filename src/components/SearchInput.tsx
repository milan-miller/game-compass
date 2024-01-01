import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
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
