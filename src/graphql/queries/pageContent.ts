import { gql } from 'urql';

export const HeroQuery = gql`
	query {
		hero(where: { id: "clceolvo38tdd0cw6tk9fjfid" }) {
			heading
			logo {
				id
				url
			}
			textBody
			id
			heroIllustration {
				id
				url
			}
		}
	}
`;

export const ClientsQuery = gql`
	query {
		clientsSection(where: { id: "clceu7jtm8zob0ausl50u08jg" }) {
			heading
			quote {
				url
			}
			star {
				url
			}
			testimonials
			textBody
			clientCards {
				url
			}
		}
	}
`;

export const AboutQuery = gql`
	query {
		about(where: { id: "clcg4q8zx9z990bw687qjmhcj" }) {
			heading
			image {
				url
			}
			textBody
		}
	}
`;

export const SkillsQuery = gql`
	query {
		skills(where: { id: "clcg4tqw3a1vk0auu8ubo5won" }) {
			heading
			image {
				url
			}
			textBody
		}
	}
`;

export const FooterQuery = gql`
	query {
		footer(where: { id: "clcg5pb5ja0xk0aussu2r8f9x" }) {
			logo {
				url
			}
			signature {
				url
			}
			socialMediaIcons {
				... on SocialMediaIcon {
					link
					icon {
						url
					}
				}
			}
		}
	}
`;
