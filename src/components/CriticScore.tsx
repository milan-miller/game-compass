interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color = score > 75 ? 'green' : score > 50 ? '#FFBF00' : 'red';

	if (!score) return null;

	return (
		<div
			className='critic-score'
			style={{ background: color, display: 'inline' }}
		>
			{score}
		</div>
	);
};

export default CriticScore;
