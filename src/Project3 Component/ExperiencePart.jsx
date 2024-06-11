import React from "react";
import experience_img from "../Images/experience_img.png";

function ExperiencePart() {


    return (
        <div className="Experience_part Same_parts">
            <h4 className="text-end H_title">Experience</h4>
            <div className="project_rate">
                <div className="blue_rate"></div>
            </div>

            <div className="Project_category Experience_category">
                <button className="Project_button">Experience</button>
                <button className="Project_button">Education</button>
            </div>

            <div className="container-fluid">
                <div className="row experience_writing">
                    <div className="d-none d-md-flex col-md-5 E_writing_box" id="box1">
                        <div>
                            <a className="E_writing_item section" id="section1">
                                <h5>Technical Content Writer</h5>
                                <h6>GeeksforGeeks | 11-2023 – 02-2024</h6>
                                <p className="text">As a content creator, I've authored and published numerous articles on technical topics like Power BI, Python, Data Science, and Machine Learning. My focus is on simplifying complex concepts, ensuring accessibility for all audiences. Each article is carefully crafted to translate intricate jargon into easily understandable terms, fostering a deep understanding. I stay current with the latest developments in these fields, delivering up-to-date content that empowers readers to navigate and excel in the ever-evolving landscape of technology.</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-3 col-md-2 E_writing_center_box">
                        <div></div>
                        <img src={experience_img} className="e_center_img1 image" id="image1" alt="Experience 1" />
                        <img src={experience_img} className="e_center_img2 image" id="image2" alt="Experience 2" />
                        <img src={experience_img} className="d-block d-md-none e_center_img3 image" id="image3" alt="Experience 3" />
                    </div>

                    <div className="col-9 col-md-5 E_writing_box" id="box2">
                        <a className="E_writing_item section" id="section2">
                            <h5>Content Writer</h5>
                            <h6>Wholesome Reliable | 04-22 to 11-22</h6>
                            <p className="text">I've authored 50+ articles spanning diverse topics such as lifestyle, travel, tech, and digital marketing. Through captivating content tailored for various clients, I've successfully engaged over 100k readers. My writing style transcends subject boundaries, delivering informative and compelling pieces that resonate with a wide audience. Whether exploring lifestyle trends, travel destinations, or delving into the intricacies of technology and digital marketing, each article is crafted to captivate and inform, leaving a lasting impact on the readership.</p>
                        </a>

                        <a className="E_writing_item d-flex d-md-none section" id="section3">
                            <h5>Content Writer</h5>
                            <h6>Wholesome Reliable | 04-22 to 11-22</h6>
                            <p className="text">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ExperiencePart;
