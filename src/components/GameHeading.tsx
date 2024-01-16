import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const genre = useGenre(genreId);

	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const platform = usePlatform(platformId);

	const heading = `${platform?.name || 'ALL'}  ${genre?.name || ''} Games`;

	return <h2>SHOWING: {heading}</h2>;
};
export default GameHeading;
