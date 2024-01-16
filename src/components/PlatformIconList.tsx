import { Platform } from '../entities/Platform';
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiSega, SiAtari } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import React from 'react';
import { TbExclamationMark } from 'react-icons/tb';
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
		atari: SiAtari,
		'commodore-amiga': TbExclamationMark,
		'3do': TbExclamationMark,
		'neo-geo': TbExclamationMark,
	};

	return (
		<>
			{platforms.map((platform) =>
				React.createElement(iconMap[platform.slug], {
					key: platform.id,
					className: 'gamecard__info-icon',
				})
			)}
		</>
	);
};

export default PlatformIconList;
