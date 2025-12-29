import { LiveGallery } from '@/components/sections/live-gallery';
import { Metadata } from 'next';
import { ArrowLeft, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | Optimized Image Delivery',
  description: 'View all images optimized via Cloudinary DPR and Next.js 16.',
};

export default function GalleryPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 max-w-7xl'>
        {/* Breadcrumb / Back button */}
        <Link
          href='/'
          className='inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary mb-10 transition-colors group'
        >
          <ArrowLeft className='w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1' />
          Back to Optimizer
        </Link>

        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-20'>
          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-4 border border-primary/10 uppercase tracking-tighter'>
              <LayoutGrid size={14} /> Cloudinary Smart Assets
            </div>
            <h1 className='text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]'>
              Your Optimized <br className='hidden md:block' /> Assets
            </h1>
            <p className='text-base md:text-xl text-muted-foreground leading-relaxed font-medium'>
              Browsing images in the{' '}
              <code className='bg-muted text-foreground px-2 py-1 rounded-md font-mono text-sm border border-border'>
                performance-demo
              </code>{' '}
              folder. All images are served using{' '}
              <span className='text-foreground font-bold italic underline decoration-primary underline-offset-4'>
                dpr_auto
              </span>{' '}
              logic.
            </p>
          </div>

          <div className='hidden lg:block bg-muted/30 p-4 rounded-2xl border border-border text-xs font-mono'>
            <span className='text-muted-foreground block mb-1 uppercase'>
              Active Engine:
            </span>
            <span className='text-primary font-bold'>
              Cloudinary v2 + Next.js 16
            </span>
          </div>
        </div>

        {/* Live Gallery with internal skeletons */}
        <LiveGallery />
      </div>
    </div>
  );
}
