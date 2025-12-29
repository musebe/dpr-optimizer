'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function ImageUploadButton() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onOpen={() => setIsUploading(true)}
      onSuccess={() => {
        setIsUploading(false);
        setIsSuccess(true);
        toast.success('Optimization Complete!');

        // NEXT.JS 16 REFRESH: Updates server data without page reload
        router.refresh();

        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      }}
      options={{
        sources: ['local', 'url'],
        multiple: false,
        cropping: true,
        showSkipCropButton: false,
        croppingAspectRatio: 0.8, // Match our 4/5 design
        clientAllowedFormats: ['jpg', 'png', 'webp', 'heic'],
        styles: {
          palette: {
            window: '#FFFFFF',
            sourceBg: '#F4F4F5',
            windowBorder: '#E4E4E7',
            tabIcon: '#000000',
            inactiveTabIcon: '#71717A',
            menuIcons: '#18181B',
            link: '#000000',
            action: '#000000',
            inProgress: '#000000',
            complete: '#10B981',
            error: '#EF4444',
            textDark: '#000000',
            textLight: '#FFFFFF',
          },
          fonts: {
            default: null,
            "'Geist', sans-serif": {
              url: 'https://fonts.googleapis.com/css2?family=Geist',
              active: true,
            },
          },
        },
      }}
    >
      {({ open }) => {
        return (
          <Button
            onClick={() => open()}
            disabled={isUploading}
            size='lg'
            className='relative h-14 px-8 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-xl shadow-primary/20 group overflow-hidden'
          >
            <div className='flex items-center gap-3'>
              {isUploading ? (
                <Loader2 className='w-5 h-5 animate-spin' />
              ) : isSuccess ? (
                <CheckCircle2 className='w-5 h-5 text-green-400' />
              ) : (
                <Upload className='w-5 h-5 group-hover:-translate-y-1 transition-transform' />
              )}

              <span className='font-bold tracking-tight'>
                {isUploading
                  ? 'Processing Pixels...'
                  : isSuccess
                  ? 'Asset Optimized'
                  : 'Upload High-Res Asset'}
              </span>
            </div>

            {/* Subtle glow effect */}
            <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}
