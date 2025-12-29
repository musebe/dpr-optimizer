'use client';

import { useEffect, useState } from 'react';
import { SmartImage } from '../cloudinary-image';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface UploadedImage {
  public_id: string;
}

export function RecentUploads() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Next.js 16 optimization: cache: 'no-store' ensures fresh data after router.refresh()
    fetch('/api/images?limit=3', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <RecentUploadsSkeleton />;

  if (images.length === 0)
    return (
      <div className='flex flex-col items-center justify-center rounded-[2rem] border border-dashed p-12 text-center'>
        <div className='bg-muted p-4 rounded-full mb-4'>
          <ImageIcon className='text-muted-foreground w-8 h-8' />
        </div>
        <p className='text-muted-foreground font-medium'>
          No recent uploads yet. Start by uploading an asset above!
        </p>
      </div>
    );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
      {images.map((img: UploadedImage) => (
        <Link href='/gallery' key={img.public_id} className='group block'>
          <div className='aspect-4/5 overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5'>
            <SmartImage
              src={img.public_id}
              alt='Uploaded Asset'
              width={600}
              height={750}
              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
          </div>
          <div className='mt-4 flex items-center justify-between px-2'>
            <h3 className='text-sm font-bold truncate flex-1 pr-2 uppercase tracking-tight'>
              {img.public_id.split('/').pop()}
            </h3>
            <div className='bg-primary/10 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
              <ArrowRight className='w-3.5 h-3.5 text-primary' />
            </div>
          </div>
        </Link>
      ))}
      <div className='col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center pt-8'>
        <Link href='/gallery'>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full px-8 border-2 hover:bg-primary hover:text-white transition-all'
          >
            Enter Full Gallery <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function RecentUploadsSkeleton() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {[1, 2, 3].map((i) => (
        <div key={i} className='space-y-4'>
          <Skeleton className='aspect-4/5 w-full rounded-[2rem]' />
          <div className='flex justify-between items-center px-2'>
            <Skeleton className='h-4 w-1/2' />
            <Skeleton className='h-4 w-4 rounded-full' />
          </div>
        </div>
      ))}
    </div>
  );
}
