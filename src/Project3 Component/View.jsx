import React from 'react';
import view_img from "../Images/My CV_page-0001 (1).jpg"
import { Link } from "react-router-dom";
import {TransformWrapper,TransformComponent,useControls} from "react-zoom-pan-pinch";
import ResumeDownload from './ResumeDownload';




const View = () => {

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        <button className='Zoom_btns' onClick={() => zoomIn()}><i className="fa-solid fa-magnifying-glass-plus me-2" ></i><span className='d-none d-xl-inline'>Zoom In </span></button>
        <button className='Zoom_btns' onClick={() => zoomOut()}><i className="fa-solid fa-magnifying-glass-minus me-2" ></i><span className='d-none d-xl-inline'>Zoom out </span></button>
        <button className='Zoom_btns' onClick={() => resetTransform()}>Reset</button>
      </>
    );
  };

  return (
    <div className="Home_container">
      <div className="View_container">
            <div className='view_left'>

            

              <Link to="/" className='View_btn'>
                  <button> <i className="fa-solid fa-house me-3"></i>Home</button>
              </Link>
              <ResumeDownload/>
            </div>

                <div className='view_right'>
                  <TransformWrapper>
                      <Controls />
                        <TransformComponent>
                        <img src={view_img} alt="rasm_bor" className='view_right_img' /> 
                    </TransformComponent>
                  </TransformWrapper>
                </div>
      </div>
    </div>
  );
};

export default View;




