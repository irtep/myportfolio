import React from 'react';

interface WorkExperience {
    title: string;
    type: string;
    jobTasks: string[];
    technologies: string[];
    time: string;
}

const Exp: React.FC = (): React.ReactElement => {
    const workExperiences: WorkExperience[] = [
        {
            title: 'Tech Support Specialist at Schibsted Suomi Oy',
            type: 'work',
            jobTasks: [
                'Backend developer for material importer of integrations (development, testing, deploying, debugging, fixing)',
                'Support for integration product',
                'Support for data sales product',
                'Support for Real Estate API',
                'Backup for customer care',
            ],
            technologies: ['XSLT', 'Git', 'AWS', 'JIRA'],
            time: '3 years, 7 months. 2021-2024'
        },
        {
            title: 'Execution Coordinator in Marketing Team at Betsson',
            type: 'work',
            jobTasks: [
                'Coordinating and executing marketing campaigns.'
            ],
            technologies: ['HTML', 'CSS', 'Javascript', 'Wordpress'],
            time: '9 months, 2017-2018'
        },
        {
            title: 'MOOC (University of Helsinki) open courses',
            type: 'courses',
            jobTasks: [
                'Full Stack Open 2020. (React, Node, Redux)',
                'Securing Software 2020. (Python)',
                'AI basics'
            ],
            technologies: ['React', 'Node,js', 'Python', 'Redux', 'REST APIs'],
            time: '2020'
        },
        {
            title: 'XAMK University of applied sciences courses',
            type: 'courses',
            jobTasks: [
                'Basic Programming (5/5 grade)',
                'Advanced programming (5/5 grade)',
                'Software programming 1-3 (5/5 grade)',
                'Markup Languages (5/5 grade)',
                'User interfaces (5/5 grades)',
                'and other more or less relevant courses'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Redux', 'Context API', 'React', 'Node', 'and many more'],
            time: 'About two yeards 2021-2023'
        },
    ];

    return (
        <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', color: 'white' }}>
            <h2 style={{ textAlign: 'center', color: '#18a455' }}>Relevant Work and School Experience</h2>
            <p style={{ padding: 20, fontFamily: 'Arial, sans-serif', color: 'white' }}>
                Relevant work experience and courses for developer.
            </p>
            {workExperiences.map((experience, index) => (
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
                    <h3 style={{ color: '#18a455' }}>{experience.title}</h3>
                    {
                        (experience.type === 'work')
                            ? <>
                                <p>
                                    <strong>Job Tasks:</strong>
                                </p>
                            </>
                            : <>
                                <p>
                                    <strong>School courses:</strong>
                                </p>
                            </>
                    }
                    <ul>
                        {experience.jobTasks.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))}
                    </ul>
                    <p>
                        <strong>Technologies:</strong> {experience.technologies.join(', ')}
                    </p>
                    <p>
                        <strong>Time:</strong> {experience.time}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Exp;
