import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		marginBottom: 60,
		maxWidth: 'fit-content',
	},
	text: {
		boxShadow: `inset 0px -16px 0px 0px rgba(18, 89, 239, 0.4)`,
		marginBottom: 30,
		whiteSpace: 'nowrap',
	},
}));
