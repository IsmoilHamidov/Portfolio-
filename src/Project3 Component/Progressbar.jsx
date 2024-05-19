import React, { useEffect } from 'react';

function Progressbar() {
    useEffect(() => {
        function updateProgressBar() {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
            
            // Get the progress bar element
            const progressBar = document.querySelector('#progress-bar');

            // Check if the progress bar element exists before accessing its style property
            if (progressBar) {
                progressBar.style.setProperty('--progress', scrollPercent);
            }
        }

        // Add event listener for scroll when component mounts
        document.addEventListener('scroll', updateProgressBar);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener('scroll', updateProgressBar);
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div id="progress-bar"></div>
    );
}

export default Progressbar;
