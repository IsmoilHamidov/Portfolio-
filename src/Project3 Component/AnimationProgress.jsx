import React, { useEffect, useRef } from 'react';

function AnimationProgress() {
  const circlesRef = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach(progress => {
      let degree = 0;
      const targetDegree = parseInt(progress.getAttribute('data-degree'), 10);
      const color = progress.getAttribute('data-color');
      const number = progress.querySelector('.number');

      const interval = setInterval(() => {
        degree += 1;
        if (degree > targetDegree) {
          clearInterval(interval);
          return;
        }
        const gradient = `conic-gradient(from ${360 - ((degree / 100) * 360)}deg, ${color} 0%, ${color} ${degree}%, transparent ${degree}%, transparent 100%)`;
        progress.style.backgroundImage = gradient;
        progress.style.backgroundSize = '100% 100%';
        number.innerHTML = degree + '<span>%</span>';
        number.style.color = color;
      });

      // Clear interval when component unmounts
      return () => clearInterval(interval);
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="animation_container">
      <div className="circle" data-degree='75' data-color="#1ca7fb" ref={el => (circlesRef.current[0] = el)}>
        <h2 className="number">84 <span>%</span></h2>
        <h4>Html</h4>
      </div>

      <div className="circle" data-degree='75' data-color="#ff2972" ref={el => (circlesRef.current[1] = el)}>
        <h2 className="number">58 <span>%</span></h2>
        <h4>Css</h4>
      </div>

      <div className="circle" data-degree='55' data-color="#fee800" ref={el => (circlesRef.current[2] = el)}>
        <h2 className="number">94 <span>%</span></h2>
        <h4>JS</h4>
      </div>
    </div>
  );
}

export default AnimationProgress;
