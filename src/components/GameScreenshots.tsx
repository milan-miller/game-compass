import useScreenshots from '../hooks/useScreenShots';

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<div className='game-screenshots'>
			{data?.results.map((file) => (
				<img
					key={file.id}
					src={file.image}
					alt={`${file.image}`}
					className='game-screenshots__image'
				/>
			))}
		</div>
	);
};

export default GameScreenshots;
