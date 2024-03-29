import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Syncopate, Raleway } from 'next/font/google';

export const metadata = {
  title: '3 Mason',
  description: 'Generated by create next app',
};

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-syncopate',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: '200',
  variable: '--font-raleway',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syncopate.variable} ${raleway.variable} font-sans bg-black`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
