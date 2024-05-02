import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import intro_img from "../Images/my_img2.jpg"
import about_img from "../Images/about_img2-transformed.jpeg"
import project_img1 from "../Images/Project_part_img1.png"
import carusel_img1 from "../Images/carusel.png"
import carusel_img2 from "../Images/carusel_img2.png"
import carusel_img3 from "../Images/carusel_img3.png"
import carusel_btn1 from "../Images/carusel_btn1.png"
import carusel_btn2 from "../Images/carusel_btn2.png"
import certificate_img1 from "../Images/certificate_Add_img1.png"
import certificate_img2 from "../Images/certificate_img1.jpg"
import certificate_img3 from "../Images/certificate_img3.jpeg"
import experience_img from "../Images/experience_img.png";
import project_img5 from "../Images/project_part_img5.png"
import project_img6 from "../Images/project_part_img6.png"
import project_img7 from "../Images/project_part_img7.png"
import project_img8 from "../Images/project_part_img8.png"
import project_img9 from "../Images/project_part_img9.png"
import project_img10 from "../Images/project_part_img10.png"
import project_img11 from "../Images/project_part_img11.png"
import project_img12 from "../Images/project_part_img12.png"
import p_p5 from "../Images/p_p5.1.png"
import p_p6 from "../Images/p_p6.1.jpg"
import p_p7 from "../Images/p_p7.1.png"
import p_p8 from "../Images/p_p8.1.jpg"
import p_p9 from "../Images/p_p9.1.jpg"
import p_p10 from "../Images/p_p10.1.webp"
import p_p11 from "../Images/p_p11.1.jpg"
import p_p12 from "../Images/p_p12.1.webp"
import { Typewriter } from "react-simple-typewriter";
import Form_sending from "./Form_sending";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 









  
function Home_page() {
    let obj = [
        {
            "siteName": "name",
            "siteImg": {project_img1},
            "siteGithubLink": "https://stackoverflow.com/questions/52909830/typeerror-cannot-read-property-classlist-of-null",
    
        },
        
    ]
    console.log(obj[0])
    

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
        <div className="Home_container">
            <Navbar/>    
            
                <div className="introduction_part">
                    <div className="intro_img">
                        <img src={intro_img} alt="" />
                    </div>
                    <h4>Hey</h4>
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
                            <p>I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects.
                                 My educational background has equipped me with a foundation in Html and Css and programming language 
                                 such as Java Script . Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively.</p>
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
                                            <a href="https://github.com/Hamidov2004/html-css-first-project.git" target="_blank">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"} >     
                                            <img src={p_p6} alt="rasm_bor" />
                                            <h4>Travel Agency</h4>
                                            <p> It’s a Big World Out There, Go Explore</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/Travel-Agency.git" target="_blank">Git Hub link</a>
                                            
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"} >     
                                            <img src={p_p7} alt="rasm_bor" />
                                            <h4>Crypter</h4>
                                            <p>The new creative economy.</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/htm-css_lesson_project.git" target="_blank">Git Hub link</a>
                                        </div>
                                    </div>
                                {/* */}


                                    <div className="d-flex d-md-none Analyze_box">
                                        <img src={project_img5} onClick={()=>ImgUpdateToggle(1)} />
                                        <img src={project_img6} onClick={()=>ImgUpdateToggle(2)} />
                                        <img src={project_img7} onClick={()=>ImgUpdateToggle(3)}/>
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
                                            <img src={p_p8} alt="" />
                                            <h4>Tere</h4>
                                            <p> Download app, Save money, Make friends!</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/TERE-.git" target="blank">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p9} alt="rasm_bor" />
                                            <h4>Calculator</h4>
                                            <p>The calculator project is one of my practise works</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/calculator_practise.git" target="blank">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p10} alt="rasm_bor" />
                                            <h4>Adding to shopping cart</h4>
                                            <p>JavaScript classwork</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/JavaScript-lesson-project.git" target="blank">Git Hub link</a>
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
                                        <img src={project_img12} onClick={()=>ImgUpdateToggle(2)} alt="rasm_bor" />
                                        <img src={project_img12} onClick={()=>ImgUpdateToggle(3)} alt="rasm_bor" />
                                    </div>

                                    <div className="col-md-7 Analyze_box">
                                        <div className={ImgToggle === 1 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p11} alt="rasm_bor" />
                                            <h4>Crypto Property</h4>
                                            <p>Your reliable cryptocurrency real estate service</p>
                                            <i className="fa-brands fa-github"></i>
                                            <a href="https://github.com/Hamidov2004/CryptoProperty.git" target="blank">Git Hub link</a>
                                        </div>

                                        <div className={ImgToggle === 2 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p12} alt="rasm_bor" />
                                            <h4>Soon</h4>
                                            <p>Practsinng and Prepearing for new projects</p>
                                            <i className="fa-brands fa-github"></i>
                                        </div>

                                        <div className={ImgToggle === 3 ? "Anaylyze_right" :"second_content"}>     
                                            <img src={p_p12} alt="rasm_bor" />
                                            <h4>Soon</h4>
                                            <p>Practsinng and Prepearing for new projects</p>
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
                        <button className="Project_button"data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Languages</button>

                        <div className="Skills_carusel_box">
                            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={carusel_img1} className="d-block" aria-hidden="true" alt="rasm_bor"/>
                                            <span className="visually-hidden">Previous</span>
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
                        </div>
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
                <div className="Experience_part Same_parts" >
                        <h4 className="text-end H_title">Experience</h4>
                        <div className="project_rate">
                            <div className="blue_rate"></div>
                        </div>

                        <div className="Project_category Experience_category">
                            <button className="Project_button">Experience </button>
                            <button className="Project_button">Education</button>
                        </div>


                        <div className="container-fluid">
                            <div className="row experience_writing">
                                <div className="d-none d-md-flex col-md-5 E_writing_box">
                                    <div>
                                        <a className="E_writing_item" href="#section1">
                                            <h5>Technical Content Writer</h5>
                                            <h6>GeeksforGeeks | 11-2023 – 02-2024</h6>
                                            <p>As a content creator, I've authored and published numerous articles on technical topics like Power BI, Python, Data Science, and Machine Learning. My focus is on simplifying complex concepts, ensuring accessibility for all audiences. Each article is carefully crafted to translate intricate jargon into easily understandable terms, fostering a deep understanding. I stay current with the latest developments in these fields, delivering up-to-date content that empowers readers to navigate and excel in the ever-evolving landscape of technology.</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-3 col-md-2 E_writing_center_box  list-group"  id="list-example">
                                    <div></div>
                                    <img src={experience_img} className="e_center_img1" id="section1"/>
                                    <img src={experience_img} className="e_center_img2" id="section2"/>
                                    <img src={experience_img}  className="d-block d-md-none e_center_img3" id="section3"/>

                                            {/* <a class="list-group-item list-group-item-action e_center_img1" href="#list-item-1">
                                                    <img src={experience_img}/>
                                            </a> 
                                            <a class="list-group-item list-group-item-action e_center_img2 " href="#list-item-2">
                                                    <img src={experience_img}/>
                                            </a> 
                                            <a class="list-group-item list-group-item-action e_center_img3" href="#list-item-3">
                                                    <img src={experience_img}  className="d-block d-md-none"/>
                                            </a>  */}
                                </div>


                                <div className="col-9 col-md-5 E_writing_box  " >
                                        <a className="E_writing_item" href="#section2">
                                            <h5>Content Writer</h5>
                                            <h6>Wholesome Reliable | 04-22 to 11-22</h6>
                                            <p>I've authored 50+ articles spanning diverse topics such as lifestyle, travel, tech, and digital marketing. Through captivating content tailored for various clients, I've successfully engaged over 100k readers. My writing style transcends subject boundaries, delivering informative and compelling pieces that resonate with a wide audience. Whether exploring lifestyle trends, travel destinations, or delving into the intricacies of technology and digital marketing, each article is crafted to captivate and inform, leaving a lasting impact on the readership.</p>
                                        </a>
                                        <a className="E_writing_item d-flex d-md-none" href="#section3">
                                            <h5>Content Writer</h5>
                                            <h6>Wholesome Reliable | 04-22 to 11-22</h6>
                                            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                                        </a>
                                </div>
                            </div>
                        </div>
                </div>

                {/* Contact part */}
                <Form_sending/>  

        </div>
     );
}

export default Home_page;