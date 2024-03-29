import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const comicFont = localFont({
  src: './HL-Comic6unicode.ttf',
  display: 'swap',
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
      <body className={comicFont.className}>{children}</body>
    </html>
  );
}
