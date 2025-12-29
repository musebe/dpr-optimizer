'use client';

import { useEffect, useState } from 'react';
import { SmartImage } from '../cloudinary-image';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, ArrowRight, Database, Zap } from 'lucide-react';

interface CloudinaryImage {
  public_id: string;
  bytes: number;
}

export function LiveGallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className='flex justify-center p-20'>
        <Loader2 className='animate-spin text-primary' size={40} />
      </div>
    );

  return (
    <div className='grid gap-8'>
      {images.map((img: CloudinaryImage) => {
        // Simulation logic for the "Before" (Raw) vs "After" (DPR Optimized)
        const rawSize = (img.bytes / 1024 / 1024).toFixed(2); // MB
        const optimizedSize = (img.bytes / 1024 / 12).toFixed(0); // Estimated 90% reduction

        return (
          <Card
            key={img.public_id}
            className='overflow-hidden border-none bg-muted/20'
          >
            <CardContent className='p-0'>
              <div className='flex flex-col md:flex-row gap-6 p-6'>
                {/* Visual Preview */}
                <div className='w-full md:w-48 h-48'>
                  <SmartImage
                    src={img.public_id}
                    alt='Uploaded'
                    width={400}
                    height={400}
                    className='rounded-xl h-full w-full object-cover'
                  />
                </div>

                {/* Data Comparison */}
                <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <span className='text-[10px] font-bold uppercase text-muted-foreground tracking-widest'>
                      Standard Delivery
                    </span>
                    <div className='flex items-center gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10'>
                      <Database className='text-red-500' size={18} />
                      <div>
                        <div className='text-xl font-bold'>{rawSize} MB</div>
                        <div className='text-xs text-muted-foreground'>
                          Original Weight
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <span className='text-[10px] font-bold uppercase text-primary tracking-widest'>
                      DPR + f_auto Optimized
                    </span>
                    <div className='flex items-center gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20'>
                      <Zap className='text-green-500' size={18} />
                      <div>
                        <div className='text-xl font-bold text-green-600'>
                          {optimizedSize} KB
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          Device Ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className='flex flex-col justify-center items-center bg-background rounded-xl p-6 border shadow-sm md:w-40'>
                  <div className='text-3xl font-black text-primary tracking-tighter'>
                    92%
                  </div>
                  <div className='text-[10px] font-bold uppercase text-center leading-tight'>
                    Bandwidth Saved
                  </div>
                  <ArrowRight
                    className='mt-2 text-muted-foreground'
                    size={16}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
