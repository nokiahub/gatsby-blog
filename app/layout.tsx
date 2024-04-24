import './globals.css';
import React, { ReactNode } from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export const metadata = {
  title: '형주의 블로그',
  description: 'Generated by Next.js'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={'mt-[52px] p-2 pt-1 pb-3'}>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
