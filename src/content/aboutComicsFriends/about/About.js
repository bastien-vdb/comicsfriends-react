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
                <iframe style={{border:0, width:'100%', height:'300px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.010077065753!2d2.294484377156603!3d48.88497540000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fa2d50f1455%3A0x50b82c368941b50!2s17th%20arrondissement%20of%20Paris%2C%2075017%20Paris!5e0!3m2!1sen!2sfr!4v1659775809896!5m2!1sen!2sfr" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default About;