'use client';

import { CldImage } from 'next-cloudinary';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: SmartImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      {isLoading && (
        <Skeleton className='absolute inset-0 z-10 h-full w-full' />
      )}

      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        // KEY CLOUDINARY FEATURES:
        dpr='auto' // Detects user's screen density automatically
        format='auto' // Delivers AVIF/WebP based on browser support
        quality='auto' // Balances visual quality vs file size
        crop='fill' // Smart cropping to the dimensions provided
        onLoad={() => setIsLoading(false)}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'
        )}
      />
    </div>
  );
}
