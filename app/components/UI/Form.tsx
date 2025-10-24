import emailjs from "@emailjs/browser";
import styles from "../../styles/form.module.css";
import React, { useState, useRef } from "react";

// TypeScript declaration for the global grecaptcha object
declare global {
	interface Window {
		grecaptcha: {
			ready: (callback: () => void) => void;
			execute: (
				siteKey: string,
				options: { action: string }
			) => Promise<string>;
		};
	}
}

// https://dev.to/ivanms1/protecting-your-api-keys-with-next-js-21ej

export default function Form() {
	const form = useRef<HTMLFormElement | null>(null);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setIsLoading(true);
		setErrorMessage(null);

		try {
			// Capture form data from the event target
			const formElement = e.currentTarget;

			// Check each form field directly
			const nameField = formElement.querySelector('input[name="user_name"]') as HTMLInputElement;
			const emailField = formElement.querySelector('input[name="user_email"]') as HTMLInputElement;
			const messageField = formElement.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

			// Check if reCAPTCHA is available
			if (!window.grecaptcha) {
				setErrorMessage(
					"reCAPTCHA is not available. Please try again later."
				);
				setIsLoading(false);
				return;
			}

			// Execute reCAPTCHA and get token
			await new Promise<void>((resolve) => {
				window.grecaptcha.ready(() => {
					resolve();
				});
			});

			const recaptchaToken = await window.grecaptcha.execute(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
				{ action: "contact_form" }
			);

			// Send email with template parameters
			const templateParams = {
				user_name: nameField?.value || '',
				user_email: emailField?.value || '',
				message: messageField?.value || '',
				reply_to: emailField?.value || '',
				recaptcha_token: recaptchaToken
			};

			const response = await emailjs.send(
				process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			setFormSubmitted(true);
		} catch (error) {
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
					id='contact-us-form'
				>
					<h1 className={styles.card_title}>Contact Us</h1>

					{errorMessage && (
						<div
							className='alert alert-danger'
							role='alert'
						>
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

					{/* Hidden field for reCAPTCHA token */}
					<input
						type="hidden"
						name="recaptcha_token"
						value=""
					/>

					<input
						className={`btn btn-info btn-md ${styles.send_button}`}
						id='contact-us-button'
						type='submit'
						value={isLoading ? "Sending..." : "Send"}
						disabled={isLoading}
					/>

					<p className='text-muted small mt-2'>
						This site is protected by reCAPTCHA and the Google{" "}
						<a
							href='https://policies.google.com/privacy'
							target='_blank'
							rel='noopener noreferrer'
						>
							Privacy Policy
						</a>{" "}
						and{" "}
						<a
							href='https://policies.google.com/terms'
							target='_blank'
							rel='noopener noreferrer'
						>
							Terms of Service
						</a>{" "}
						apply.
					</p>
				</form>
			)}
			{formSubmitted && (
				// form submitted - display thank you
				<>
					<h1>Thank You!</h1>
					<p>
						We will get back with you as soon as possible, for more
						immediate contact you can also call us at:
					</p>
					<p>Phone: (859) 533-1684</p>
					<p>Or stop by and say hello!</p>
				</>
			)}
		</>
	);
}
