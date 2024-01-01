import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div>
			<img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
			{game.parent_platforms && (
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
			)}
			<CriticScore score={game.metacritic} />
			<h2>{game.name}</h2>
			<Emoji rating={game.rating_top} />
		</div>
	);
};

export default GameCard;
