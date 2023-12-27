import { useState } from 'react';
import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<NavBar />
			<div style={{ display: 'flex' }}>
				<GenreList
					onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					selectedGenre={gameQuery.genre}
				/>
				<PlatformSelector
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
					selectedPlatform={gameQuery.platform}
				/>
				<SortSelector
					onSelectSortOrder={(sortOrder) =>
						setGameQuery({ ...gameQuery, sortOrder })
					}
				/>
				<GamesGrid gameQuery={gameQuery} />
			</div>
		</>
	);
}

export default App;
