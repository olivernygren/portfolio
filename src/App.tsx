import React from 'react';

import { About, Clients, Footer, Hero, Skills } from './sections';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Clients />
			<About />
			<Skills />
			<Footer />
		</>
	);
};

export default HomePage;
