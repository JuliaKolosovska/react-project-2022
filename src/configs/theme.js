import React, { useState, useEffect } from 'react';

import './dark-light.css';

function Theme() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`Theme ${theme}`}>
            <p onClick={toggleTheme}>Toggle Theme</p>


        </div>
    );
}
export {Theme};