import { useState } from 'react';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

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
					{data.map((platform) =>
						platform !== selectedPlatform ? (
							<p
								key={platform.id}
								onClick={() => {
									setIsOpen(!isOpen), onSelectPlatform(platform);
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
