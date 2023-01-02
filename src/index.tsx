import React from 'react';
import ReactDOM from 'react-dom/client';
import { createClient, Provider } from 'urql';

import './index.css';
import HomePage from './App';

const client = createClient({
	url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clceo6dam4v6601ule3a5dhud/master',
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider value={client}>
			<HomePage />
		</Provider>
	</React.StrictMode>
);
