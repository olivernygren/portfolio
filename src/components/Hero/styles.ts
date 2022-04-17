import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 160,
		paddingBottom: 320,
	},
	container: {
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentContainer: {
		maxWidth: 600,
	},
	subheader: {
		color: theme.palette.grey[400],
		textTransform: 'uppercase',
		letterSpacing: 2,
	},
	textBody: {
		paddingTop: 40,
		maxWidth: '50ch',
	},
	buttonContainer: {
		paddingTop: 40,
		columnGap: 16,
	},
}));
