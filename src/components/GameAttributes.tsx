import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<>
			<DefinitionItem term='Platforms'>
				{game.parent_platforms?.map(({ platform }) => (
					<p key={platform.id}>{platform.name}</p>
				))}
			</DefinitionItem>
			<DefinitionItem term='Metascore'>
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem term='Genres'>
				{game.genres.map((genre) => (
					<p key={genre.id}>{genre.name}</p>
				))}
			</DefinitionItem>
			<DefinitionItem term='Publishers'>
				{game.publishers?.map((publisher) => (
					<p key={publisher.id}>{publisher.name}</p>
				))}
			</DefinitionItem>
		</>
	);
};
export default GameAttributes;
