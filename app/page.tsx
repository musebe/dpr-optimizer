import Link from 'next/link'; // Added missing import
import { HeroSection } from '@/components/sections/hero';
import { ImageUploadButton } from '@/components/upload-button';
import { SmartImage } from '@/components/cloudinary-image';
import { PerformanceCompare } from '@/components/performance-compare';
import { RecentUploads } from '@/components/sections/recent-uploads';
import { Badge } from '@/components/ui/badge';
import { Zap, MousePointerClick, BarChart3, ArrowDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-20 pb-20'>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. THE PROOF: Before & After Comparison */}
      <section className='container mx-auto px-4 -mt-16 relative z-10'>
        <div className='flex flex-col items-center mb-8'>
          <div className='bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 mb-4'>
            <ArrowDown size={16} /> The Difference in Pixels
          </div>
          <h2 className='text-3xl font-bold text-center italic'>
            Heavy vs. Optimized
          </h2>
        </div>

        <div className='max-w-5xl mx-auto'>
          <PerformanceCompare publicId='samples/ecommerce/accessories-bag' />
        </div>
      </section>

      {/* 3. THE TOOL: Interactive Upload */}
      <section className='container mx-auto px-4 py-10'>
        <div className='grid lg:grid-cols-3 gap-8 items-center bg-muted/30 p-8 rounded-3xl border border-dashed border-border'>
          <div className='lg:col-span-1'>
            <div className='mb-4 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20'>
              <MousePointerClick size={24} />
            </div>
            <h2 className='text-2xl font-bold mb-2'>Test Your Own Assets</h2>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Upload a high-res asset. We will move it to the
              <code className='text-primary font-mono bg-primary/10 px-1 rounded mx-1'>
                performance-demo
              </code>
              folder and apply DPR-auto logic.
            </p>
          </div>

          <div className='lg:col-span-2 flex flex-col items-center justify-center p-10 bg-background rounded-2xl border shadow-sm'>
            <ImageUploadButton />
            <p className='text-xs text-muted-foreground mt-4 italic'>
              Supports JPG, PNG, WebP, and RAW formats up to 10MB
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GALLERY */}
      <section className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4'>
          <div>
            <Badge
              variant='outline'
              className='mb-2 uppercase tracking-tighter text-[10px] px-2 py-0'
            >
              Performance Gallery
            </Badge>
            <h2 className='text-4xl font-black tracking-tight uppercase'>
              Smart Delivery
            </h2>
          </div>
          <div className='hidden md:flex gap-6 text-sm'>
            <div className='flex items-center gap-2 font-medium'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              Dynamic DPR Active
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <ProductCard
            title='Premium Chronograph'
            category='Watches'
            price='$899.00'
            publicId='samples/ecommerce/analog-classic'
          />
          <ProductCard
            title='Full-Grain Leather Tote'
            category='Accessories'
            price='$240.00'
            publicId='samples/ecommerce/accessories-bag'
          />
          <ProductCard
            title='Urban Runner Sneakers'
            category='Footwear'
            price='$125.00'
            publicId='samples/ecommerce/shoes'
          />
        </div>
      </section>

      {/* RECENT UPLOADS SECTION: Fixed unescaped entities and Link usage */}
      <section className='container mx-auto px-4 py-20 border-t'>
        <div className='mb-10 text-center'>
          <h2 className='text-3xl font-bold italic underline decoration-primary underline-offset-8'>
            Your Latest Uploads
          </h2>
          <p className='text-muted-foreground mt-4 max-w-2xl mx-auto'>
            See a few of the images you&apos;ve uploaded. Visit the
            <Link href='/gallery' className='text-primary hover:underline mx-1'>
              full gallery
            </Link>
            for detailed comparisons.
          </p>
        </div>

        <RecentUploads />
      </section>

      {/* 5. DATA SECTION */}
      <section className='bg-primary text-primary-foreground py-24 overflow-hidden relative'>
        <div className='absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4'>
          <Zap size={400} />
        </div>

        <div className='container mx-auto px-4 text-center relative z-10'>
          <BarChart3 className='mx-auto mb-6 w-16 h-16 opacity-80' />
          <h2 className='text-4xl font-bold mb-6 tracking-tight'>
            &quot;Speed is the New Currency&quot;
          </h2>
          <p className='text-primary-foreground/80 max-w-2xl mx-auto mb-12 text-lg leading-relaxed'>
            By serving the perfect number of pixels for every device, you reduce
            mobile bounce rates and significantly lower your Cloudinary
            bandwidth costs.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            <StatItem value='2.4s' label='LCP Saved' />
            <StatItem value='94%' label='Bytes Reduced' />
            <StatItem value='100' label='PageSpeed Score' />
            <StatItem value='+12%' label='Sales Lift' />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  title,
  category,
  price,
  publicId,
}: {
  title: string;
  category: string;
  price: string;
  publicId: string;
}) {
  return (
    <div className='group space-y-4'>
      <div className='relative aspect-4/5 overflow-hidden rounded-3xl bg-muted border border-border shadow-sm'>
        <SmartImage
          src={publicId}
          alt={title}
          width={800}
          height={1000}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <div className='absolute top-4 left-4'>
          <Badge className='bg-background/90 backdrop-blur-md text-foreground border-none px-3 py-1'>
            {category}
          </Badge>
        </div>
      </div>
      <div className='flex justify-between items-center px-1'>
        <div>
          <h3 className='font-bold text-xl tracking-tight group-hover:text-primary transition-colors'>
            {title}
          </h3>
          <p className='text-muted-foreground font-semibold'>{price}</p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl md:text-5xl font-black mb-1 tracking-tighter'>
        {value}
      </div>
      <div className='text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-70'>
        {label}
      </div>
    </div>
  );
}
