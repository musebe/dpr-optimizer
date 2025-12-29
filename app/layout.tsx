// app/layout.tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

export const metadata = {
  title: 'DPR Optimizer | Next.js 16 & Cloudinary',
  description: 'Boost conversion by delivering the perfect amount of pixels.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased'>
      <body className='min-h-screen bg-background flex flex-col'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
