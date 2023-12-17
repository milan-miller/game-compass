interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red';

	return <div style={{ background: color, display: 'inline' }}>{score}</div>;
};
export default CriticScore;
