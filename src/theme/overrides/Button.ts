import { Theme } from '@mui/material/styles';

export default function Button(theme: Theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						boxShadow: 'none',
					},
				},
				sizeLarge: {
					height: 48,
				},
				containedInherit: {
					color: theme.palette.grey[800],
					boxShadow: 'none',
					'&:hover': {
						backgroundColor: theme.palette.grey[400],
					},
				},
				containedPrimary: {
					boxShadow: 'none',
				},
				outlinedInherit: {
					border: `2px solid ${theme.palette.primary.main}`,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
				},
				textInherit: {
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
				},
			},
		},
	};
}
