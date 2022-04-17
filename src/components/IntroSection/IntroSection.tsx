import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

import { useIntroData } from '../../hooks';
import { SvgImage } from '../SvgImage';
import { ContentWrapper } from '../Wrapper';
import { useStyles } from './styles';
import { IntroSectionType } from '../../types';

export const IntroSection = () => {
	const { allContentfulIntroSection } = useIntroData();
	const classes = useStyles();
	const sections = allContentfulIntroSection.edges;
	console.log(sections);
	return (
		<ContentWrapper>
			<Box className={classes.container}>
				{sections.reverse().map(({ node }: IntroSectionType) => (
					<Box className={classes.section}>
						<SvgImage
							svg={node.icon.svg}
							file={node.icon.file}
							alt={node.icon.title}
							width={50}
						/>
						<Typography variant="h6" className={classes.sectionHeading}>
							{node.heading}
						</Typography>
						<Typography variant="body1" className={classes.sectionBody}>
							{node.body.body}
						</Typography>
					</Box>
				))}
			</Box>
		</ContentWrapper>
	);
};

export default IntroSection;
