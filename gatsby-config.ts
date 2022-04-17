import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	siteMetadata: {
		title: `portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
		copyright: 'Copyright Oliver Nygren 2022',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				// accessToken: 'u9lK66x__agyRIZiyKCj-beWscqCjHB8pvJ70javyk4',
				// spaceId: 'zo02t0n9otd2',
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-material-ui',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
		},
		'gatsby-transformer-inline-svg',
	],
};

export default config;
