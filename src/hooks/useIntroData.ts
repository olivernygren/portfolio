import { useStaticQuery, graphql } from 'gatsby';

export const useIntroData = () => {
	const { allContentfulIntroSection } = useStaticQuery(graphql`
		{
			allContentfulIntroSection(filter: { node_locale: { eq: "sv" } }) {
				edges {
					node {
						body {
							body
						}
						heading
						icon {
							svg {
								content
							}
							file {
								contentType
								url
								fileName
							}
							title
						}
					}
				}
			}
		}
	`);
	return { allContentfulIntroSection };
};
