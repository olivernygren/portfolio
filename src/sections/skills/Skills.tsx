import React from 'react';
import { useQuery } from 'urql';

import { SkillsQuery } from '../../graphql';
import './styles.css';

export const Skills = () => {
	const [result] = useQuery({ query: SkillsQuery });
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
		<div className="skills">
			<img src={data.skills.image.url} alt="Skills" className="skills-image" />
			<div className="text">
				<h2>{data.skills.heading}</h2>
				<p>{data.skills.textBody}</p>
			</div>
		</div>
	);
};

export default Skills;
