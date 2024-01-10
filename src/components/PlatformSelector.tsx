import { useState } from 'react';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatforms();
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
