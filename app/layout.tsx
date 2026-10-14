import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'Gaurav Madaan — Digital Growth & Creative Services | BetaPixel',
 description:'Work with Gaurav Madaan, founder of BetaPixel, for growth strategy, paid ads, SEO, branding, websites and performance-led creative. Explore services and book a consultation.',
 openGraph:{title:'Gaurav Madaan — Make Growth Feel Effortless', description:'Creative thinking. Strategic execution. Real growth.',type:'website'}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
