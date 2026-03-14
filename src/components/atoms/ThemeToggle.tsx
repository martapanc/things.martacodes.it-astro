import { useState } from 'react';
import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() =>
        typeof window !== 'undefined'
            ? localStorage.getItem('theme') !== 'light'
            : true
    );

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', next);
    };

    return (
        <div className='flex w-full justify-center'>
            {/* @ts-expect-error: required props */}
            <Expand
                toggle={toggle}
                toggled={!isDark}
                placeholder={'Theme toggle'}
            />
        </div>
    );
};

export default ThemeToggle;
