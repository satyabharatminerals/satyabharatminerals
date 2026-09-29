import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/site-data';
import { getSeoAlternates } from '@/lib/seo-helpers';

export function generateMetadata(): Metadata {
    return {
        title: 'Manufacturing Plant and Lime Kilns Gallery | Satya Bharat Minerals',
        description: 'View photos of Satya Bharat Minerals vertical shaft kilns, quick lime calcination facility, hydrated lime plant, and packaging operations in Nagaur, Rajasthan.',
        alternates: getSeoAlternates('/gallery'),
    };
}

interface GalleryItem {
    src: string;
    title: string;
    alt: string;
}

export default async function GalleryPage() {
    // Read the images from the public/images/gallery directory
    const galleryDir = path.join(process.cwd(), 'public/images/gallery');
    
    let images: GalleryItem[] = [];
    try {
        if (fs.existsSync(galleryDir)) {
            const files = fs.readdirSync(galleryDir);
            images = files
                .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
                .map((file) => {
                    const nameWithoutExt = path.parse(file).name;
                    const title = nameWithoutExt
                        .split('-')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    return {
                        src: `/images/gallery/${file}`,
                        title,
                        alt: `${title} - Satya Bharat Minerals`,
                    };
                });
        }
    } catch (e) {
        console.error("Could not read gallery directory", e);
    }

    return (
        <>
            {/* Hero - Dark blue matching other pages */}
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
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="group relative mb-6 overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl border border-border bg-card"
                                >
                                    <div className="relative w-full">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={600}
                                            height={800}
                                            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                                        <p className="text-white text-sm font-medium tracking-wide drop-shadow-sm">
                                            {img.title}
                                        </p>
                                    </div>
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
            {/* Our Products - Internal Linking Section */}
            <section className="py-16 lg:py-20 bg-muted/40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                            Our Lime and Mineral Products
                        </h2>
                        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                            The products you see manufactured in our gallery — available for bulk supply across India.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{product.name}</p>
                                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.tagline}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                            View All Products
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
