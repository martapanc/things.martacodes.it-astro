import Giscus from '@giscus/react';
import { useState, useEffect } from 'react';

export const Comments = () => {
    const [theme, setTheme] = useState<'dark_tritanopia' | 'light_high_contrast'>('dark_tritanopia');

    useEffect(() => {
        // Read initial theme
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark_tritanopia' : 'light_high_contrast');

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            const isDarkNow = document.documentElement.classList.contains('dark');
            setTheme(isDarkNow ? 'dark_tritanopia' : 'light_high_contrast');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Giscus
            id='comments'
            repo='martapanc/things.martacodes.it'
            repoId='R_kgDONF_fjQ'
            category='General'
            categoryId='DIC_kwDONF_fjc4Cl6xR'
            mapping='pathname'
            term='Welcome to @giscus/react component!'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={theme}
            lang='en'
            loading='lazy'
        />
    );
};
