import { Link } from 'react-router-dom';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div className='gamecard'>
			<img src={getCroppedImageUrl(game.background_image)} alt={game.name} />

			<div className='gamecard__info'>
				{game.parent_platforms && (
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
				)}
			</div>
			<CriticScore score={game.metacritic} />
			<Link to={`/games/${game.slug}`} className='gamecard__title'>
				<h2>{game.name}</h2>
			</Link>
		</div>
	);
};

export default GameCard;
