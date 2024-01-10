import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);

	const platform = usePlatform(gameQuery.platformId);

	const heading = `${platform?.name || ''}  ${genre?.name || ''} Games`;

	return <h1>{heading}</h1>;
};
export default GameHeading;
