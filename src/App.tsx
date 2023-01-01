import React from 'react';
import './App.css';

const HomePage = () => {
	return (
		<div className="root">
			<div className="hero">
				<img src="/images/logo-dark.svg" alt="Logo" className="header-logo" />
				<div className="content">
					<h1>Crafting websites to perfection</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
						maiores at id cupiditate rem suscipit magnam ipsum ea rerum
						accusamus sit optio cumque quia.
					</p>
					{/* <button className="cta-button"></button> */}
				</div>
				<img
					src="/images/hero-hex.png"
					alt="illustration"
					className="hero-illustration"
				/>
			</div>
		</div>
	);
};

export default HomePage;
