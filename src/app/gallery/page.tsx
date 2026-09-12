import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getSeoAlternates } from '@/lib/seo-helpers';

export function generateMetadata(): Metadata {
    return {
        title: 'Gallery | Satya Bharat Minerals',
        description: 'Explore the gallery of Satya Bharat Minerals to see our facilities, products, and operations.',
        alternates: getSeoAlternates('/gallery'),
    };
}

export default async function GalleryPage() {
    // Read the images from the public/images/gallery directory
    const galleryDir = path.join(process.cwd(), 'public/images/gallery');
    
    let images: string[] = [];
    try {
        if (fs.existsSync(galleryDir)) {
            const files = fs.readdirSync(galleryDir);
            images = files
                .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
                .map((file) => `/images/gallery/${file}`);
        }
    } catch (e) {
        console.error("Could not read gallery directory", e);
    }

    return (
        <>
            {/* Hero — Dark blue matching other pages */}
            <section className="relative overflow-hidden bg-[#001F41] py-20 lg:py-28">
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute top-10 right-0 h-48 w-48 rounded-full bg-[#197FD1]/10 blur-2xl" />
                <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#197FD1]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Our Gallery
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Moments at SBM
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            Take a glimpse into our facilities, products, and operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {images.length > 0 ? (
                        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-6">
                            {images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className="group relative mb-6 overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl border border-border"
                                >
                                    <div className="relative w-full">
                                        <Image
                                            src={imgSrc}
                                            alt={`Satya Bharat Minerals Gallery Image ${index + 1}`}
                                            width={600}
                                            height={800}
                                            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">No images available in the gallery.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
