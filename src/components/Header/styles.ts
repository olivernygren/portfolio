import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 80,
		position: 'fixed',
		top: 0,
		right: 0,
		left: '50%',
		maxWidth: 1400,
		transform: 'translateX(-50%)',
		padding: '0 20px',
	},
	nav: {
		width: 'fit-content',
		columnGap: 20,
	},
	navLink: {
		'&:last-of-type': {
			marginRight: 20,
		},
	},
	navButton: {
		marginLeft: 10,
		borderWidth: 2,
	},
	logo: {
		width: 'fit-content',
	},
}));
