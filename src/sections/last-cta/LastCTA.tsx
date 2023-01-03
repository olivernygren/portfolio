import React from 'react';
import { useQuery } from 'urql';

import { LastCTAQuery } from '../../graphql';
import './styles.css';

export const LastCTA = () => {
	const [result] = useQuery({ query: LastCTAQuery });
	const { data, fetching, error } = result;

	if (fetching) return <p>Loading...</p>;
	if (error)
		return (
			<p>
				Error {error.message}
				{error.stack}
			</p>
		);

	return (
		<div className="last-cta">
			<h2>{data.lastCta.heading}</h2>
			<button>{data.lastCta.buttonText}</button>
		</div>
	);
};

export default LastCTA;
