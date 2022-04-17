import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: 'white',
		width: '100%',
		height: 350,
		padding: '40px 80px',
		borderRadius: 20,
		marginTop: '-175px',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		alignContent: 'center',
		columnGap: 100,
		boxShadow: `0px 0px 16px 3px ${theme.palette.grey[300]}`,
	},
	section: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'column',
		'& > div > svg': {
			margin: '0 0 30px 0',
		},
	},
	sectionHeading: {
		paddingBottom: 10,
	},
	sectionBody: {
		maxWidth: '30ch',
	},
}));
