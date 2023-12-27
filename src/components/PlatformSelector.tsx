import { useState } from 'react';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
	const { data, error } = usePlatforms();

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	if (error) return null;

	return (
		<div className='dropdown'>
			<button onClick={toggleDropdown}>Toggle Dropdown</button>
			{isOpen && data && (
				<div className='dropdown-content'>
					{data.map((platform) => (
						<p>{platform.name}</p>
					))}
				</div>
			)}
		</div>
	);
};
export default PlatformSelector;
