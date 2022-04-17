import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 200,
		width: '100%',
	},
	heading: {
		paddingBottom: 16,
	},
}));
