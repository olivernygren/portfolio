import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'urql';

import { LastCTAQuery } from '../../graphql';
import './styles.css';

export const LastCTA = () => {
	const [result] = useQuery({ query: LastCTAQuery });
	const { data, fetching, error } = result;

	if (fetching) return <></>;
	if (error)
		return (
			<p>
				Error {error.message}
				{error.stack}
			</p>
		);

	return (
		<motion.div
			className="last-cta"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h2>{data.lastCta.heading}</h2>
			<a href="mailto:oliver.nygren@icloud.com">{data.lastCta.buttonText}</a>
			<a href="javascript: JobnetModal.open()">Öppna modal</a>
			{/* <button onClick={() => JobnetModal.open()}>Öppna modal</button> */}
		</motion.div>
	);
};

export default LastCTA;
