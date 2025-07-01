import React from 'react';
import '../styles/pages.css'

const skills = [
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'React', level: 'Avanzado' },
    { name: 'Node.js', level: 'Intermedio' },
    { name: 'HTML & CSS', level: 'Avanzado' },
    { name: 'Git', level: 'Intermedio' },
    { name: 'TypeScript', level: 'Básico' },
];

const Skills = () => (
    <div className="page">
        <h1>Mis Habilidades</h1>
        <ul className="skills-list">
            {skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                    <strong>{skill.name}</strong>
                    <span className="skill-level">{skill.level}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Skills;