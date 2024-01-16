import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);

	const firstTrailer = data?.results[0];

	if (isLoading) return null;

	if (error) throw error;

	return firstTrailer ? (
		<video
			src={firstTrailer.data[480]}
			poster={firstTrailer.preview}
			controls
			className='game-trailer'
		/>
	) : null;
};
export default GameTrailer;
