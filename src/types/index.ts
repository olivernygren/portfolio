import { GatsbyImageProps } from 'gatsby-plugin-image';

export type NavLink = {
	href: string;
	isButton: boolean;
	order: number;
	text: string;
};

export type ButtonType = {
	text: string;
	variant: string;
	href?: string;
	icon?: GatsbyImageProps;
};
