import { useState } from 'react';
import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<NavBar
				onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
			/>
			<div style={{ display: 'flex' }}>
				<GenreList
					onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					selectedGenre={gameQuery.genre}
				/>
				<div>
					<GameHeading gameQuery={gameQuery} />
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
				</div>
				<GamesGrid gameQuery={gameQuery} />
			</div>
		</>
	);
}

export default App;
