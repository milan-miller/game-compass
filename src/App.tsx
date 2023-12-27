import { useState } from 'react';
import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<>
			<NavBar />
			<div style={{ display: 'flex' }}>
				<GenreList
					onSelectedGenre={(genre) => setSelectedGenre(genre)}
					selectedGenre={selectedGenre}
				/>
				<PlatformSelector />
				<GamesGrid selectedGenre={selectedGenre} />
			</div>
		</>
	);
}

export default App;
