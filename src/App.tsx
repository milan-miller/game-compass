import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<div style={{ display: 'flex' }}>
				<GenreList />
				<GamesGrid />
			</div>
		</>
	);
}

export default App;
