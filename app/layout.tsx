import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Grupo Tesseract',
  description: 'Site Grupo Tesseract',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <div>
            <Header />
            <main>{children}</main>
          </div>
          <div className="min-w-full pt-72">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
