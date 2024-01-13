import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { RingLoader } from 'react-spinners';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <RingLoader />;

	if (error || !game) throw error;

	return (
		<>
			<h1>{game.name}</h1>
			<p>{game.description_raw}</p>
		</>
	);
};
export default GameDetailPage;
