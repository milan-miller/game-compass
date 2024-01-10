import { ScaleLoader } from 'react-spinners';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <ScaleLoader color='grey' height={20} width={2} />;

	return (
		<div>
			<h2>Genres</h2>
			<ul>
				{data?.results.map((genre) => (
					<li key={genre.id}>
						<img
							style={{ width: '40px', height: '40px', borderRadius: '5px' }}
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.image_background}
						/>
						<button
							style={{
								fontWeight: selectedGenreId === genre.id ? 'bold' : 'normal',
							}}
							onClick={() => onSelectedGenre(genre)}
						>
							{genre.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
