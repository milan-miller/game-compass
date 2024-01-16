import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
	className: string;
}

const DefinitionItem = ({ term, children, className }: Props) => {
	return (
		<div className={className}>
			<dt>{term}</dt>
			<dd>{children}</dd>
		</div>
	);
};
export default DefinitionItem;
