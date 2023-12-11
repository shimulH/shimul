import type { Metadata } from 'next';
import { roboto_mono } from '@/app/ui/fonts';
import './globals.css';
import Header from '@/app/ui/header';

export const metadata: Metadata = {
  title: 'Shimul | Portfolio',
  description: 'Shimul is a frontend developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${roboto_mono.className} antialiased bg-slate-950 text-white bg-[url('../public/grain.png')] bg-blend-multiply`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
