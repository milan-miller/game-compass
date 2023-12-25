import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
	const { data } = useGenres();

	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>
					<img
						style={{ width: '40px', height: '40px', borderRadius: '5px' }}
						src={getCroppedImageUrl(genre.image_background)}
						alt={genre.image_background}
					/>
					<p>{genre.name}</p>
				</li>
			))}
		</ul>
	);
};

export default GenreList;
