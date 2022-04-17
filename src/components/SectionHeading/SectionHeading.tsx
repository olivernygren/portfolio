import { Typography, Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

interface ISectionHeading {
	text: string;
}

export const SectionHeading = ({ text }: ISectionHeading) => {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Typography variant="h3" className={classes.text}>
				{text}
			</Typography>
		</Box>
	);
};

export default SectionHeading;
