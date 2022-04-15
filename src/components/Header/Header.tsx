import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'gatsby';

import { useStyles } from './styles';
import { useHeaderData } from '../../hooks';
import { NavLink } from '../../types';
import ContentWrapper from '../Wrapper/ContentWrapper';
import { motion } from 'framer-motion';

// interface IHeader {
// 	data: any;
// }

export const Header = () => {
	const classes = useStyles();
	const { allContentfulHeader, contentfulHeader } = useHeaderData();

	const { navLinks } = contentfulHeader.nav;

	const [data] = useState({
		logo: {
			image: getImage(allContentfulHeader.edges[0].node.logo)!,
			alt: allContentfulHeader.edges[0].node.logo.title,
		},
		nav: {
			navLinks: contentfulHeader.nav.navLinks,
		},
	});

	const NavLinks = () => {
		return data.nav.navLinks
			.sort((a: NavLink, b: NavLink) => a.order - b.order)
			.map((link: NavLink, index: number) => (
				<Button
					component={motion.button}
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					variant={link.isButton ? 'outlined' : 'text'}
					color={link.isButton ? 'primary' : 'secondary'}
					sx={index === navLinks.length - 2 ? { marginRight: 2 } : {}}
				>
					{link.text}
				</Button>
			));
	};

	return (
		<Grid item container>
			<ContentWrapper>
				<Grid item container className={classes.container}>
					<Grid item component={motion.div} whileHover={{ scale: 1.02 }}>
						<GatsbyImage
							image={data.logo.image}
							alt={data.logo.alt}
							className={classes.logo}
						/>
					</Grid>
					<Grid item className={classes.nav}>
						<NavLinks />
					</Grid>
				</Grid>
			</ContentWrapper>
		</Grid>
	);
};

export default Header;
