import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import componentsOverride from './overrides';

const FONT_PRIMARY = 'Inter';
const FONT_SECONDARY = 'Paytone One';

declare module '@mui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}
declare module '@mui/styles' {
	interface DefaultTheme extends Theme {}
}

// interface TemperatruePaletteOptions {
// 	minus25orLess: string;
// 	minus20to24: string;
// 	minus15to19: string;
// 	minus10to14: string;
// 	minus5to9: string;
// 	minus5to0: string;
// 	plus0to4: string;
// 	plus5to9: string;
// 	plus10to14: string;
// 	plus15to19: string;
// 	plus20to24: string;
// 	plus25to29: string;
// 	plus30to34: string;
// 	plus35orMore: string;
// }
// interface DiagramPaletteOptions {
// 	minus25orLess: string;
// 	minus20to24: string;
// 	minus15to19: string;
// 	minus10to14: string;
// 	minus5to9: string;
// 	minus5to0: string;
// 	plus0to4: string;
// 	plus5to9: string;
// 	plus10to14: string;
// 	plus15to19: string;
// 	plus20to24: string;
// 	plus25to29: string;
// 	plus30to34: string;
// 	plus35orMore: string;
// }
// declare module '@material-ui/core/styles/createPalette' {
// 	interface Palette {
// 		temp: TemperatruePaletteOptions;
// 		diagram: DiagramPaletteOptions;
// 	}
// 	interface PaletteOptions {
// 		temp?: TemperatruePaletteOptions;
// 		diagram?: DiagramPaletteOptions;
// 	}
// }

export const theme = createTheme({
	typography: {
		fontFamily: [FONT_PRIMARY, 'sans-serif'].join(','),
		fontWeightRegular: 400,
		h1: {
			fontWeight: 600,
			fontSize: 56,
			color: '#303030',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h2: {
			fontWeight: 600,
			fontSize: 40,
			color: '#303030',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h3: {
			fontWeight: 500,
			fontSize: 24,
			color: '#303030',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h4: {
			fontWeight: 500,
			fontSize: 30,
			color: '#303030',
			zIndex: 1,
		},
		h5: {
			fontWeight: 600,
			fontSize: 22,
			color: '#303030',
			zIndex: 1,
		},
		h6: {
			fontWeight: 600,
			fontSize: 18,
			// color: '#303030',
			zIndex: 1,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 15,
			color: '#303030',
			zIndex: 1,
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: 13,
			color: '#303030',
			zIndex: 1,
		},
		body1: {
			fontWeight: 400,
			fontSize: 15,
			color: '#303030',
			zIndex: 1,
		},
		body2: {
			fontWeight: 400,
			fontSize: 13,
			color: '#303030',
			zIndex: 1,
		},
		button: {
			fontFamily: FONT_PRIMARY,
			textTransform: 'none',
			fontWeight: 600,
			letterSpacing: 0.5,
		},
	},
	palette: {
		primary: {
			light: '#DAEBFF',
			main: '#1259EF',
			dark: '#00165C',
		},
		secondary: {
			light: '#404040',
			main: '#303030',
			dark: '#222222',
		},
		common: {
			white: '#ffffff',
			black: '#303030',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				outlined: {
					borderRadius: 6,
					borderWidth: 1.5,
					borderColor: '#1259EF',
					padding: '6px 20px',
					width: 'fit-content',
					'&:hover': {
						borderWidth: 1.5,
						borderColor: '#1259EF',
						backgroundColor: 'transparent',
					},
					'& > span > div:nth-of-type(1)': {
						fontSize: '14px',
					},
				},
				text: {
					borderRadius: 6,
					padding: '6px 20px',
					width: 'fit-content',
				},
				contained: {
					borderRadius: 6,
					padding: '6px 20px',
					width: 'fit-content',
					'&:hover': {
						backgroundColor: '#1259EF',
					},
				},
			},
			defaultProps: {
				disableElevation: true,
				disableRipple: true,
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					boxShadow: `0px 0px 4px 0px #f0f0f0`,
					padding: '6px 12px',
					position: 'absolute',
				},
			},
		},
	},
});

export default theme;
