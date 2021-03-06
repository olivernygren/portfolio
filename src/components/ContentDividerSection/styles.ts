import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
		marginBottom: 100,
		marginTop: 50,
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
