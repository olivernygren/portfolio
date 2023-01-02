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
