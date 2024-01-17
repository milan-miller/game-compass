import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

	if (error) return null;

	return (
		<div className='platform-selector'>
			<label htmlFor='platform'>
				<span>Platform:</span>{' '}
			</label>
			<select
				id='platform'
				onChange={(e) => {
					if (e.target.value === 'all') {
						setSelectedPlatformId(undefined);
					}
					setSelectedPlatformId(parseInt(e.target.value));
				}}
			>
				<option value='all'>{`All`}</option>
				{data?.results.map((platform) => (
					<option key={platform.id} value={platform.id}>
						{platform.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default PlatformSelector;
