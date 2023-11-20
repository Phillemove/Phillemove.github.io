import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("xoqbbwjz");
    if (state.succeeded) {
        return <p>Thank you for your Request</p>;
    }
    return (
        <>
            <h3>Contact Me</h3>
            <p>If you have any Questions or need Help realizing your Project Idea, you can contact me here</p>
            <form onSubmit={handleSubmit} className="Contact">
                <label htmlFor="email" className='Label' id='labelEmail'>
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='Email'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <br />
                <label htmlFor='message' className='Label' id='labelMessage'>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className='Message'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <br />
                <button type="submit" disabled={state.submitting} className="Button">
                    Send
                </button>
            </form>
        </>
    );
};

export default Contact;