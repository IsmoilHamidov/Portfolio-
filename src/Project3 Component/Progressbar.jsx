import React, { useEffect } from 'react';

function Progressbar() {
    useEffect(() => {
        function updateProgressBar() {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
            
            const progressBar = document.querySelector('#progress-bar');

            if (progressBar) {
                progressBar.style.setProperty('--progress', scrollPercent);
            }
        }

   
        document.addEventListener('scroll', updateProgressBar);

        return () => {
            document.removeEventListener('scroll', updateProgressBar);
        };
    }, []);

    return (
        <div id="progress-bar"></div>
    );
}

export default Progressbar;
