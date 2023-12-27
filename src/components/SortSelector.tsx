interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];

	return (
		<div className='dropdown'>
			<label htmlFor='sortOrder'>Order by:</label>
			<select
				id='sortOrder'
				onChange={(e) => onSelectSortOrder(e.target.value)}
			>
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
