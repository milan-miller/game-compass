import React from 'react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PacmanLoader } from 'react-spinners';

const GamesGrid = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

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
				<ul className='games-grid'>
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
