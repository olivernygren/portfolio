import * as React from 'react';
import { ThemeProvider } from '@mui/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import '@fontsource/paytone-one';
import '@fontsource/inter';

import './global.css';
import theme from '../theme';
import { Home } from './home';

export const IndexPage = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</MuiThemeProvider>
	);
};

export default IndexPage;
