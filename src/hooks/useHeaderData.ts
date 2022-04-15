import { useStaticQuery, graphql } from 'gatsby';

export const useHeaderData = () => {
	const { allContentfulHeader, contentfulHeader } = useStaticQuery(graphql`
		{
			allContentfulHeader {
				edges {
					node {
						logo {
							gatsbyImageData(width: 155)
							title
						}
					}
				}
			}
			contentfulHeader {
				nav {
					navLinks {
						href
						isButton
						order
						text
					}
				}
			}
		}
	`);
	return { allContentfulHeader, contentfulHeader };
};
