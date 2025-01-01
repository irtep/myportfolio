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
                    and thank you for taking a look at my portfolio.
                </p>
                <p>
                    I started my coding hobby about 2015, by taking W3 school courses of HTML, CSS and Javascript. After, that I took some courses from Freecodecamp. I started by doing applications, that supported my work and hobbies and games. As far as I know, one of my work apps is still in use (2025), that I coded for that customer care team in around 2016. Very simple, but very useful, that app indeed is.
                </p>
                <p>
                    2020 I took a course from MOOC of University of Helsinki, the Full Stack Open 2020, and I felt, that it gave me a huge boost to my programming skills. After that I got an idea, that if I would do an bachelor title in AMK or in traditional University, that would probably boost my skills even more.
                </p>
                <p>
                    With that on my mind, I applied to XAMK University of applied sciences, Tradenomi of IT program. The test exam was about Javascript, so it was piece of cake for me and I was in.
                </p>
                <p>
                    I did that school, while I was working full time, so while I still was consuming programming courses eagerly, those courses, that were not about programming, like swedish, english, communications, mathematics, video editing started to feel more and more irrelevant. I felt, like that I would learn better programming, by programming or doing hand picked courses about it. So I decided to quit that school, without graduation. But those courses about programming were very good, so it was definately worth the trouble.
                </p>
                <p>
                    Next thing to boost my skills of programming happened in work. I was a Tech Support Specialist of integration products, and I had a change to do backend developer work in there, aside my other duties. And that went well. I made transformations, configurations, testing, deploying for about three years.
                </p>
                <p>
                    But, everything ends at some point, and when the corporation decided to terminate one of our biggest brand in Finland, I was given some options, and from those I felt that the Goodbye, with a Golden Handshake was the most fitting for me.
                </p>
                <p>
                    So, now I am pursuing my dream to work as a Developer.
                </p>
                <p>
                    Feel free to contact me:
                </p>
                <p>
                    rasanen.petri()gmail.com
                </p>
            </div>
        </>
    );
};

export default AboutMe;