import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return <div className='gamecard-container'>{children}</div>;
};

export default GameCardContainer;
