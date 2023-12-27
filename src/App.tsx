import { useState } from 'react';
import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);

	return (
		<>
			<NavBar />
			<div style={{ display: 'flex' }}>
				<GenreList
					onSelectedGenre={(genre) => setSelectedGenre(genre)}
					selectedGenre={selectedGenre}
				/>
				<PlatformSelector
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					selectedPlatform={selectedPlatform}
				/>
				<GamesGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}
				/>
			</div>
		</>
	);
}

export default App;
