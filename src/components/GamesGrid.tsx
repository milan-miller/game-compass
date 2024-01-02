import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <p>{error}</p>;

	return (
		<ul>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{!isLoading &&
				data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
		</ul>
	);
};
export default GamesGrid;
