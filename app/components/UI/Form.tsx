import emailjs from "emailjs-com";
import Card from "./Card";
import React, { useState, useRef } from "react";

// https://dev.to/ivanms1/protecting-your-api-keys-with-next-js-21ej

export default function Form() {

    const form = useRef<HTMLFormElement | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
        
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setFormSubmitted(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID ?? '', // Provide a default value for the service ID            
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (err) {
                    console.log("FAILED...", err);
                }
            );
    }

    return (
        <>
            {/* if !formSubmitted, display 'contact us' and form, else display 'thank you' */}

            {!formSubmitted && (
                // form not submitted - display form
                <form
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <h1>Contact Us</h1>

                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            name='user_name'
                            className='form-control'
                        />
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='user_email'
                            className='form-control'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                        />
                    </div>

                    <div className='form-group'>
                        <label>Message</label>
                        <textarea
                            name='message'
                            className='form-control'
                        />
                    </div>

                    <input
                        className='btn btn-info btn-sm'
                        id='contact-us-button'
                        type='submit'
                        value='Send'
                    />
                </form>
            )}
            {formSubmitted && (
                // form submitted - display thank you
                <>
                    <h1>Thank You!</h1>
                    <p>We will get back with you as soon as possible, for more immediate contact you can also call us at:</p>
                    <p>Phone: (859) 333-9300</p>
                    <p>Or stop by and say hello!</p>                    
                </>
            )}
        </>
    );
}
