import React from 'react';
import { useQuery } from 'urql';
import { motion } from 'framer-motion';

import { HeroQuery } from '../../graphql';
import './styles.css';
import { useWindowDimensions } from '../../hooks';

export const Hero = () => {
	const { width } = useWindowDimensions();

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

	if (width < 600) {
		return (
			<div className="hero-mobile">
				<motion.img
					src={data.hero.logo.url}
					alt="Logo"
					className="header-logo"
					initial={{ opacity: 0, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="text"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h1>{data.hero.heading}</h1>
					<p>{data.hero.textBody}</p>
				</motion.div>
				<div className="content">
					<div className="scroll-down">
						<p className="scroll-text">{data.hero.scrollDown}</p>
						<img src={data.hero.arrow.url} alt="" className="arrow" />
					</div>
					<motion.img
						src={data.hero.mobileIllustration.url}
						alt=""
						className="mobile-illustration"
						initial={{ marginRight: '-150px' }}
						animate={{ marginRight: '0px' }}
						transition={{ duration: 1.5 }}
					/>
				</div>
			</div>
		);
	}

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
				{/* <p className="scroll-text">{data.hero.scrollDown}</p> */}
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
