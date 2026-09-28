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
  title: 'ROI Technology | We Spot What Costs Your Online Store Money',
  description:
    'ROI Technology uncovers hidden revenue leaks in Shopify and WordPress stores — then fixes them with smart AI & automation so you sell more without doing more.',
  keywords: [
    'ROI Technology',
    'Shopify Automation',
    'WordPress Store Optimization',
    'Store Health Audit',
    'E-commerce Revenue Leaks',
    'AI E-commerce Tools',
    'El-Roi',
  ],
  icons: {
    icon: [
      { url: '/logo-mark.jpg', type: 'image/jpeg' },
      { url: '/icon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/logo-mark.jpg',
    apple: '/logo-mark.jpg',
  },
  openGraph: {
    title: 'ROI Technology | We Spot What Costs Your Online Store Money',
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 min-h-screen selection:bg-amber-100 selection:text-amber-900`}
      >
        {children}
      </body>
    </html>
  );
}
