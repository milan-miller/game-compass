import React from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PacmanLoader } from 'react-spinners';

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

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<div>
			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<PacmanLoader />}
				style={{ overflow: 'hidden' }}
			>
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
				{/* {hasNextPage && (
					<button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
						{isFetchingNextPage ? 'Loading...' : 'Load More'}
					</button>
				)} */}
			</InfiniteScroll>
		</div>
	);
};
export default GamesGrid;
