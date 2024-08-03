import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect} from "react";
import intro_img from "../Images/my_img2.jpg"
import about_img from "../Images/about_img2-transformed.jpeg"
import certificate_img1 from "../Images/certificate_Add_img1.png"
import certificate_img2 from "../Images/certificate_img1.jpg"
import certificate_img3 from "../Images/certificate_img3.jpeg"
import project_img5 from "../Images/project_part_img5.png"
import project_img6 from "../Images/project_part_img6.png"
import project_img7 from "../Images/project_part_img7.png"
import project_img8 from "../Images/project_part_img8.png"
import project_img9 from "../Images/project_part_img9.png"
import project_img10 from "../Images/project_part_img10.png"
import project_img11 from "../Images/project_part_img11.png"
import project_img12 from "../Images/project_part_img12.png"
import project_img13 from "../Images/Project_part_img13.png"
import p_p5 from "../Images/p_p5.1.png"
import p_p6 from "../Images/p_p6.1.jpg"
import p_p7 from "../Images/p_p7.1.png"
import p_p8 from "../Images/p_p8.1.jpg"
import p_p9 from "../Images/p_p9.1.jpg"
import p_p10 from "../Images/p_p10.1.webp"
import p_p11 from "../Images/p_p11.1.jpg"
import p_p12 from "../Images/p_p12.1.webp"
import p_p13 from "../Images/p_p13.png"
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimationProgress from "./AnimationProgress";
import FormSending from "./FormSending";







function HomePage() {

    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }


    // 2
    const[ImgToggle, setImgToggle] = useState(1)

    function ImgUpdateToggle(id){
        setImgToggle(id)
    }


    // 3
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out', 
        });
    }, []);
    window.addEventListener('scroll', () => {
        AOS.refresh();
    });




