import GameHeading from '../components/GameHeading';
import GamesGrid from '../components/GamesGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	return (
		<div style={{ display: 'flex' }}>
			<GenreList />
			<div>
				<GameHeading />
				<PlatformSelector />
				<SortSelector />
			</div>
			<GamesGrid />
		</div>
	);
};
export default HomePage;
