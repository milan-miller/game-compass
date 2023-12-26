import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	selectedGenre: Genre | null;
}

const GamesGrid = ({ selectedGenre }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</ul>
		</>
	);
};
export default GamesGrid;
