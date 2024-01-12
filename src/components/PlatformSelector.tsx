import { useState } from 'react';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const selectedPlatform = usePlatform(selectedPlatformId);

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	if (error) return null;

	return (
		<div className='dropdown'>
			<button onClick={toggleDropdown}>
				{selectedPlatform?.name || 'Platforms'}
			</button>
			{isOpen && data && (
				<div className='dropdown-content'>
					{data?.results.map((platform) =>
						platform !== selectedPlatform ? (
							<p
								key={platform.id}
								onClick={() => {
									setIsOpen(!isOpen), setSelectedPlatformId(platform.id);
								}}
							>
								{platform.name}
							</p>
						) : null
					)}
				</div>
			)}
		</div>
	);
};
export default PlatformSelector;
