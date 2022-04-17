import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './styles';

interface IContentWrapper {
	children: ReactNode;
	direction?: 'row' | 'column';
}

export const ContentWrapper = ({ children, direction }: IContentWrapper) => {
	const classes = useStyles();
	return (
		<Grid container direction={direction} className={classes.wrapper}>
			{children}
		</Grid>
	);
};

export default ContentWrapper;
