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
	icon?: any;
};

export type SvgType = {
	svg: {
		content: any;
	};
	file: {
		contentType: string;
		url: string;
		fileName: string;
	};
	title: string;
	width?: number;
};

export type IntroSectionType = {
	node: {
		heading: string;
		body: {
			body: string;
		};
		icon: SvgType;
	};
};

export type ProjectPreviewType = {
	node: {
		heading: string;
		body: {
			body: string;
		};
		button: ButtonType | any;
		image: SvgType;
		backgroundColor: string;
		order: number;
		textColor: string;
		buttonColor: string;
	};
};

export type SkillsetSectionType = {
	heading: string;
	areas: {
		title: string;
		logos: SvgType[];
	};
};
