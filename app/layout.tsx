import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/ui/header';

const inter = Inter({ subsets: ['latin'] });

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
        className={`${inter.className} bg-orange-50 bg-[url('../public/grain.png')] bg-blend-multiply`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
