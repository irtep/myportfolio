import React from 'react';

interface Project {
    title: string;
    overview: string;
    technologies: string[];
    status?: string;
    demoLink?: string;
    githubLink: string;
}

const Projects: React.FC = (): React.ReactElement => {
    const projects: Project[] = [

        {
            title: 'This portfolio page',
            overview: `If you are just intrested, how I handle a simple no-nonse React Typescript App. This is it.`,
            technologies: ['React', 'TypeScript'],
            status: 'In production, will get updated, when something to update.',
            demoLink: 'https://irtep.github.io/myportfolio/',
            githubLink: 'https://github.com/irtep/myportfolio',
        },
        {
            title: 'User Interface for IZ4, the password bank',
            overview: `An User Interface, that stores an username and a password. Original version I made for a school job. Later I modificated it to something, that I use myself. You can try it with username: test2, password: test2.`,
            technologies: ['React', 'TypeScript', 'Context-API', 'Material UI'],
            status: 'In production, however I will develop this every now and then.',
            demoLink: 'https://amorcitos.cyou/iz4/',
            githubLink: 'https://github.com/irtep/iz4-ui',
        },
        {
            title: 'REST API for IZ4 password bank',
            overview:
                'REST API, that also serves the User Interface of IZ4, the password bank. Also serves some other of my pages, that I use.',
            technologies: ['Node.js', 'MongoDB', 'Express', 'Prisma', 'Typescript'],
            status: 'Built RESTful APIs and implemented authentication with JWT. In production, but I will update this every now and then.',
            githubLink: 'https://github.com/irtep/iz4-rest (not public, but if you seriously might have something for me, let me know, and I might give you an access.)',
        },
        {
            title: 'Charred Axle Rig planner and tester',
            overview:
                'Bit complext Charred Axle Rig planner and tester. Lots of Typescript React logic and everything works. An example of quite big non-server App, that gets the job done, mobile or laptop.',
            technologies: ['React', 'TypeScript', 'Context-API', 'Material UI'],
            status: 'Im production, I updated, when something to update.',
            demoLink: 'https://irtep.github.io/riggarage/',
            githubLink: 'https://github.com/irtep/riggers'
        },
        {
            title: 'Charred Axle based 2D canvas game',
            overview:
                `2D battle game, where two rigs, yours and AI's go head to head.`,
            technologies: ['React', 'TypeScript', 'Javascript canvas'],
            status: 'Early test version, but Work In Process',
            demoLink: 'https://irtep.github.io/charredDemo/',
            githubLink: 'https://github.com/irtep/tankGame'
        }
    ];

    return (
        <div style={{ padding: 20, color: 'white', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', color: '#18a455' }}>Highlighted Projects</h2>
            {projects.map((project, index) => (
                <div
                    key={index}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: 8,
                        padding: 15,
                        marginBottom: 20,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h3 style={{ color: '#18a455' }}>{project.title}</h3>
                    <p>
                        <span style={{color: "yellow"}}><strong>Overview:</strong></span> {project.overview}
                    </p>
                    <p>
                    <span style={{color: "yellow"}}><strong>Technologies Used:</strong></span> {project.technologies.join(', ')}
                    </p>
                    {project.status && (
                        <p>
                            <span style={{color: "yellow"}}><strong>Status:</strong></span> {project.status}
                        </p>
                    )}
                    {project.demoLink && (
                        <p>
                            <span style={{color: "yellow"}}><strong>Live Demo:</strong></span>{' '}
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#007bff' }}
                            >
                                {project.demoLink}
                            </a>
                        </p>
                    )}
                    <p>
                    <span style={{color: "yellow"}}><strong>GitHub Repository:</strong></span>{' '}
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#007bff' }}
                        >
                            {project.githubLink}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Projects;