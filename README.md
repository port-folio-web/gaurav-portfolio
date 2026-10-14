# Gaurav Madaan — One-Page Services Website

A fresh, cream/lavender, responsive services-focused landing page for Gaurav Madaan, founder of BetaPixel. The site features a React Three Fiber hero sculpture, scroll-triggered motion, eight sourced service categories, and a booking enquiry modal.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production check
```bash
npm run build
npm start
```

## Booking behavior
All **Book** buttons open a pre-filled service enquiry form. Submitting uses `mailto:info@betapixel.in` with the supplied information. It **does not automatically schedule or confirm** an appointment; connect a calendar booking endpoint or your preferred CRM before advertising instant booking.

## Editing services
The `services` array in `app/page.tsx` controls titles, descriptions, features and accents. The service categories follow BetaPixel's published services page: https://betapixel.in/our-services/

## Important
- Two user-supplied photos are in `public/images/`.
- The hero uses WebGL with a dynamic import, and is decorative; service information works without 3D.
- Animations respect `prefers-reduced-motion`.
- No fabricated reviews, metrics or client logos are included.
- For launch, consider self-hosting fonts, image optimization and connecting a direct booking calendar.
