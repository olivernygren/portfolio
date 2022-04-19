import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		marginBottom: 150,
	},
	contentContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 125,
		width: '100%',
	},
	logoContainer: {
		display: 'grid',
		placeItems: 'center',
		columnGap: 20,
	},
}));
