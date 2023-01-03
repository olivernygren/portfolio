import React from 'react';
import { useQuery } from 'urql';
import { motion } from 'framer-motion';

import { HeroQuery } from '../../graphql';
import './styles.css';

export const Hero = () => {
	const [result] = useQuery({ query: HeroQuery });
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
		<div className="hero">
			<div className="content">
				<motion.img
					src={data.hero.logo.url}
					alt="Logo"
					className="header-logo"
					whileHover={{ transform: `rotate(360deg)` }}
				/>
				<div className="text">
					<h1>{data.hero.heading}</h1>
					<p>{data.hero.textBody}</p>
				</div>
				{/* <button className="cta-button"></button> */}
				<img
					src={data.hero.heroIllustration.url}
					alt="illustration"
					className="hero-illustration"
				/>
			</div>
		</div>
	);
};

export default Hero;
