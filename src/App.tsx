import React from 'react';

import { About, Clients, Footer, Hero, LastCTA, Skills } from './sections';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Clients />
			<About />
			<Skills />
			<LastCTA />
			<Footer />
		</>
	);
};

export default HomePage;
