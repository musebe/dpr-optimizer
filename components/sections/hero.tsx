import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SmartImage } from '@/components/cloudinary-image';
import { ArrowRight, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className='container mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center'>
      <div className='space-y-8'>
        <Badge variant='secondary' className='px-3 py-1 gap-2'>
          <Zap className='w-3 h-3 fill-primary text-primary' />
          <span>Next.js 16 + Cloudinary Optimized</span>
        </Badge>

        <h1 className='text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none'>
          Stop Losing Sales to{' '}
          <span className='text-primary'>Heavy Images.</span>
        </h1>

        <p className='text-xl text-muted-foreground max-w-150'>
          Deliver razor-sharp visuals tailored to every device. Boost your page
          speed by up to 60% with automated Device Pixel Ratio (DPR) delivery.
        </p>

        <div className='flex flex-col sm:flex-row gap-4'>
          <Button size='lg' className='h-12 px-8 text-md font-semibold'>
            Try the Demo <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
          <Button size='lg' variant='outline' className='h-12 px-8 text-md'>
            View Documentation
          </Button>
        </div>
      </div>

      <div className='relative group'>
        {/* Our optimized Cloudinary asset */}
        <SmartImage
          src='samples/ecommerce/accessories-bag'
          alt='Premium Leather Bag'
          width={800}
          height={1000}
          className='rounded-3xl shadow-2xl border border-border'
          priority
        />

        {/* Floating Performance Metric Card (Shadcn-style) */}
        <div className='absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border hidden md:block'>
          <div className='flex flex-col gap-1'>
            <span className='text-sm text-muted-foreground font-medium'>
              LCP Improvement
            </span>
            <span className='text-3xl font-bold text-green-500'>+42%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
