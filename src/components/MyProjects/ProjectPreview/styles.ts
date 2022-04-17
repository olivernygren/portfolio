import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		padding: '30px 100px',
		marginBottom: 75,
		borderRadius: 20,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: 370,
		position: 'relative',
		overflow: 'hidden',
	},
	textContainer: {
		maxWidth: '60ch',
	},
	heading: {
		paddingBottom: 20,
	},
	button: {
		whiteSpace: 'nowrap',
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			'& > p': {
				paddingRight: 14,
			},
		},
		'& > p': {
			paddingRight: 8,
			fontWeight: 600,
			transition: '250ms ease-in-out',
		},
		marginTop: 25,
	},
	imageContainer: {
		overflow: 'hidden',
		borderRadius: 10,
		position: 'absolute',
		right: 0,
		bottom: -10,
		// top: 0,
	},
}));
