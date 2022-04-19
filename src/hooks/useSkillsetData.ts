import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsetData = () => {
	const { contentfulSkillset } = useStaticQuery(graphql`
		{
			contentfulSkillset {
				heading
				areas {
					title
					logos {
						file {
							contentType
							fileName
							url
						}
						svg {
							content
						}
						width
						title
					}
				}
			}
		}
	`);
	return { contentfulSkillset };
};
