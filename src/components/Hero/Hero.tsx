import { Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useHeroData } from '../../hooks';
import { ButtonType } from '../../types';
import ContentWrapper from '../Wrapper/ContentWrapper';
import { useStyles } from './styles';

export const Hero = () => {
	const classes = useStyles();
	const { allContentfulHero, contentfulHero } = useHeroData();

	const [data] = useState({
		illustration: {
			image: getImage(allContentfulHero.edges[0].node.illustration)!,
			alt: allContentfulHero.edges[0].node.illustration.title,
		},
		colors: [contentfulHero.gradientColor1, contentfulHero.gradientColor2],
		text: {
			subheading: contentfulHero.subtitle,
			heading: contentfulHero.title,
			body: contentfulHero.body.body,
		},
		buttons: contentfulHero.buttons,
	});

	return (
		<Grid
			item
			container
			sx={{
				backgroundImage: `linear-gradient(100deg, ${data.colors[0]} 0%, ${data.colors[1]} 100%);`,
			}}
			className={classes.root}
		>
			<ContentWrapper>
				<Grid
					item
					container
					className={classes.container}
					component={motion.div}
					animate={{ y: [-100, 0] }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					<Grid
						item
						container
						direction="column"
						className={classes.contentContainer}
					>
						<Typography variant="h6" className={classes.subheader}>
							{data.text.subheading}
						</Typography>
						<Typography variant="h1">{data.text.heading}</Typography>
						<Typography variant="body1" className={classes.textBody}>
							{data.text.body}
						</Typography>
						<Grid item container className={classes.buttonContainer}>
							{data.buttons.map((button: ButtonType) => (
								<Button
									variant={
										button.variant === 'text'
											? 'text'
											: button.variant === 'primary'
											? 'contained'
											: 'outlined'
									}
									component={motion.button}
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
								>
									{button.text}
								</Button>
							))}
						</Grid>
					</Grid>
					<GatsbyImage
						image={data.illustration.image}
						alt={data.illustration.alt}
					/>
				</Grid>
			</ContentWrapper>
		</Grid>
	);
};

export default Hero;
