import { Box, Button, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { ButtonType } from '../../../types';
import { SvgImage } from '../../SvgImage';
import { useStyles } from './styles';

interface IProjectPreview {
	image: any;
	imageAlt: string;
	heading: string;
	body: string;
	colors: {
		background: string;
		text: string;
		button?: string;
	};
	button?: ButtonType;
}

export const ProjectPreview = ({
	image,
	imageAlt,
	heading,
	body,
	button,
	colors,
}: IProjectPreview) => {
	const classes = useStyles();
	return (
		<Box
			sx={{ backgroundColor: colors.background }}
			className={classes.container}
		>
			<Box className={classes.textContainer}>
				<Typography
					variant="h5"
					sx={{ color: colors.text }}
					className={classes.heading}
				>
					{heading}
				</Typography>
				<Typography sx={{ color: colors.text }}>{body}</Typography>
				{button && (
					<Link to={button.href!} className={classes.button}>
						{/* <Button
							variant={
								button.variant === 'text'
									? 'text'
									: button.variant === 'primary'
									? 'contained'
									: 'outlined'
							}
							endIcon={
								<SvgImage
									svg={button.icon.svg}
									file={button.icon.file}
									alt="icon"
									width={12}
								/>
							}
							sx={{ color: colors.text }}
						>
							{button.text}
						</Button> */}
						<Typography sx={{ color: colors.button }}>{button.text}</Typography>
						<SvgImage
							svg={button.icon.svg}
							file={button.icon.file}
							alt="icon"
							width={12}
						/>
					</Link>
				)}
			</Box>
			<Box className={classes.imageContainer}>
				{/* <GatsbyImage image={gatsbyImage!} alt={imageAlt} /> */}
				<SvgImage
					svg={image.svg}
					file={image.file}
					alt={imageAlt}
					width={image.width}
				/>
			</Box>
		</Box>
	);
};

export default ProjectPreview;
