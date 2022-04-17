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

export type IntroSectionType = {
	node: {
		heading: string;
		body: {
			body: string;
		};
		icon: {
			svg: {
				content: any;
			};
			file: {
				contentType: string;
				url: string;
				fileName: string;
			};
			title: string;
		};
	};
};

export type ProjectPreviewType = {
	node: {
		heading: string;
		body: {
			body: string;
		};
		button: ButtonType | any;
		image: {
			title: string;
			width: number;
			svg: {
				content: any;
			};
			file: {
				contentType: string;
				fileName: string;
				url: string;
			};
		};
		backgroundColor: string;
		order: number;
		textColor: string;
		buttonColor: string;
	};
};
