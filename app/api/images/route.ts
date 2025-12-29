// app/api/images/route.ts
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10'); // Default to 10 if no limit provided

    try {
        const results = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'performance-demo/',
            max_results: limit, // Use the dynamic limit
            // New: sort by creation date to get latest uploads
            sort_by: [
                { field: 'created_at', direction: 'desc' }
            ]
        });

        return NextResponse.json(results.resources);
    } catch (error) {
        console.error('Cloudinary API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}