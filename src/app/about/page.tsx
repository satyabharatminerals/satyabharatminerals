import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Eye, ShieldCheck, Award, GraduationCap, Factory } from 'lucide-react';
import { coreValues, companyInfo, products } from '@/lib/site-data';
import { getSeoAlternates, generateLocalBusinessSchema } from '@/lib/seo-helpers';
import JsonLd from '@/components/seo/JsonLd';

export function generateMetadata(): Metadata {
    return {
        title: 'Quick Lime Manufacturer in Rajasthan | About Satya Bharat Minerals',
        description: 'Satya Bharat Minerals is a leading lime manufacturer in Rajasthan operating high-capacity vertical shaft kilns in Nagaur. Founded by Mr. Nandlal Sipul with 25+ years of excellence in industrial lime production.',
        alternates: getSeoAlternates('/about'),
    };
}

const valueIcons: Record<string, typeof Leaf> = {
    Leaf,
    Eye,
    ShieldCheck,
    Award,
    GraduationCap,
};

export default function AboutPage() {
    return (
        <>
            <JsonLd data={generateLocalBusinessSchema()} />

            {/* Hero - Dark blue with decorative shapes */}
            <section className="relative overflow-hidden bg-[#001F41] py-20 lg:py-28">
                {/* Decorative floating circles */}
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute top-10 right-0 h-48 w-48 rounded-full bg-[#197FD1]/10 blur-2xl" />
                <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#197FD1]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Lime Manufacturer in Rajasthan, India
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Leading Quick Lime and Hydrated Lime Manufacturer in Rajasthan
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            Operating in Nagaur, Rajasthan at the heart of India&apos;s premier high-calcium
                            limestone belt, Satya Bharat Minerals has been pioneering industrial lime manufacturing
                            for over 25 years. We produce high-purity quick lime lumps, quicklime powder (CaO),
                            and hydrated lime (slaked lime) for core industries nationwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section - with accent glow */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="relative">
                            {/* Decorative accent behind image */}
                            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#197FD1]/20 to-[#001F41]/10 blur-xl" />
                            <div className="relative aspect-4/3 max-w-lg mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-border bg-muted">
                                <Image
                                    src="/images/about/mr-nandlal-sipul-founder.jpg"
                                    alt="Mr. Nandlal Sipul - Founder, Satya Bharat Minerals"
                                    fill
                                    priority
                                    loading="eager"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div>
                            {/* Left accent border */}
                            <div className="border-l-4 border-primary pl-6">
                                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                                    Our Founder and Leadership
                                </span>
                                <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                                    Mr. Nandlal Sipul
                                </h2>
                            </div>
                            <p className="mt-6 text-muted-foreground leading-relaxed">
                                Founded by Mr. Nandlal Sipul, Satya Bharat Minerals has grown into one of Rajasthan&apos;s
                                most trusted industrial lime manufacturers and suppliers. Under his visionary leadership,
                                the company established state-of-the-art calcination facilities in Khinwsar, Nagaur,
                                operating high-temperature vertical shaft kilns engineered for optimal fuel efficiency and consistent reactivity.
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                We specialize in processing high-calcium Rajasthan limestone into high-purity quick lime
                                powder (CaO), calcined lime lumps, and hydrated (slaked) lime. Our unwavering commitment to
                                stringent quality testing, ISO 9001:2015 standards, and prompt nationwide delivery has earned
                                us trusted partnerships with India&apos;s top steel makers, construction giants, and chemical producers.
                            </p>
                            <Link
                                href="/products"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                            >
                                View Our Products
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - with top border accent cards */}
            <section className="relative overflow-hidden bg-secondary/40 py-16 lg:py-24">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                            Our Core Values
                        </span>
                        <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                            The Values That Drive Us
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            These principles guide every decision we make and every product
                            we deliver.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {coreValues.map((value) => {
                            const Icon = valueIcons[value.icon] || Factory;
                            return (
                                <div
                                    key={value.title}
                                    className="group rounded-xl border border-border border-t-4 border-t-primary bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Specialization - with gradient accent */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-sm sm:p-0">
                        {/* Gradient top bar */}
                        <div className="h-1.5 w-full bg-linear-to-r from-[#001F41] via-[#197FD1] to-[#001F41]" />
                        <div className="p-8 sm:p-12">
                            <div className="grid items-center gap-8 lg:grid-cols-2">
                                <div>
                                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                                        Rajasthan Manufacturing Plant
                                    </span>
                                    <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
                                        High-Capacity Vertical Shaft Kilns in Nagaur, Rajasthan
                                    </h2>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        Situated in the renowned limestone belt of Nagaur, Rajasthan, our manufacturing
                                        plant utilizes rich, high-calcium limestone deposits (95%+ CaCO₃). Our advanced
                                        vertical shaft kilns and automated hydration plants ensure consistent calcination
                                        temperatures, producing active Calcium Oxide (CaO) and ultra-fine Hydrated Lime
                                        tailored to strict industrial tolerances.
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        {[
                                            'High-Calcium Quick Lime Lumps (85-92% CaO) from Nagaur Kilns',
                                            'High-Reactivity Quick Lime Powder (CaO) for Steel and Chemical Units',
                                            'Superfine Hydrated (Slaked) Lime (90-96% Ca(OH)₂ Purity)',
                                            'Natural High-Purity Limestone Mineral (CaCO₃ 95%+)',
                                            'Pan-India Bulk Supply via Road and Rail Logistics',
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                                                    <ArrowRight className="h-3 w-3" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                                    <Image
                                        src="/images/about/factory.jpg"
                                        alt="Industrial steel structures and pipes"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
                            Explore our full range of high-purity industrial lime products manufactured at our Nagaur, Rajasthan plant.
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
                </div>
            </section>

            {/* CTA - with decorative circles */}
            <section className="pb-16 lg:pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl sm:px-16">
                        {/* Decorative circles */}
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/10" />
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute top-1/2 right-1/4 h-20 w-20 rounded-full bg-white/5" />

                        <div className="relative">
                            <h2 className="font-heading text-2xl font-bold sm:text-3xl text-balance">
                                Looking for a Trusted Lime Manufacturer in Rajasthan?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
                                Partner directly with Satya Bharat Minerals for high-calcium quicklime, hydrated lime, or customized bulk supply. Call {companyInfo.phone[0]} or email {companyInfo.email} today.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
                            >
                                Get in Touch
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
