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
						svg {
							content
						}
						file {
							contentType
							fileName
							url
						}
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
