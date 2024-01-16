import { Link } from 'react-router-dom';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div className='gamecard'>
			<img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
			<div className='gamecard__info'>
				<div>
					{game.parent_platforms && (
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
					)}
				</div>
				<CriticScore score={game.metacritic} />
			</div>
			<Link to={`/games/${game.slug}`} className='gamecard__title'>
				<h2>{game.name}</h2>
			</Link>
			<Emoji rating={game.rating_top} />
		</div>
	);
};

export default GameCard;
