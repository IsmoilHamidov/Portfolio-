import React from "react";
import pdf from "../Images/"


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

        </>
     );
}

export default Resume_download;