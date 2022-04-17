import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsCTAData = () => {
	const { contentfulProjectsCtaSection } = useStaticQuery(graphql`
		{
			contentfulProjectsCtaSection {
				body {
					body
				}
				button {
					href
					icon {
						gatsbyImageData(width: 8)
						title
					}
					variant
					text
				}
				heading
			}
		}
	`);
	return { contentfulProjectsCtaSection };
};
