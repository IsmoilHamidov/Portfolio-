import React from 'react';


function Progressbar() {

    function UpdateProgressBar() {
        const { scrollTop, scrollHeight } = document.
        documentElement;
        const scrollPercent = `${(scrollTop / (scrollHeight -
         window.innerHeight)) * 100}%`;

        //  updating the progress var to that total height
        document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
    }

    //even listen for the scroll
    document.addEventListener('scroll', UpdateProgressBar);


    return (
        <div id="progress-bar">

        </div>
    );
}

export default Progressbar;
