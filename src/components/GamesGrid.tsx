import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GamesGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const games = await apiClient.get<FetchGamesResponse>('/games');
				console.log(games);
				setGames(games.data.results);
			} catch (error) {
				console.error(error);
				setError(error.message);
			}
		};

		fetchGames();
	}, []);

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};
export default GamesGrid;
