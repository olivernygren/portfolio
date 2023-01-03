import React from 'react';

import './styles.css';

interface IPicker {
	index: number;
	currentTestimonial: number;
	setCurrentTestimonial: React.Dispatch<React.SetStateAction<number>>;
}

export const Picker = ({
	index,
	currentTestimonial,
	setCurrentTestimonial,
}: IPicker) => {
	const handleChangeTestimonial = () => {
		setCurrentTestimonial(index);
	};

	return (
		<div
			className={index === currentTestimonial ? 'active-picker' : 'picker'}
			onClick={handleChangeTestimonial}
		/>
	);
};

export default Picker;
