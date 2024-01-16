import useGameQueryStore from '../store';

const SortSelector = () => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];

	const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

	return (
		<div className='sort-selector'>
			<label htmlFor='sortOrder'>Order by: </label>
			<select id='sortOrder' onChange={(e) => setSortOrder(e.target.value)}>
				{sortOrders.map((order) => (
					<option key={order.value} value={order.value}>
						{order.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SortSelector;
