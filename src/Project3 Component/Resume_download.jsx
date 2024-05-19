import React from "react";
import pdf from "../Rezume/rezume.pdf"


function Resume_download() {

    const onButtonClick = () => {
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "..."
                alink.click();
            })
        })
    }

    return ( 


        <>
           <div className="View_btn">
                <button onClick={onButtonClick}><i className="fa-solid fa-download me-3"></i>Download Resume</button>
            </div> 
        </>
     );
}

export default Resume_download;