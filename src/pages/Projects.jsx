import React from 'react';
import '../styles/pages.css'

const projects = [
    // Ejemplo de proyecto. Agrega más objetos para tus futuros proyectos.
    {
   title: 'Nombre del Proyecto',
       description: 'Breve descripción del proyecto.',
       link: 'https://enlace-al-proyecto.com',
       image: '/ruta/a/imagen.png',
 },
];

const Projects = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Mis Proyectos</h1>
            <p>Aquí encontrarás una colección de mis proyectos personales y profesionales.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                {projects.length === 0 ? (
                    <p>No hay proyectos aún. ¡Pronto agregaré más!</p>
                ) : (
                    projects.map((project, idx) => (
                        <div key={idx} style={{
                            border: '1px solid #eee',
                            borderRadius: '8px',
                            padding: '1rem',
                            width: '300px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}>
                            {project.image && (
                                <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} />
                            )}
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Ver Proyecto
                                </a>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Projects;