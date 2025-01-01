import React from 'react';

interface WorkExperience {
  title: string;
  type: string;
  jobTasks: string[];
  technologies: string[];
  time?: string;
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
      time: '9 years, 2017-2018'
    },
    {
      title: 'MOOC online courses',
      type: 'work',
      jobTasks: [
        'Designed and implemented responsive UI using HTML, CSS, and JavaScript.',
        'Improved website performance and optimized load times.',
        'Integrated third-party APIs to enhance website functionality.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
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
          <p>
            <strong>Job Tasks:</strong>
          </p>
          <ul>
            {experience.jobTasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
          <p>
            <strong>Technologies:</strong> {experience.technologies.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Exp;
