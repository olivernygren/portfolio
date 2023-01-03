import React from 'react';
import { useQuery } from 'urql';

import { AboutQuery } from '../../graphql';

import './styles.css';

export const About = () => {
	const [result] = useQuery({ query: AboutQuery });
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
		<div className="about">
			<div className="text">
				<h2>{data.about.heading}</h2>
				<p>{data.about.textBody}</p>
			</div>
			<img src={data.about.image?.url} alt="Me" className="me-image" />
		</div>
	);
};

export default About;
