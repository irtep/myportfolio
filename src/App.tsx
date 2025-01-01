import React, { useState } from 'react';
import useIsMobile from './hooks/useIsMobile';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
import Projects from './components/Projects';

const App: React.FC = (): React.ReactElement => {
    const [page, setPage] = useState<string>('about me');
    const isMobile: boolean = useIsMobile();

    const pages: Record<string, React.ReactNode> = {
        'about me': <AboutMe isMobile={isMobile}/>,
        'highlighted projects': <Projects/>,
        'technical skills': <Tech/>,
        'work exp': <div>exp</div>,
    };

    return (
        <div
            style={{
                color: 'rgb(180,180,180)',
                textAlign: 'center',
                padding: 10,
            }}
        >
            <Navigation
                isMobile={isMobile}
                page={page}
                setPage={setPage}
                pages={pages}
            />
            {/* Page Content */}
            <div>{pages[page]}</div>
        </div>
    );
};

export default App;
