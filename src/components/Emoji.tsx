import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
	rating: number;
}

interface EmojiMap {
	[key: number]: { src: string; alt: string; boxSize: string };
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: EmojiMap = {
		3: { src: meh, alt: 'meh', boxSize: '15px' },
		4: { src: thumbsUp, alt: 'recommended', boxSize: '15px' },
		5: { src: bullsEye, alt: 'exceptional', boxSize: '25px' },
	};

	const validRating = rating as keyof EmojiMap;

	const { src, alt, boxSize } = emojiMap[validRating];

	return (
		<img
			src={src}
			alt={alt}
			style={{
				width: boxSize,
				height: boxSize,
			}}
		/>
	);
};

export default Emoji;
