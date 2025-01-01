import React, { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
    isMobile: boolean;
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    pages: Record<string, React.ReactNode>
};

const Navigation: React.FC<NavigationProps> = ({
    isMobile,
    page,
    setPage,
    pages
}): React.ReactElement => {

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    gap: isMobile ? 10 : 5,
                }}
            >
                {Object.keys(pages).map((key) => (
                    <button
                        key={`page key ${key}`}
                        onClick={() => setPage(key)}
                        style={{
                            padding: '10px',
                            backgroundColor: page === key ? '#555' : '#333',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            width: isMobile ? '90%' : 'auto',
                        }}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Navigation;