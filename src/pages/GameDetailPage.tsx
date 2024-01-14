import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { RingLoader } from 'react-spinners';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <RingLoader />;

	if (error || !game) throw error;

	return (
		<>
			<h1>{game.name}</h1>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
		</>
	);
};
export default GameDetailPage;
