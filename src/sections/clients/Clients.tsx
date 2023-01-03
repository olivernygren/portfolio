import React, { useState } from 'react';
import { useQuery } from 'urql';
import { Picker } from '../../components';

import { ClientsQuery } from '../../graphql';
import './styles.css';

export const Clients = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
					<div className="picker-container">
						{data.clientsSection.testimonials.map(
							(testimonial: string, index: number) => (
								<Picker
									index={index}
									currentTestimonial={currentTestimonial}
									setCurrentTestimonial={setCurrentTestimonial}
								/>
							)
						)}
					</div>
					<div className="testimonial">
						<div className="header">
							<img
								src={data.clientsSection.quote.url}
								alt="quote"
								className="quote"
							/>
							<div className="rating">
								<h6>5</h6>
								<img
									src={data.clientsSection.star.url}
									alt="Star"
									className="quote"
								/>
							</div>
						</div>
						<p className="text">
							{data.clientsSection.testimonials[currentTestimonial]}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
