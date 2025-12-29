// components/layout/header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link
          href='/'
          className='flex items-center gap-2 font-bold text-xl tracking-tight'
        >
          <Zap className='fill-primary text-primary' />
          <span>OptiFlow</span>
        </Link>

        <nav className='hidden md:flex gap-8 text-sm font-medium text-muted-foreground'>
          <Link href='#' className='hover:text-primary transition-colors'>
            Performance
          </Link>
          <Link
            href='/gallery'
            className='hover:text-primary transition-colors'
          >
            Gallery
          </Link>{' '}
          {/* NEW LINK */}
          <Link href='#' className='hover:text-primary transition-colors'>
            Docs
          </Link>
        </nav>

        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm'>
            Log in
          </Button>
          <Button size='sm' className='bg-primary hover:opacity-90'>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
