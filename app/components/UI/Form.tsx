import emailjs from "emailjs-com";
import Card from "./Card";
import React, { useState, useRef } from "react";

// https://dev.to/ivanms1/protecting-your-api-keys-with-next-js-21ej

export default function Form() {
    const form = useRef<HTMLFormElement | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // cast e to type of Event
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs
            .sendForm(process.env.EMAILJS_ID, "<YOUR TEMPLATE ID>", "#myForm")
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
        <Card className='contact-form'>
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
                <div>
                    <h1>Thank You</h1>
                    <p>We appreciate your feedback.</p>
                </div>
            )}
        </Card>
    );
}
