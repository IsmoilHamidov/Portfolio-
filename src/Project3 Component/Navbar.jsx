import React from "react";
import Resume from "../Images/My CV_page-0001 (1).jpg"



function Navbar() {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler Button_Navbar ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <i class="fa-solid fa-bars text-white text-center"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="P_Nav navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item intro_last_item_box">
                                 <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
                            </li>
                            <li class="nav-item intro_last_item_box">
                                 <a class="nav-link" href={Resume} download >Resume</a>
                            </li>
                            <li class="nav-item intro_last_item_box">
                                <a class="nav-link" href="#About">About </a>
                            </li>
                            <li class="nav-item intro_last_item_box">
                                <a class="nav-link" href="#Certificate">Certificate</a>
                            </li>
                            <li class="nav-item intro_last_item_box">
                                <a class="nav-link" href="#Projects">Projects</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
     );
}

export default Navbar;