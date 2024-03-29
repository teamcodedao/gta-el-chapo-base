import type {Metadata} from 'next';
import clsx from 'clsx';
import localFont from 'next/font/local';
import './globals.css';

const comicFont = localFont({
  src: './HL-Comic6unicode.ttf',
  display: 'swap',
});

const pricedownFont = localFont({
  src: './pricedown_bl.otf',
  display: 'swap',
  variable: '--font-pricedown',
});

export const metadata: Metadata = {
  title: 'GTA AL-CHAPO',
  description: 'GTA AL-CHAPO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(comicFont.className, pricedownFont.variable)}>
        {children}
      </body>
    </html>
  );
}
