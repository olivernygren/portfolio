import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'urql';

import { SkillsQuery } from '../../graphql';
import { SkillCategory } from '../../types';
import './styles.css';

export const Skills = () => {
	const [result] = useQuery({ query: SkillsQuery });
	const { data, fetching, error } = result;

	if (fetching) return <></>;
	if (error)
		return (
			<p>
				Error {error.message}
				{error.stack}
			</p>
		);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const chip = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<motion.div
			className="skills"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<img src={data.skills.image.url} alt="Skills" className="skills-image" />
			<div className="text">
				<h2>{data.skills.heading}</h2>
				{data.skills.skillCategories.map((skillCategory: SkillCategory) => (
					<div className="skill-category" key={skillCategory.title}>
						<h5>{skillCategory.title}</h5>
						<motion.div
							className="chip-container"
							variants={container}
							initial="hidden"
							animate="show"
						>
							{skillCategory.skills.map((skill: string) => (
								<motion.div className="chip" variants={chip} key={skill}>
									<p>{skill}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
