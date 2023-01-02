import React from 'react';
import { useQuery } from 'urql';

import { ClientsQuery } from '../../graphql';

export const Clients = () => {
	const [result] = useQuery({ query: ClientsQuery });
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
		<div className="clients">
			<img
				src={data.clientsSection.clientCards.url}
				alt="clients"
				className="client-cards"
			/>
			<div className="content">
				<div className="text">
					<h2>{data.clientsSection.heading}</h2>
					<p>{data.clientsSection.textBody}</p>
				</div>
				<div className="testimonials">
					<div className="picker">
						{data.clientsSection.testimonials.map(
							(testimonial: string, index: number) => (
								// SKAPA KOMPONENT
								<div
									className="picker-button"
									onClick={() => console.log(index + 1)}
								/>
							)
						)}
						{/* {data.clientsSection.testimonials.map(
							(testimonial: string, index: number) => (
								// SKAPA KOMPONENT */}
						<div className="testimonial">
							<div className="header">
								<img
									src={data.clientsSection.quote.url}
									alt="quote"
									className="quote"
								/>
								<div className="rating">
									<p>5</p>
									<img
										src={data.clientsSection.star.url}
										alt="Star"
										className="quote"
									/>
								</div>
							</div>
							<div className="p">{data.clientsSection.testimonials[0]}</div>
						</div>
						{/* )
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
