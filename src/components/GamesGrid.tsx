import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GamesGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</ul>
		</>
	);
};
export default GamesGrid;
