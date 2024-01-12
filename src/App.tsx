import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
	return (
		<>
			<NavBar />
			<div style={{ display: 'flex' }}>
				<GenreList />
				<div>
					<GameHeading />
					<PlatformSelector />
					<SortSelector />
				</div>
				<GamesGrid />
			</div>
		</>
	);
}

export default App;
