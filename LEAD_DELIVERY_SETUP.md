# Lead delivery setup — Martis Camp Home Guide

The buyer inquiry form is deployed but **will not accept submissions until the email delivery configuration is complete**. The server returns HTTP 503 if the required environment variables are missing; it must never pretend a lead was sent.

## Recommended transactional email provider: Resend

1. Create a Resend account at https://resend.com and verify a sending domain you control (for example a subdomain such as mail.martiscamphomeguide.com) by adding only Resend's required DNS records at Namecheap.
2. Create a Resend API key with sending permissions. Keep it secret; **do not put it in GitHub or chat**.
3. In Vercel → martis-camp-home-guide → Settings → Environment Variables, add:
   - RESEND_API_KEY (secret key provided by Resend)
   - LEAD_NOTIFICATION_EMAIL (the inbox where Crystal wants buyer inquiries delivered)
   - LEAD_FROM_EMAIL (verified sender address on the verified domain, such as leads@mail.martiscamphomeguide.com)
4. Set each variable for production (and preview only when you deliberately want preview forms to send).
5. Redeploy after setting the variables.
6. Submit a test inquiry and verify the actual notification arrives, that replying addresses the buyer, and that errors are shown when delivery is unavailable.

## Important safeguards

- Verify Crystal's intended cell number before making the Text Crystal button public.
- Review and approve the privacy policy and brokerage/license disclosures.
- Do not add CRM credentials or API keys to the GitHub repository.
- Resend currently sends an email notification only. Lofty CRM lead ingestion requires a separately approved API or form integration and successful testing.
- A single test success does not guarantee delivery. Add spam protection, privacy retention controls, and monitoring before public launch.
- The site remains no-index and Namecheap's web DNS has not yet been pointed at Vercel.

## Form structure
Name, email, optional phone, interest, timeframe, comments, contact consent, page path and query string. The form does not sign visitors up for recurring marketing SMS.
