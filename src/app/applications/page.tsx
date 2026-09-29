import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, Wind, Construction, Building2, Droplets, FlaskConical, Mountain, FileText, GlassWater } from 'lucide-react';
import { industrialApplications } from '@/lib/site-data';

import { getSeoAlternates } from '@/lib/seo-helpers';

export function generateMetadata(): Metadata {
  return {
    title: 'Industrial Applications of Quick Lime and Hydrated Lime | Satya Bharat Minerals',
    description: 'Quick Lime and Hydrated Lime are essential across steel making, road construction, water treatment, flue gas desulfurization, chemical processes, glass, paper, and mining industries.',
    alternates: getSeoAlternates('/applications'),
  };
}

const iconMap: Record<string, typeof Factory> = {
    Factory,
    Wind,
    Construction,
    Building2,
    Droplets,
    FlaskConical,
    Mountain,
    FileText,
    GlassWater,
};

export default function ApplicationsPage() {
    return (
        <>
            {/* Hero - Dark blue with decorative shapes */}
            <section className="relative overflow-hidden bg-[#001F41] py-20 lg:py-28">
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute top-10 right-0 h-48 w-48 rounded-full bg-[#197FD1]/10 blur-2xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Industrial Applications
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Lime and Limestone Are Essential
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            Our products serve as essential components across a wide range of
                            industries, from steel making to water treatment and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industrialApplications.map((app, index) => {
                            const Icon = iconMap[app.icon] || Factory;
                            return (
                                <div
                                    key={app.title}
                                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30"
                                >
                                    {/* Top gradient bar */}
                                    <div className="h-1 w-full bg-gradient-to-r from-[#001F41] via-[#197FD1] to-[#001F41]" />
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                                        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary shadow-md backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <span className="absolute top-4 right-4 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-heading text-lg font-semibold text-foreground">
                                            {app.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Special Applications - with richer styling */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#001F41] to-[#0a3a6e] py-16 lg:py-24">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#197FD1]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Special Applications
                        </span>
                        <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
                            Milled Limestone Applications
                        </h2>
                        <p className="mt-4 text-white/70">
                            Milled limestone finds use in a variety of specialized
                            applications across multiple industries.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {[
                            'Roofing Shingles',
                            'Animal Feed',
                            'Flue Gas Desulfurization',
                            'Glass Manufacturing',
                            'Carpet',
                            'Coal Mine Dust',
                            'Construction',
                            'Oil and Gas',
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 hover:scale-105 cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - with decorative circles */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl sm:px-16">
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/10" />
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute top-1/2 right-1/4 h-20 w-20 rounded-full bg-white/5" />

                        <div className="relative">
                            <h2 className="font-heading text-2xl font-bold sm:text-3xl text-balance">
                                Looking for Lime Products for Your Industry?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
                                We provide high-grade lime products tailored to your specific
                                industrial applications.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
                            >
                                Request a Quote
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
