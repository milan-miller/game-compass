import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GamesGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</ul>
		</>
	);
};
export default GamesGrid;
