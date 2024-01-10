import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();

	const genre = genres?.results.find((game) => game.id === gameQuery.genreId);
	const platform = platforms?.results.find(
		(platform) => platform.id === gameQuery.platformId
	);

	const heading = `${platform?.name || ''}  ${genre?.name || ''} Games`;

	return <h1>{heading}</h1>;
};
export default GameHeading;
