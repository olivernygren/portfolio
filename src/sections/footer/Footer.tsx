import React from 'react';
import { useQuery } from 'urql';
import { motion } from 'framer-motion';

import { FooterQuery } from '../../graphql';
import { SocialMediaLink } from '../../types';
import './styles.css';

export const Footer = () => {
	const [result] = useQuery({ query: FooterQuery });
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
		<footer>
			<img src={data.footer.logo.url} alt="Logo" className="logo" />
			<div className="social-media-icons">
				{data.footer.socialMediaIcons.map(
					(socialMediaLink: SocialMediaLink) => (
						<motion.a href={socialMediaLink.link} whileHover={{ scale: 1.1 }}>
							<img
								src={socialMediaLink.icon.url}
								alt="Icon"
								className="social-media-icon"
							/>
						</motion.a>
					)
				)}
			</div>
			<img
				src={data.footer.signature.url}
				alt="Oliver Nygren"
				className="signature"
			/>
		</footer>
	);
};

export default Footer;
