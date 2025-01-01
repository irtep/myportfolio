import React from 'react';

interface Item {
    name: string;
    level: 'Expert' | 'Intermediate' | 'Some experience' | 'Beginner';
    experience: string;
}

interface Skill {
    category: string;
    items: Item[];
};

const Tech: React.FC = (): React.ReactElement => {
    const skills: Skill[] = [
        {
            category: 'Languages', items: [
                { name: 'HTML', level: 'Expert', experience: 'since about 2015' },
                { name: 'CSS', level: 'Expert', experience: 'since about 2015' },
                { name: 'JavaScript', level: 'Expert', experience: 'since about 2015' },
                { name: 'Python', level: 'Some experience', experience: 'few courses and projects' },
                { name: 'TypeScript', level: 'Expert', experience: 'about 3 years' }
            ]
        },
        {
            category: 'Frameworks/Libraries', items: [
                { name: 'React', level: 'Expert', experience: 'since about 2016' },
                { name: 'Node.js', level: 'Intermediate', experience: 'since about 2016' }
            ]
        },
        {
            category: 'Databases', items: [
                { name: 'MySQL', level: 'Intermediate', experience: 'few projects and courses' },
                { name: 'PostgreSQL', level: 'Intermediate', experience: 'looked like about the same as MySQL' },
                { name: 'MongoDB', level: 'Intermediate', experience: 'few projects and using now, whenever I need DB.' }
            ]
        },
        {
            category: 'DevOps', items: [
                { name: 'Docker', level: 'Some experience', experience: 'I have used it a bit, but going to take some courses.' },
                { name: 'CI/CD tools', level: 'Some experience', experience: 'At work these were already ready, but Im sure I would learn quickly to setup them myself too, if needed.' },
                { name: 'GIT', level: 'Intermediate', experience: `About three years at work. Usually I don't get to trouble with this.` }
            ]
        },
        {
            category: 'Testing Tools', items: [
                { name: 'Jest', level: 'Beginner', experience: 'Took a one course.'},
                { name: 'Cypress', level: 'Beginner', experience: 'Took a one course.'}
            ]
        },
        { category: 'Servers', items: [
            { name: 'Firebase', level: 'Some experience', experience: 'This used to be my go-to place, when I hosted something.'},
            { name: 'AWS', level: 'Beginner', experience: 'I have used this at work, but to very limited operations.'},
            { name: 'PLESK', level: 'Intermediate', experience: 'I have use this daily or weekly, with my own projects.'}
        ]},
    ];

    const getColor = (level: string): string => {
        switch (level.toLowerCase()) {
            case 'beginner':
                return 'red';
            case 'some experience':
                return 'cyan';
            case 'intermediate':
                return 'yellow';
            case 'expert':
                return 'green';
            default:
                return 'gray';
        }
    };

    return (
        <div
            style={{
                padding: 10,
                textAlign: 'justify',
                margin: '0 40px',
                color: 'rgb(24, 164, 85)',
            }}
        >
            <p>Some of the most relevant tech skills I have:</p>
            {skills.map((skill: Skill, index: number) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <strong>{skill.category}:</strong>
                    <ul>
                        {skill.items.map((item: Item, idx: number) => (
                            <li
                                key={idx}
                                style={{
                                    color: getColor(item.level),
                                    marginBottom: '5px',
                                }}
                            >
                                {item.name} ({item.level}) {item.experience}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Tech;
