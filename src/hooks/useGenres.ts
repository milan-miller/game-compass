import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
	id: number;
	name: string;
}

interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		const fetchGames = async () => {
			try {
				const genres = await apiClient.get<FetchGenresResponse>('/genres', {
					signal: controller.signal,
				});
				setGenres(genres.data.results);
			} catch (error) {
				console.error(error);
				if (error instanceof CanceledError) return;
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchGames();
		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
