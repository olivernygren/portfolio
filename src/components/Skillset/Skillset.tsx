import React, { useState } from 'react';
import {
	Box,
	Typography,
	Divider,
	useMediaQuery,
	Popover,
} from '@mui/material';

import { SectionHeading } from '../SectionHeading';
import { ContentWrapper } from '../Wrapper';
import { useStyles } from './styles';
import { useSkillsetData } from '../../hooks';
import { SvgImage } from '../SvgImage';
import { SvgType } from '../../types';
import theme from '../../theme';

export const Skillset = () => {
	const mobile = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles();
	const { contentfulSkillset } = useSkillsetData();

	const [data] = useState({
		heading: contentfulSkillset.heading,
		areas: contentfulSkillset.areas,
	});
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
	const [displayLogoText, setDisplayLogoText] = useState<string | null>(null);

	const handlePopoverOpen = (
		event: React.MouseEvent<HTMLElement>,
		logos: any[],
		index: number,
		logo: SvgType
	) => {
		setAnchorElement(event.currentTarget);
		// skapa ett state för texten som ska visas och kör setState logoMatch.title
		const logoMatch: SvgType = logos[index];
		setDisplayLogoText(logoMatch.title);
		// console.log(index, logoMatch.title);
	};

	const handlePopoverClose = () => {
		setAnchorElement(null);
		setDisplayLogoText(null);
	};

	const open = Boolean(anchorElement);

	return (
		<Box>
			<ContentWrapper>
				<Box className={classes.container}>
					<SectionHeading text={data.heading} />
					{data.areas.map(({ logos, title }: any, index: number) => (
						<>
							<Box className={classes.contentContainer}>
								<Typography variant="h6">{title}</Typography>
								<Box
									className={classes.logoContainer}
									sx={{ gridTemplateColumns: `repeat(${logos.length}, 100px)` }}
								>
									{logos.map((logo: SvgType, index: number) => (
										<Box
											aria-owns={open ? 'mouse-over-popover' : undefined}
											aria-haspopup="true"
											onMouseEnter={(event) =>
												handlePopoverOpen(event, logos, index, logo)
											}
											onMouseLeave={handlePopoverClose}
										>
											<SvgImage
												svg={logo.svg}
												file={logo.file}
												alt={logo.title}
												width={logo.width}
											/>
											{/* {!mobile && (
												<Popover
													id="mouse-over-popover"
													sx={{
														pointerEvents: 'none',
														padding: 10,
													}}
													open={open}
													anchorEl={anchorElement}
													anchorOrigin={{
														vertical: 'center',
														horizontal: 'right',
													}}
													transformOrigin={{
														vertical: 'top',
														horizontal: 'left',
													}}
													onClose={handlePopoverClose}
													disableRestoreFocus
												>
													<Typography>{displayLogoText}</Typography>
												</Popover>
											)} */}
										</Box>
									))}
								</Box>
							</Box>
							{index !== data.areas.length - 1 && (
								<Divider light variant="fullWidth" />
							)}
						</>
					))}
				</Box>
			</ContentWrapper>
		</Box>
	);
};

export default Skillset;
