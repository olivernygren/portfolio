import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { ContentWrapper } from '../Wrapper';
import { useStyles } from './styles';
import { useMyProjectsData } from '../../hooks';
import { ProjectPreview } from './ProjectPreview';
import { ProjectPreviewType } from '../../types';

export const MyProjects = () => {
	const classes = useStyles();
	const { allContentfulProjectPreview, contentfulMyProjects } =
		useMyProjectsData();
	const [data] = useState({
		heading: contentfulMyProjects.heading,
		projects: allContentfulProjectPreview.edges,
	});

	return (
		<Box className={classes.root}>
			<ContentWrapper direction="column">
				<SectionHeading text={data.heading} />
				<Box className={classes.projectsContainer}>
					{data.projects
						.sort(
							(a: ProjectPreviewType, b: ProjectPreviewType) =>
								a.node.order - b.node.order
						)
						.map(({ node }: ProjectPreviewType) => (
							<ProjectPreview
								image={node.image}
								imageAlt={node.image.title}
								heading={node.heading}
								body={node.body.body}
								button={node.button !== null && node.button}
								colors={{
									background: node.backgroundColor,
									text: node.textColor,
									button: node.buttonColor,
								}}
							/>
						))}
				</Box>
			</ContentWrapper>
		</Box>
	);
};

export default MyProjects;
