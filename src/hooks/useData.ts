import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();
			setIsLoading(true);
			const fetchGames = async () => {
				try {
					const genres = await apiClient.get<FetchResponse<T>>(endpoint, {
						signal: controller.signal,
						...requestConfig,
					});
					setData(genres.data.results);
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
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;
