import React, { useState } from 'react';
import contact_img from "../Images/contact_img-removebg-preview.png"


const Form_sending = () => {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form data to the Telegram bot
        const telegramBotId = '7126793635:AAHizkdnI8rwdZRUqkA9sN4XYFEEyk-L7aU';
        const chatId = '966230102';
        const message = `Name: ${formData.fname}; Email: ${formData.email}; Comment: ${formData.comment}`;

        fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => {
            if (response.ok) {
                // Redirect to a success page or show a success message
                window.location.href = '/success';
                alert("Thanks for your message! I will contact with you soon!"
                )
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            // Handle error, show error message, etc.
        });

    };



    return (
        <div className="Contact_me  Same_parts" id="Contact">
                <h4 className="H_title">Contact Me</h4>
                <div className="project_rate">
                    <div className="blue_rate"></div>
                </div>
                <div className="container Contact_information_box">
                    <div className="row">
                        <div className="d-none d-md-flex col-md-5">
                            <div className="contact_img_holder">
                                <img src={contact_img} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">

                            <form className="contact_form" method="get" onSubmit={handleSubmit}>
                                <input type="text" id="fname" value={formData.fname} onChange={handleChange} placeholder="Name*" required/>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email ID*" required/>
                                <textarea rows="5" id="comment" value={formData.textarea} onChange={handleChange} placeholder="Message*" ></textarea>
                                <button type="submit" className="form_button"  id="liveToastBtn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Form_sending;