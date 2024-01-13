import { useState } from 'react';

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) return <p>{children}</p>;

	const summary = expanded ? children : children.substring(0, limit) + '...';

	return (
		<p>
			{summary}
			<button onClick={() => setExpanded(!expanded)}>
				{expanded ? 'Show Less' : 'Read More'}
			</button>
		</p>
	);
};
export default ExpandableText;