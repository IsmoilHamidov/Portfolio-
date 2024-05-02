import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/Animation";



function PreLoader() {

    useEffect(() => {
        preLoaderAnim()
    }, []);



    return ( 
      <div className="preloader">
        <div className="texts-container">
            <span>Welcome to </span>
            <span>My</span>
            <span>Personal</span>
            <span>Web</span>
            <span>Page</span>
        </div>
      </div>
     );
}

export default PreLoader;