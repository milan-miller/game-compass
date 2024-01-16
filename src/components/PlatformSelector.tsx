import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const selectedPlatform = usePlatform(selectedPlatformId);

	console.log(1);
	console.log(selectedPlatform);
	console.log(2);

	if (error) return null;

	return (
		<div className='platform-selector'>
			<label htmlFor='platform'>Platform: </label>
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
