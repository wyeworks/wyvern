import './globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Header from '@repo/ui/Header';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wyvern Docs',
  description:
    'Documentation for Wyvern: a collection of components, utils and templates based on WyeWorks aesthetics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${oswald.className} bg-secondary-600`}>
        <Header title='DOCS' />
        {children}
      </body>
    </html>
  );
}
