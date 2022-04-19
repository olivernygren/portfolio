import * as React from 'react';
import { Grid } from '@mui/material';

import {
	ContentDividerSection,
	Header,
	Hero,
	IntroSection,
	MyProjects,
	Skillset,
} from '../../components';
import { useStyles } from './styles';

export const Home = () => {
	const classes = useStyles();
	return (
		<Grid container direction="column" className={classes.root}>
			<Header />
			<Hero />
			<IntroSection />
			<MyProjects />
			<ContentDividerSection />
			<Skillset />
		</Grid>
	);
};

export default Home;
