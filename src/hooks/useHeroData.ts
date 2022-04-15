import { useStaticQuery, graphql } from 'gatsby';

export const useHeroData = () => {
	const { allContentfulHero, contentfulHero } = useStaticQuery(graphql`
		{
			allContentfulHero {
				edges {
					node {
						illustration {
							gatsbyImageData(width: 600)
							title
						}
					}
				}
			}
			contentfulHero {
				gradientColor1
				gradientColor2
				subtitle
				title
				body {
					body
				}
				buttons {
					href
					text
					variant
					icon {
						gatsbyImageData(width: 8)
					}
				}
			}
		}
	`);
	return { allContentfulHero, contentfulHero };
};
