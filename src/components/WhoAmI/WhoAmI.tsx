import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import moment from 'moment';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useWhoAmIData } from '../../hooks';
import { SectionHeading } from '../SectionHeading';
import { ContentWrapper } from '../Wrapper';
import { useStyles } from './styles';
import { ListItemType } from '../../types';
import { SvgImage } from '../SvgImage';

export const WhoAmI = () => {
	const classes = useStyles();
	const { contentfulWhoAmI } = useWhoAmIData();
	const getAge = moment().diff(moment('20010507', 'YYYYMMDD'), 'years');

	const [data] = useState({
		heading: contentfulWhoAmI.heading,
		body: contentfulWhoAmI.body.body,
		listItems: contentfulWhoAmI.listItems,
		image: contentfulWhoAmI.image,
	});

	return (
		<Box className={classes.root}>
			<ContentWrapper>
				<Box className={classes.container}>
					<Box>
						<SectionHeading text={data.heading} />
						<List>
							{data.listItems.map((item: ListItemType) => (
								<ListItem
									sx={item.variant === 'large' ? { paddingBottom: 1.5 } : {}}
								>
									<ListItemIcon>
										<SvgImage
											svg={item.icon.svg}
											file={item.icon.file}
											alt={item.icon.title}
											width={item.icon.width! + 3}
										/>
									</ListItemIcon>
									<Typography
										variant="subtitle1"
										sx={
											item.variant === 'large'
												? { fontWeight: 600, fontSize: 17 }
												: {}
										}
									>
										{item.text === 'år' ? `${getAge} ${item.text}` : item.text}
									</Typography>
								</ListItem>
							))}
						</List>
					</Box>
					<Box className={classes.imageContainer}>
						<GatsbyImage image={getImage(data.image)!} alt={data.image.title} />
					</Box>
				</Box>
			</ContentWrapper>
		</Box>
	);
};
