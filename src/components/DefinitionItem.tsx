import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<div>
			<dt>{term}</dt>
			<dd>{children}</dd>
		</div>
	);
};
export default DefinitionItem;
