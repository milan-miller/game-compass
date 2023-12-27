import { useState } from 'react';

const SortSelector = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='dropdown'>
			<button onClick={toggleDropdown}>Order by: Relevance</button>
			{isOpen && (
				<div className='dropdown-content'>
					<p>Relevance</p>
					<p>Date added</p>
					<p>Name</p>
					<p>Release date</p>
					<p>Popularity</p>
					<p>Average rating</p>
				</div>
			)}
		</div>
	);
};
export default SortSelector;
