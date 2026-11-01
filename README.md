# AI Marketing Expert portfolio

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to create and validate the production build, then `npm start` to serve it.

## Replace personal details

Update `lib/site-config.ts` to replace `[Your Name]`, `[Business Name]`, contact details, social links, and `[Calendar Booking URL]`. The calendar URL must begin with `https://` for all consultation buttons to direct to it; until then, they safely point to the booking area on the contact page.

Replace the `[Professional Headshot]` placeholder in `app/about/page.tsx` with an optimized local image using `next/image` and meaningful alt text. Update `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the final production domain.

## Contact form delivery

The form validates on the client and uses a honeypot. It posts to `/api/contact`, which delivers valid enquiries to `binamthapa988@gmail.com` through FormSubmit. On the first real form submission, FormSubmit sends an activation email to that inbox. Open the email and confirm the form once; future enquiries will then be delivered to the inbox and the visitor's email becomes the reply-to address.

To switch providers later, set `CONTACT_FORM_ENDPOINT` in `.env.local` to an HTTPS endpoint that accepts a JSON POST body.

## Blog content

Posts are CMS-ready content objects in `lib/posts.ts`. Add a post object there to create a new listing and article page; static routes are generated at build time.
