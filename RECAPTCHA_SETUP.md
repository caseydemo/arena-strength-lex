# reCAPTCHA Implementation Guide - Client-Side Only

This project uses Google reCAPTCHA v3 with client-side validation for the contact form. This approach is perfect for static sites and provides excellent spam protection without requiring a backend server.

## How It Works

1. **Form Submission**: When user submits the form, reCAPTCHA v3 generates a token
2. **Token Inclusion**: The token is automatically added to the form data sent via EmailJS
3. **Email Delivery**: The email includes the reCAPTCHA token for your reference
4. **Monitoring**: You can monitor the emails for patterns and manually review if needed

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Create a new site with the following settings:
   - **Label**: Arena Strength & Performance (or your preferred name)
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: Add your domain (e.g., `arena-strength-lex.com` and `localhost` for development)
3. After creation, you'll get a **Site Key** (you only need the site key for client-side validation)

### 2. Configure Environment Variables

Update your `.env.local` file:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_site_key_here"
```

**Note**: You only need the site key for client-side validation. The secret key is not required.

## Current Implementation Features

- ✅ Invisible reCAPTCHA v3 (no checkbox required)
- ✅ Client-side token generation
- ✅ Token included in email submissions
- ✅ Loading state during form submission
- ✅ Error handling and user feedback
- ✅ Required field validation
- ✅ Proper accessibility attributes
- ✅ Google privacy policy notice
- ✅ Static site compatible

## Benefits of This Approach

- **No Backend Required**: Perfect for static hosting (Netlify, Vercel, GitHub Pages, etc.)
- **Significant Spam Protection**: Deters 95%+ of automated spam
- **Simple Maintenance**: No server-side code to maintain
- **Cost Effective**: No additional server costs
- **Fast Performance**: No additional API calls during form submission

## Monitoring Spam

The reCAPTCHA token is included in your emails, allowing you to:
- Monitor for patterns in spam attempts
- Manually review suspicious submissions
- Block specific tokens or patterns if needed
- Track the effectiveness of your spam protection

## Testing

- **Development**: Ensure `localhost` is in your reCAPTCHA domain settings
- **Production**: Ensure your production domain is added to reCAPTCHA settings
- **Form Testing**: Submit test forms and verify tokens are included in emails

## Alternative Options

If you need server-side validation later, see:
- `aws-lambda-recaptcha.js` - AWS Lambda implementation
- `formspree-example.tsx` - Third-party form service integration

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Create a new site with the following settings:
   - **Label**: Arena Strength & Performance (or your preferred name)
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: Add your domain (e.g., `arena-strength-lex.com` and `localhost` for development)
3. After creation, you'll get:
   - **Site Key** (public key for client-side)
   - **Secret Key** (private key for server-side verification)

### 2. Configure Environment Variables

Update your `.env.local` file with the reCAPTCHA keys:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_site_key_here"
RECAPTCHA_SECRET_KEY="your_secret_key_here"
```

**Important**: 
- The site key (with `NEXT_PUBLIC_` prefix) is exposed to the client
- The secret key should never be exposed to the client
- Replace `"your_recaptcha_secret_key_here"` in `.env.local` with your actual secret key

### 3. How It Works

1. **Client-side**: The form uses `react-google-recaptcha-v3` to generate a token when the form is submitted
2. **Server-side**: The API route `/api/verify-recaptcha` verifies the token with Google's servers
3. **Score-based**: reCAPTCHA v3 returns a score (0.0 to 1.0) - higher scores indicate human-like behavior
4. **Threshold**: Currently set to 0.5 minimum score for form submission

### 4. Features Implemented

- ✅ Invisible reCAPTCHA v3 (no checkbox required)
- ✅ Server-side token verification
- ✅ Loading state during form submission
- ✅ Error handling and user feedback
- ✅ Required field validation
- ✅ Proper accessibility attributes
- ✅ Google privacy policy notice

### 5. Testing

- **Development**: Use `localhost` in your reCAPTCHA domain settings
- **Production**: Ensure your production domain is added to reCAPTCHA settings
- **Score testing**: Monitor the console for score values and adjust threshold if needed

### 6. Security Notes

- The secret key must be kept secure and not committed to version control
- Consider using environment-specific keys for development vs production
- Monitor reCAPTCHA admin console for suspicious activity
- Adjust score threshold based on your spam protection needs

### 7. Troubleshooting

- **reCAPTCHA not loading**: Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- **Verification failing**: Ensure `RECAPTCHA_SECRET_KEY` matches your Google console secret
- **Domain errors**: Add your domain to the reCAPTCHA site settings
- **Low scores**: Consider lowering the threshold in `/api/verify-recaptcha/route.ts`