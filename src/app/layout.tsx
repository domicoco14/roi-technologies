import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roitechnology.com'),
  title: 'ROI Technology | We See What Costs Your Store Money',
  description:
    'ROI Technology finds hidden profit leaks in online Shopify and WordPress stores — then fixes them with smart AI & automation. Get your free store check today.',
  keywords: [
    'ROI Technology',
    'Shopify Automation',
    'WordPress Store Optimization',
    'Store Health Check',
    'E-commerce Profit Leaks',
    'AI E-commerce Tools',
    'El-Roi',
  ],
  openGraph: {
    title: 'ROI Technology | We See What Costs Your Store Money',
    description:
      'ROI finds the hidden problems in your online store — then fixes them with smart automation, so you sell more without doing more.',
    images: ['/logo-full.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08090E] text-gray-100 min-h-screen selection:bg-amber-400 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
