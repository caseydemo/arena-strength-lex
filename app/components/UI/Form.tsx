import emailjs from "emailjs-com";
import styles from "../../styles/form.module.css";
import React, { useState, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// https://dev.to/ivanms1/protecting-your-api-keys-with-next-js-21ej

export default function Form() {

    const form = useRef<HTMLFormElement | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();
        
    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!executeRecaptcha) {
            setErrorMessage("reCAPTCHA is not available. Please try again later.");
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);

        try {
            // Execute reCAPTCHA and get token
            const recaptchaToken = await executeRecaptcha('contact_form');
            
            // For static sites, we'll add the token to the form data
            // EmailJS will include it in the email, and you can monitor for spam patterns
            if (form.current) {
                // Create a hidden input to include the reCAPTCHA token
                const tokenInput = document.createElement('input');
                tokenInput.type = 'hidden';
                tokenInput.name = 'recaptcha_token';
                tokenInput.value = recaptchaToken;
                form.current.appendChild(tokenInput);
            }

            // Send email with reCAPTCHA token included
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            console.log("SUCCESS!", response.status, response.text);
            setFormSubmitted(true);
        } catch (error) {
            console.log("FAILED...", error);
            setErrorMessage("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {/* if !formSubmitted, display 'contact us' and form, else display 'thank you' */}

            {!formSubmitted && (
                // form not submitted - display form
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    id="contact-us-form"
                >
                    <h1 className={styles.card_title} >Contact Us</h1>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <div className={`form-group ${styles.name_input}`}>
                        <label>Name</label>
                        <input
                            type='text'
                            name='user_name'
                            className='form-control'
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className={`form-group ${styles.email_input}`}>
                        <label>Email</label>
                        <input
                            type='email'
                            name='user_email'
                            className='form-control'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className={`form-group ${styles.message_input}`}>
                        <label>Message</label>
                        <textarea
                            name='message'
                            className='form-control'
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <input
                        className={`btn btn-info btn-md ${styles.send_button}`}
                        id='contact-us-button'
                        type='submit'
                        value={isLoading ? 'Sending...' : 'Send'}
                        disabled={isLoading}
                    />

                    <p className="text-muted small mt-2">
                        This site is protected by reCAPTCHA and the Google{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                        </a>{' '}
                        apply.
                    </p>
                </form>
            )}
            {formSubmitted && (
                // form submitted - display thank you
                <>
                    <h1>Thank You!</h1>
                    <p>We will get back with you as soon as possible, for more immediate contact you can also call us at:</p>
                    <p>Phone: (859) 533-1684</p>
                    <p>Or stop by and say hello!</p>                    
                </>
            )}
        </>
    );
}
