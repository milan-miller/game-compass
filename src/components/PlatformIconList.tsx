import { Platform } from '../hooks/useGames';
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
		sega: SiSega,
	};

	return (
		<>
			{platforms.map(
				(platform) =>
					platform.slug !== 'neo-geo' &&
					React.createElement(iconMap[platform.slug], { key: platform.id })
			)}
		</>
	);
};

export default PlatformIconList;
