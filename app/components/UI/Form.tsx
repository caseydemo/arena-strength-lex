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
	const [formStartTime] = useState<number>(Date.now()); // Track when form was loaded

	// Anti-spam validation function
	function validateFormForSpam(formElement: HTMLFormElement): { isSpam: boolean; reason?: string } {
		// Check honeypot fields
		const website = (formElement.querySelector('input[name="website"]') as HTMLInputElement)?.value;
		const phone = (formElement.querySelector('input[name="phone"]') as HTMLInputElement)?.value;
		const company = (formElement.querySelector('input[name="company"]') as HTMLInputElement)?.value;
		
		if (website || phone || company) {
			return { isSpam: true, reason: "Honeypot field filled" };
		}

		// Check form submission speed (too fast = likely spam)
		const submissionTime = Date.now() - formStartTime;
		if (submissionTime < 3000) { // Less than 3 seconds
			return { isSpam: true, reason: "Form submitted too quickly" };
		}

		// Check for common spam content patterns
		const nameField = formElement.querySelector('input[name="user_name"]') as HTMLInputElement;
		const emailField = formElement.querySelector('input[name="user_email"]') as HTMLInputElement;
		const messageField = formElement.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

		const name = nameField?.value?.toLowerCase() || '';
		const email = emailField?.value?.toLowerCase() || '';
		const message = messageField?.value?.toLowerCase() || '';

		// Check for spam keywords
		const spamKeywords = [
			'seo', 'marketing', 'promotion', 'website design', 'web design',
			'increase sales', 'boost ranking', 'google ranking', 'traffic',
			'backlinks', 'link building', 'digital marketing', 'social media marketing',
			'crypto', 'bitcoin', 'investment', 'loan', 'mortgage', 'insurance',
			'viagra', 'cialis', 'pharmacy', 'pills', 'medication',
			'casino', 'gambling', 'poker', 'slots',
			'get rich', 'make money', 'work from home', 'earn money online'
		];

		const fullText = `${name} ${email} ${message}`;
		const foundSpamKeywords = spamKeywords.filter(keyword => fullText.includes(keyword));
		
		if (foundSpamKeywords.length > 0) {
			return { isSpam: true, reason: `Spam keywords detected: ${foundSpamKeywords.join(', ')}` };
		}

		// Check for excessive links
		const urlPattern = /(https?:\/\/[^\s]+)/g;
		const urls = message.match(urlPattern);
		if (urls && urls.length > 2) {
			return { isSpam: true, reason: "Too many URLs in message" };
		}

		// Check for suspicious email patterns
		const suspiciousEmailDomains = [
			'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
			'throwaway', 'temp-mail', 'disposable'
		];
		
		const emailDomain = email.split('@')[1];
		if (emailDomain && suspiciousEmailDomains.some(domain => emailDomain.includes(domain))) {
			return { isSpam: true, reason: "Suspicious email domain" };
		}

		// Check message length (too short often indicates spam)
		if (message.length < 10) {
			return { isSpam: true, reason: "Message too short" };
		}

		// Check for repeated characters or excessive caps
		if (/(.)\1{4,}/.test(message) || message.toUpperCase() === message && message.length > 20) {
			return { isSpam: true, reason: "Suspicious text patterns" };
		}

		return { isSpam: false };
	}

	async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setIsLoading(true);
		setErrorMessage(null);

		try {
			// Capture form data from the event target
			const formElement = e.currentTarget;

			// Anti-spam validation
			const spamCheck = validateFormForSpam(formElement);
			if (spamCheck.isSpam) {
				// Log spam attempt for monitoring (you can remove this in production)
				console.warn('Spam attempt blocked:', spamCheck.reason);
				
				// Show generic error to user (don't reveal why it was blocked)
				setErrorMessage("There was an issue with your submission. Please try again later.");
				setIsLoading(false);
				return;
			}

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
				recaptcha_token: recaptchaToken,
				submission_time: new Date().toISOString(),
				form_load_duration: Math.round((Date.now() - formStartTime) / 1000) + 's'
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

					{/* Honeypot fields - hidden from real users but visible to spam bots */}
					<div className={styles.honeypot}>
						<label>Website (leave blank)</label>
						<input
							type="text"
							name="website"
							tabIndex={-1}
							autoComplete="off"
							className={styles.honeypot}
						/>
						<label>Phone (do not fill)</label>
						<input
							type="text"
							name="phone"
							tabIndex={-1}
							autoComplete="off"
							className={styles.honeypot}
						/>
						<label>Company (skip this field)</label>
						<input
							type="text"
							name="company"
							tabIndex={-1}
							autoComplete="off"
							className={styles.honeypot}
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
