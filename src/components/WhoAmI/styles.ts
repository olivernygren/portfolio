import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
		marginBottom: 100,
	},
	container: {
		padding: '100px 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		position: 'relative',
	},
	imageContainer: {
		overflow: 'hidden',
		borderRadius: 16,
		position: 'absolute',
		right: 0,
		top: -50,
	},
}));
