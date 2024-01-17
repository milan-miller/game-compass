import { Game } from '../entities/Game';
import DefinitionItem from './DefinitionItem';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<div className='game-attributes'>
			<div className='game-attributes__container'>
				<div className='game-attributes__left-side'>
					<DefinitionItem term='Platforms' className='definition-item'>
						{game.parent_platforms?.map(({ platform }) => (
							<p key={platform.id}>{platform.name}</p>
						))}
					</DefinitionItem>
					<DefinitionItem
						term='Metascore'
						className='definition-item definition-item-score'
					>
						{game.metacritic}
					</DefinitionItem>
				</div>
				<div className='game-attributes__right-side'>
					<DefinitionItem term='Genres' className='definition-item'>
						{game.genres.map((genre) => (
							<p key={genre.id}>{genre.name}</p>
						))}
					</DefinitionItem>
					<DefinitionItem term='Publishers' className='definition-item'>
						{game.publishers?.map((publisher) => (
							<p key={publisher.id}>{publisher.name}</p>
						))}
					</DefinitionItem>
				</div>
			</div>
		</div>
	);
};
export default GameAttributes;
