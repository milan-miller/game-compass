import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div>
			<img src={game.background_image} alt={game.name} />
			<h2>{game.name}</h2>
			<PlatformIconList
				platforms={game.parent_platforms.map((p) => p.platform)}
			/>
		</div>
	);
};

export default GameCard;
