import { useStaticQuery, graphql } from 'gatsby';

export const useWhoAmIData = () => {
	const { contentfulWhoAmI } = useStaticQuery(graphql`
		{
			contentfulWhoAmI {
				body {
					body
				}
				heading
				image {
					gatsbyImageData(width: 370)
					title
				}
				listItems {
					icon {
						file {
							contentType
							fileName
							url
						}
						svg {
							content
						}
						title
						width
					}
					order
					text
					variant
				}
			}
		}
	`);
	return { contentfulWhoAmI };
};
