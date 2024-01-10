import { useState } from 'react';
import './App.css';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
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
					onSelectedGenre={(genre) =>
						setGameQuery({ ...gameQuery, genreId: genre.id })
					}
					selectedGenreId={gameQuery.genreId}
				/>
				<div>
					<GameHeading gameQuery={gameQuery} />
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platformId: platform.id })
						}
						selectedPlatformId={gameQuery.platformId}
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
