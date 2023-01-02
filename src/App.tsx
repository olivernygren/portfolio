import React from 'react';

import { Hero } from './sections';
import { Clients } from './sections/clients';

// TA IN DATA SOM PROPS TILL VARJE SECTION

const HomePage = () => {
	return (
		<>
			<Hero />
			<Clients />
		</>
	);
};

export default HomePage;
