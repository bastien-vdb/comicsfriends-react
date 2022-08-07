import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './about.css';

const About = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mckeb5e', 'template_1jn8vhg', form.current, 'MEw4EmLVTmkXg_AT5')
        .then((result)=>{
            console.log(result.text);
            console.log('Message sent');
            e.target.reset();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const pushEnter = (e) => {
        if (e.key === 'Enter' && sendEmail());
    }

    return (
        <div className='contact'>
            <div className='contact_InsideContainer' style={{display:'flex'}}>
                <form ref={form} onSubmit={sendEmail} onKeyDown={pushEnter}>
                    <div>
                        <input type="text" name="user_name" placeholder='Your Name' id="user_name" className='aboutInputField'/>
                        <input type="email" name="user_email" placeholder='Your Email' id="user_email" className='aboutInputField' /> 
                    </div>
                    <div>
                        <input type="tel" name="user_phone"placeholder='Your phone number' id="user_phone" className='aboutInputField' />
                    </div>
                    <div>
                        <textarea name="message" placeholder='Your message' id="message"/>
                    </div>
                    <input type="submit" value="Envoyer" className="aboutButton" />
                </form>
            </div>
        </div>
    );
};

export default About;