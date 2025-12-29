export function Footer() {
  return (
    <footer className='border-t border-border bg-muted/30 py-12'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='col-span-1 md:col-span-2'>
          <h3 className='font-bold text-lg mb-4'>OptiFlow × Cloudinary</h3>
          <p className='text-muted-foreground max-w-xs'>
            Solving the &quot;Heavy Image&quot; crisis with automated DPR optimization and
            Next.js 16.
          </p>
        </div>
        <div className='flex flex-col gap-2 text-sm'>
          <span className='font-semibold mb-2'>Platform</span>
          <a href='#' className='hover:underline'>
            Next.js 16
          </a>
          <a href='#' className='hover:underline'>
            Cloudinary
          </a>
          <a href='#' className='hover:underline'>
            Shadcn UI
          </a>
        </div>
        <div className='flex flex-col gap-2 text-sm text-muted-foreground'>
          <span>&copy; {new Date().getFullYear()} Image Optimizer Inc.</span>
        </div>
      </div>
    </footer>
  );
}
