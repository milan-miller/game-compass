import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { RingLoader } from 'react-spinners';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <RingLoader />;

	if (error || !game) throw error;

	return (
		<div className='details-layout'>
			<h2>
				<span>{game.name}</span>
			</h2>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
			<GameScreenshots gameId={game.id} />
		</div>
	);
};
export default GameDetailPage;
