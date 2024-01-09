import React from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <p>{error.message}</p>;

	return (
		<div>
			<ul>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}

				{!isLoading &&
					data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
			</ul>
			{hasNextPage && (
				<button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? 'Loading...' : 'Load More'}
				</button>
			)}
		</div>
	);
};
export default GamesGrid;
