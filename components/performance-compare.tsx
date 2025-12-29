'use client';

import { useState } from 'react';
import { SmartImage } from './cloudinary-image';
import { CldImage } from 'next-cloudinary';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Zap, AlertCircle } from 'lucide-react';

export function PerformanceCompare({ publicId }: { publicId: string }) {
  const [view, setView] = useState<'smart' | 'unoptimized'>('smart');

  return (
    <div className='group relative bg-card rounded-[2.5rem] border border-border p-3 md:p-6 shadow-2xl transition-all hover:shadow-primary/5'>
      {/* Header Area */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-2'>
        <div className='flex items-center gap-3'>
          <div className='bg-primary/10 p-2 rounded-xl'>
            <Zap className='w-5 h-5 text-primary fill-primary/20' />
          </div>
          <div>
            <h3 className='font-bold text-lg tracking-tight'>
              Real-time Optimization
            </h3>
            <p className='text-xs text-muted-foreground'>
              Comparing raw bytes vs smart delivery
            </p>
          </div>
        </div>

        <Tabs
          value={view}
          onValueChange={(v) => setView(v as 'smart' | 'unoptimized')}
          className='bg-muted/50 p-1 rounded-full'
        >
          <TabsList className='bg-transparent h-9'>
            <TabsTrigger
              value='unoptimized'
              className='rounded-full px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm'
            >
              Legacy
            </TabsTrigger>
            <TabsTrigger
              value='smart'
              className='rounded-full px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm text-primary'
            >
              DPR Smart
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className='grid lg:grid-cols-12 gap-8 items-center'>
        {/* IMAGE SIDE - Now with 4/5 Aspect Ratio and rounded corners */}
        <div className='lg:col-span-7 relative'>
          <div className='aspect-4/5 rounded-[2rem] overflow-hidden border border-border/50 shadow-inner bg-muted'>
            {view === 'unoptimized' ? (
              <CldImage
                src={publicId}
                width='2800'
                height='3500'
                alt='Heavy asset'
                crop='fill'
                className='object-cover w-full h-full grayscale-50 brightness-90 transition-all duration-700'
              />
            ) : (
              <SmartImage
                src={publicId}
                width={1200}
                height={1500}
                alt='Optimized asset'
                className='w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500'
              />
            )}

            {/* Dynamic Badge Overlay */}
            <div className='absolute bottom-6 left-6 right-6 flex justify-between items-center'>
              <Badge className='bg-background/80 backdrop-blur-xl text-foreground border-none px-4 py-1.5 rounded-full shadow-lg'>
                {view === 'smart'
                  ? 'DPR: Auto + AVIF'
                  : 'DPR: 1.0 (Fixed) + JPEG'}
              </Badge>
            </div>
          </div>
        </div>

        {/* STATS SIDE - Optimized for Mobile Reading */}
        <div className='lg:col-span-5 space-y-8 px-2'>
          <div className='space-y-2'>
            <div className='text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground'>
              Estimated Payload
            </div>
            <div className='flex items-baseline gap-3'>
              <span
                className={`text-6xl font-black tabular-nums tracking-tighter ${
                  view === 'smart' ? 'text-primary' : 'text-destructive'
                }`}
              >
                {view === 'smart' ? '142' : '2.8'}
              </span>
              <span className='text-2xl font-bold text-muted-foreground'>
                {view === 'smart' ? 'KB' : 'MB'}
              </span>
            </div>
          </div>

          <div
            className={`p-6 rounded-3xl border transition-colors ${
              view === 'smart'
                ? 'bg-primary/5 border-primary/20'
                : 'bg-destructive/5 border-destructive/20'
            }`}
          >
            <div className='flex items-start gap-4'>
              {view === 'smart' ? (
                <Zap className='text-primary mt-1 shrink-0' size={20} />
              ) : (
                <AlertCircle
                  className='text-destructive mt-1 shrink-0'
                  size={20}
                />
              )}
              <div>
                <p className='font-bold text-sm mb-1'>
                  {view === 'smart'
                    ? 'Adaptive Precision'
                    : 'Oversized Delivery'}
                </p>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {view === 'smart'
                    ? 'Next.js 16 identifies the hardware profile to serve only the necessary pixels. Performance score: 100/100.'
                    : 'Forcing desktop-sized assets to mobile devices causes layout shifts and high bounce rates.'}
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 pt-4 border-t'>
            <div>
              <p className='text-[10px] font-bold uppercase text-muted-foreground mb-1'>
                Format
              </p>
              <p className='text-sm font-semibold'>
                {view === 'smart' ? 'AVIF / WebP' : 'Legacy JPG'}
              </p>
            </div>
            <div>
              <p className='text-[10px] font-bold uppercase text-muted-foreground mb-1'>
                Quality
              </p>
              <p className='text-sm font-semibold italic'>
                {view === 'smart' ? 'q_auto:best' : 'Fixed 100%'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
