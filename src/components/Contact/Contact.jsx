import React from 'react';
import '../Contact/contact.css'
import contactImg from '../Contact/contact.png'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {




    const [state, handleSubmit] = useForm("xrgnpqej");
    const ContactForm = () => {
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        } else {
            handleSubmit()
        }

    }

    return (
        <div className='contact-container'>

            <div className="contact-details">
                <h1 className='contact-heading'>Contact me</h1>
                <p>Fill in the form to start a conversation</p>

                <div className="homepage-contacts">
                    <ul className='contact-ul'>
                        <li><i class="fa-brands fa-github"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                        <li><i class="fa-regular fa-envelope"></i></li>
                    </ul>
                </div>

                <img src={contactImg} alt="" className='contact-img' />
            </div>

            <div className="contact-form">
                <form className='cont-form' action='https://formspree.io/f/xrgnpqej' method="POST" onSubmit={ContactForm} id='form'>
                    <label htmlFor="name">Name</label>
                    <input className='form-input' type="text" placeholder='Name' name='name' id="userName" autoComplete='off' required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="email">Email</label>
                    <input className='form-input' type="text" name='email' placeholder='john@gmai.com' id="userEmail" autoComplete='off' required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">Message</label>
                    <input className='form-input' type="text" name="text" placeholder='Hi, there' id='userMessage' autoComplete='off' required />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button disabled={state.submitting} className='form-btn' id="submitButton">Connect</button>

                </form>


            </div>
        </div>
    );
}

export default Contact;
