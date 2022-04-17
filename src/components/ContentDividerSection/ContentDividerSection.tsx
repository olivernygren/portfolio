import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useProjectsCTAData } from '../../hooks';
import { ButtonType } from '../../types';
import { ContentWrapper } from '../Wrapper';
import { useStyles } from './styles';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

export const ContentDividerSection = () => {
	const { contentfulProjectsCtaSection } = useProjectsCTAData();
	const classes = useStyles();

	const [data] = useState({
		heading: contentfulProjectsCtaSection.heading,
		body: contentfulProjectsCtaSection.body.body,
		button: {
			href: contentfulProjectsCtaSection.button.href,
			icon: {
				image: getImage(
					contentfulProjectsCtaSection.button.icon.gatsbyImageData
				),
				alt: contentfulProjectsCtaSection.button.icon.title,
			},
			text: contentfulProjectsCtaSection.button.text,
			variant: contentfulProjectsCtaSection.button.variant,
		},
	});

	console.log(contentfulProjectsCtaSection.button.icon);

	return (
		<Box className={classes.root}>
			<ContentWrapper>
				<Box className={classes.container}>
					<Box>
						<Typography variant="h3" className={classes.heading}>
							{data.heading}
						</Typography>
						<Typography variant="body1">{data.body}</Typography>
					</Box>
					<Link to={data.button.href}>
						<Button
							component={motion.button}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							variant={
								data.button.variant === 'text'
									? 'text'
									: data.button.variant === 'primary'
									? 'contained'
									: 'outlined'
							}
							endIcon={
								<GatsbyImage
									image={data.button.icon.image!}
									alt={data.button.icon.alt}
								/>
							}
						>
							{data.button.text}
						</Button>
					</Link>
				</Box>
			</ContentWrapper>
		</Box>
	);
};

export default ContentDividerSection;
