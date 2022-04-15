import * as React from 'react';
import { motion } from 'framer-motion';
import { Button, createTheme, Grid, Typography } from '@mui/material';

import { Header, Hero } from '../../components';
import { useStyles } from './styles';

export const Home = () => {
	const classes = useStyles();
	return (
		<Grid container direction="column" className={classes.root}>
			<Header />
			<Hero />
			{/* <Grid
				component={motion.div}
				drag={true}
				dragConstraints={{ left: -100, right: 100, top: 0, bottom: 300 }}
				whileHover={{ scale: 1 }}
				whileTap={{ scale: 0.9 }}
				style={{ backgroundColor: 'lime', width: 200, height: 200 }}
			></Grid>
			<motion.div
				drag={true}
				dragConstraints={{ left: -100, right: 100, top: 0, bottom: 300 }}
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
				style={{ width: 200, height: 200 }}
			/>
			<Button
				component={motion.button}
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
				color="primary"
			>
				CTA Button
			</Button> 
			<Typography variant="h5">Detta är en text</Typography> */}
		</Grid>
	);
};

// const useStyles = makeStyles((theme) => ({
// 	button: {
// 		backgroundColor: theme.palette.primary.main,
// 	},
// }));

export default Home;