return( 
    <>
        <div className="Home_container">
            <Navbar/>    
     
            
                <div className="introduction_part">
                    <div className="intro_img">
                        <img src={intro_img} alt="rasm bor" />
                    </div>
                    <h4>Hello</h4>
                    <h2>I’m Ismoilxo'ja</h2>
                    <div className="third_heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        Front-end
                         <span className="mx-2 auto-type" style={{color:"#D32D20"}}>
                            <Typewriter
                                words={["Junior Developer"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={180}
                                deleteSpeed={180}
                                delaySpeed={2000}
                            />
                         </span>
                    </div>
                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">An enthuastic student to learn Web-deveolpment. Actively seeking opportunities to apply my skills and 
                    knowledge to real-world projects and contribute to the advancement of the industry.</p>

                    <div className="intro_last_item" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">  
                        <Link to="/View_page" className=" intro_last_item_box">
                            <button>View Resume</button>
                        </Link>

                        <a href="#Contact" className=" intro_last_item_box">
                            <button>Contact me</button> 
                        </a>
                    </div>
                </div>


                <div className="container About_me Same_parts" id="About_me">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 about_left_side" data-aos="zoom-in-down">
                            <img src={about_img} alt="rasm_bor" />
                        </div>

                        <div className="col-sm-12 col-md-7 about_right_side" data-aos="fade-up">
                            <h4>About me </h4>
                            <p>I am actively looking for possibilities to use my learned skills and expertise to real-world initiatives.
                                 My educational background has equipped me with a foundation in Html and Css and programming language 
                                 such as JavaScript. Additionally, I have been gaining practical experience through hands-on projects, both independently and collaboratively.</p>
                        </div>
                    </div>
                </div>


{/* Projects */}
                <div className="Projects_part Same_parts" id="Projects">
                    <h4 className="H_title">Projects</h4>
                    <div className="project_rate">
                        <div className="blue_rate"></div>
                    </div>
                    <div className="Project_category">
                            <button className="Project_button" onClick={()=>updateToggle(1)} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> Html and Css</button>
                            <button className="Project_button" onClick={()=>updateToggle(2)} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> JavaScript</button>
                            <button className="Project_button" onClick={()=>updateToggle(3)} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> React. js</button>
                    </div>


                    <div className={toggle === 1 ? "show-content" :"content"}>
                        <div className="container">
                            <div className="row">
                                    <div className="col-md-5 d-none d-md-flex Analyze_box">
                                        <img src={project_img5} onClick={()=>ImgUpdateToggle(1)} alt="rasm_bor" />
                                        <img src={project_img6} onClick={()=>ImgUpdateToggle(2)} alt="rasm_bor" />
                                        <img src={project_img7} onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                    </div>
                                      

                                {/* images_1*/}
                                    <div className="col-md-7 Analyze_box">
                                        <div className={ImgToggle === 1 ? "Anaylyze_right" :"second_content"} >     
                                            <img src={p_p5} alt="rasm_bor" />
                                            <h4>NFT Marketplace</h4>
                                            <p>Discover digital art & Collect NFTs</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/html-css-first-project.git" target="_blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"} >     
                                            <img src={p_p6} alt="rasm_bor" />
                                            <h4>Travel Agency</h4>
                                            <p> It’s a Big World Out There, Go Explore</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/Travel-Agency.git" target="_blank" rel="noopener noreferrer">Git Hub link</a>
                                            
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"} >     
                                            <img src={p_p7} alt="rasm_bor" />
                                            <h4>Crypter</h4>
                                            <p>The new creative economy.</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/htm-css_lesson_project.git" target="_blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>
                                    </div>
                                {/* */}


                                    <div className="d-flex d-md-none Analyze_box">
                                        <img src={project_img5} onClick={()=>ImgUpdateToggle(1)}  alt="rasm_bor"/>
                                        <img src={project_img6} onClick={()=>ImgUpdateToggle(2)}  alt="rasm_bor"/>
                                        <img src={project_img7} onClick={()=>ImgUpdateToggle(3)}  alt="rasm_bor"/>
                                    </div>
                                </div>
                        </div>
                    </div>



                    {/* toggle 2 */}
                    <div className={toggle === 2 ? "show-content" :"content"}>
                        <div className="container">
                            <div className="row">
                                    <div className="col-md-5 d-none d-md-flex Analyze_box">
                                        <img src={project_img8} onClick={()=>ImgUpdateToggle(1)} alt="rasm_bor" />
                                        <img src={project_img9} onClick={()=>ImgUpdateToggle(2)} alt="rasm_bor" />
                                        <img src={project_img10}onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                    </div>

                                    <div className="col-md-7 Analyze_box">
                                        <div className={ImgToggle === 1 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p8} alt="rasm bor" />
                                            <h4>Tere</h4>
                                            <p> Download app, Save money, Make friends!</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/TERE-.git" target="blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p9} alt="rasm_bor" />
                                            <h4>Calculator</h4>
                                            <p>The calculator project is one of my practise works</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/calculator_practise.git" target="blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p10} alt="rasm_bor" />
                                            <h4>Adding to shopping cart</h4>
                                            <p>JavaScript classwork</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/JavaScript-lesson-project.git" target="blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                    </div>

                                        <div className="d-flex d-md-none Analyze_box">
                                            <img src={project_img8} onClick={()=>ImgUpdateToggle(1)} alt="rasm_bor" />
                                            <img src={project_img9} onClick={()=>ImgUpdateToggle(2)}  alt="rasm_bor" />
                                            <img src={project_img10} onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                        </div>
                                </div>
                        </div>
                    </div>


                    {/* toggle 3 */}
                    <div className={toggle === 3 ? "show-content" :"content"}>
                        <div className="container">
                            <div className="row">
                                    <div className="col-md-5 d-none d-md-flex Analyze_box">    
                                        <img src={project_img11} onClick={()=>ImgUpdateToggle(1)} alt="rasm_bor"/>
                                        <img src={project_img13} onClick={()=>ImgUpdateToggle(2)} alt="rasm_bor" />
                                        <img src={project_img12} onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                    </div>

                                    <div className="col-md-7 Analyze_box">
                                        <div className={ImgToggle === 1 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p11} alt="rasm_bor" />
                                            <h4>Crypto Property</h4>
                                            <p>Your reliable cryptocurrency real estate service</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/CryptoProperty.git" target="blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p13} alt="rasm_bor" />
                                            <h4>IT-Bilim Imitation Project</h4>
                                            <p>IT Knowledge Development Center - IT Bilim</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/IsmoilHamidov/IT-bilim-Imitation-project.git" target="blank" rel="noopener noreferrer">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p12} alt="rasm_bor" />
                                            <h4>Soon</h4>
                                            <p>Practsing and Prepearing for new projects</p>
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                        
                                    </div>

                                        <div className="d-flex d-md-none Analyze_box">
                                            <img src={project_img11} onClick={()=>ImgUpdateToggle(1)} alt="rasm_bor" />
                                            <img src={project_img12} onClick={()=>ImgUpdateToggle(2)} alt="rasm_bor" />
                                            <img src={project_img12} onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                        </div>
                                </div>
                        </div>
                    </div>  

                </div>



                <div className="skills Same_parts">
                        <h4 className="text-end H_title">Skills</h4>
                        <div className="project_rate">
                            <div className="blue_rate"></div>
                        </div>
                        <button className="Project_button skills_button"data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Languages</button>



                        <AnimationProgress/>
                        {/* <div className="Skills_carusel_box">
                            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={carusel_img1} className="d-block" aria-hidden="true" alt="rasm_bor"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={carusel_img2} className="d-block" aria-hidden="true" alt="rasm_bor"/>
                                        </div>
                                        <div className="carousel-item">
                                        <   img src={carusel_img3} className="d-block" aria-hidden="true" alt="rasm_bor"/>
                                        </div>
                                    </div>
                                    
                                    <button className="carousel-control-prev Carusel_Button" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                        <img src={carusel_btn1} alt="rasm_bor" aria-hidden="true" />
                                    </button>
                                    <button className="carousel-control-next Carusel_Button" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                        <img src={carusel_btn2} alt="rasm_bor" aria-hidden="true" />
                                    </button>
                            </div>
                        </div> */}
                </div>


                <div className="Same_parts" id="Certificate">
                    <h4 className="H_title">Certification</h4>
                    <div className="project_rate">
                        <div className="blue_rate"></div>
                    </div>
                    <div className="certificate_image_holder">
                        <img src={certificate_img1} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"alt="rasm_bor" />
                        <img src={certificate_img2} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"alt="rasm_bor" />
                        <img src={certificate_img3}data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"alt="rasm_bor" />
                    </div>
                </div>



        {/* Experience part Scrollspy */}
                {/* <Experience_part/> */}


                {/* Contact part */}
                <FormSending/>  

        
        </div>
    </>
     );
}

export default HomePage;