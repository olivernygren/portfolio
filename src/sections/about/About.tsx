import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'urql';

import { AboutQuery } from '../../graphql';

import './styles.css';

export const About = () => {
	const [result] = useQuery({ query: AboutQuery });
	const { data, fetching, error } = result;

	if (fetching) return <></>;
	if (error) return <p>Error {error.message}</p>;

	return (
		<motion.div
			className="about"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="text">
				<h2>{data.about.heading}</h2>
				<p>{data.about.textBody}</p>
			</div>
			<img src={data.about.image?.url} alt="Me" className="me-image" />
		</motion.div>
	);
};

export default About;
