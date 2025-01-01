import React from 'react';

interface AboutMeProps {
    isMobile: boolean;
};

const AboutMe: React.FC<AboutMeProps> = ({ isMobile }): React.ReactElement => {

    return (
        <>
            <div
                style={{
                    padding: 10,
                    textAlign: 'justify',
                    marginLeft: 40,
                    marginRight: 40,
                    color: 'rgb(24, 164, 85)'
                }}
            >
                <p>
                    Hi,
                </p>
                <p>
                    Take a look at my highlighted projects, tech skills and work experience. Other intresting information, that you find in those, I want to tell you, that im one of those team players, that takes everyone in account and has always time to co-workers, no matter how busy we are.
                    If you need some code from me, contact me at:
                </p>
                <p>
                    rasanen.petri()gmail.com
                </p>
            </div>
        </>
    );
};

export default AboutMe;