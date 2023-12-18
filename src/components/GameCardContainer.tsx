import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return <div style={{ height: '200px', width: '150px' }}>{children}</div>;
};

export default GameCardContainer;
