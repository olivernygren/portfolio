import { Theme } from '@mui/material';
import { merge } from 'lodash';
import Button from './Button';

export default function ComponentOverrides(theme: Theme) {
	return merge(Button(theme));
}
