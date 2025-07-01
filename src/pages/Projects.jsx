import React from 'react';
import '../styles/pages.css'

const projects = [
    {
        title: 'Nombre del Proyecto',
        description: 'Breve descripción del proyecto.',
        link: 'https://enlace-al-proyecto.com',
        image: '/ruta/a/imagen.png',
    },
];

const Projects = () => {
    return (
        <div className="page">
            <h1>Proyects</h1>

            <div className="projects-list">
                {projects.length === 0 ? (
                    <p>No hay proyectos aún. ¡Pronto agregaré más!</p>
                ) : (
                    projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                            {project.image && (
                                <img src={project.image} alt={project.title} className="project-image" />
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
