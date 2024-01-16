import GameHeading from '../components/GameHeading';
import GamesGrid from '../components/GamesGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	return (
		<div style={{ display: 'flex' }}>
			<GenreList />
			<div className='main-layout'>
				<div className='selections-layout'>
					<GameHeading />
					<div className='selectors-layout'>
						<PlatformSelector />
						<SortSelector />
					</div>
				</div>
				<GamesGrid />
			</div>
		</div>
	);
};
export default HomePage;
