import React from 'react';
import { gql, useQuery } from 'urql';

import './App.css';

const HeroQuery = gql`
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

const HomePage = () => {
	const [result] = useQuery({ query: HeroQuery });
	const { data, fetching, error } = result;

	if (fetching) return <p>Loading...</p>;
	if (error)
		return (
			<p>
				Error {error.message}
				{error.stack}
			</p>
		);

	return (
		<div className="root">
			<div className="hero">
				<img src={data.hero.logo.url} alt="Logo" className="header-logo" />
				<div className="content">
					<h1>{data.hero.heading}</h1>
					{/* <h1>Crafting websites to perfection</h1> */}
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
						maiores at id cupiditate rem suscipit magnam ipsum ea rerum
						accusamus sit optio cumque quia.
					</p>
					{/* <button className="cta-button"></button> */}
				</div>
				<img
					src={data.hero.heroIllustration.url}
					alt="illustration"
					className="hero-illustration"
				/>
			</div>
		</div>
	);
};

export default HomePage;
