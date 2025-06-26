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
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
        <h1>Mis Habilidades</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {skills.map((skill) => (
                <li key={skill.name} style={{ marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                    <strong>{skill.name}</strong>
                    <span style={{ float: 'right', color: '#555' }}>{skill.level}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Skills;