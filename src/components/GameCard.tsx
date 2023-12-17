import { Game } from '../hooks/useGames';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div>
			<img src={game.background_image} alt={game.name} />
			<h2>{game.name}</h2>
		</div>
	);
};

export default GameCard;
