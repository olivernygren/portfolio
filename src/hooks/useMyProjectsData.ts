import { useStaticQuery, graphql } from 'gatsby';

export const useMyProjectsData = () => {
	const { allContentfulProjectPreview, contentfulMyProjects } =
		useStaticQuery(graphql`
			{
				contentfulMyProjects {
					heading
				}
				allContentfulProjectPreview(filter: { node_locale: { eq: "sv" } }) {
					edges {
						node {
							heading
							body {
								body
							}
							button {
								href
								text
								variant
								icon {
									svg {
										content
									}
									file {
										contentType
										fileName
										url
									}
								}
							}
							image {
								title
								width
								svg {
									content
								}
								file {
									contentType
									fileName
									url
								}
							}
							order
							backgroundColor
							textColor
							buttonColor
						}
					}
				}
			}
		`);
	return { allContentfulProjectPreview, contentfulMyProjects };
};
