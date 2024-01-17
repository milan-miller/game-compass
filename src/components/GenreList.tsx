import { ScaleLoader } from 'react-spinners';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;
	if (isLoading) return <ScaleLoader color='grey' height={20} width={2} />;

	return (
		<div className='genres-layout'>
			<h2>
				<span>GENRES</span>
			</h2>
			<ul>
				{data?.results.map((genre) => (
					<li key={genre.id} className='genres__list'>
						<img
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.image_background}
						/>
						<button
							style={{
								fontWeight: selectedGenreId === genre.id ? 'bold' : 'normal',
							}}
							onClick={() => setSelectedGenreId(genre.id)}
						>
							{genre.name === 'Massively Multiplayer'
								? 'MMO'
								: genre.name.toUpperCase()}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
