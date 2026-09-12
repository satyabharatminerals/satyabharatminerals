import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { products } from '@/lib/site-data';

import { getSeoAlternates, generateProductSchema, generateFaqSchema } from '@/lib/seo-helpers';
import JsonLd from '@/components/seo/JsonLd';

export function generateMetadata(): Metadata {
  return {
    title: 'Products | Satya Bharat Minerals',
    description: 'Explore our range of premium lime products: Quick Lime Powder, Calcined Lime Lumps, Hydrated (Slaked) Lime, and Natural Limestone.',
    alternates: getSeoAlternates('/products'),
  };
}

const limeFaqs = [
  {
    q: 'What is the difference between Quick Lime and Hydrated Lime?',
    a: 'Quick Lime (Calcium Oxide) is highly reactive and generates heat when mixed with water. Hydrated Lime (Calcium Hydroxide) is formed by adding water to Quick Lime in a controlled environment, resulting in a stable powder.',
  },
  {
    q: 'What are the main applications of Hydrated Lime?',
    a: 'Hydrated lime is widely used in water treatment, pH adjustment, soil stabilization, road construction, and sugar refining.',
  },
  {
    q: 'Does Satya Bharat Minerals customize lime products?',
    a: 'Yes, we specialize in manufacturing custom-made high-grade lime products tailored precisely to your industry specifications and requirements.',
  }
];

export default function ProductsPage() {
    const productSchemas = products.map((product) =>
        generateProductSchema(
            product.name,
            product.description,
            `https://satyabharatminerals.com/products#${product.id}`
        )
    );

    return (
        <>
            <JsonLd data={[...productSchemas, generateFaqSchema(limeFaqs, 'https://satyabharatminerals.com/products')]} />

            {/* Hero — Dark blue with decorative shapes */}
            <section className="relative overflow-hidden bg-[#001F41] py-20 lg:py-28">
                <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#197FD1]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Our Products
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Premium Lime &amp; Mineral Products
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            High-quality lime products manufactured to meet the diverse needs
                            of industries across India. Custom-made to your specifications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Detail Sections */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            id={product.id}
                            className="scroll-mt-24"
                        >
                            {/* Card wrapper with left accent */}
                            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 overflow-hidden">
                                {/* Top gradient bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001F41] via-[#197FD1] to-[#001F41]" />

                                <div
                                    className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                        }`}
                                >
                                    <div
                                        className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''
                                            }`}
                                    >
                                        <div className="group relative aspect-4/3 overflow-hidden rounded-xl shadow-lg">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute -top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-lg">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                                        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                                            {product.name}
                                        </h2>
                                        <p className="mt-4 text-muted-foreground leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Specs */}
                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                            {product.specs.map((spec) => (
                                                <div
                                                    key={spec.label}
                                                    className="rounded-lg border border-border bg-secondary/30 px-4 py-3 transition-colors hover:bg-secondary/50"
                                                >
                                                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                                        {spec.label}
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-foreground">
                                                        {spec.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Applications */}
                                        <div className="mt-6">
                                            <p className="text-sm font-semibold text-foreground">
                                                Key Applications:
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {product.applications.map((app) => (
                                                    <span
                                                        key={app}
                                                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary"
                                                    >
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                        {app}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={`/contact?product=${encodeURIComponent(product.name)}`}
                                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                                        >
                                            Request a Quote
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section — with accent borders */}
            <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                            FAQ
                        </span>
                        <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Common questions about our industrial lime products.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {limeFaqs.map((faq, idx) => (
                            <div key={idx} className="group rounded-2xl border border-border border-l-4 border-l-primary bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                                <h3 className="font-heading text-lg font-semibold text-foreground flex items-start gap-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                        {idx + 1}
                                    </span>
                                    {faq.q}
                                </h3>
                                <p className="mt-3 ml-10 text-muted-foreground leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA — with decorative circles */}
            <section className="pb-16 lg:pb-24 pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl sm:px-16">
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/10" />
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute top-1/2 right-1/4 h-20 w-20 rounded-full bg-white/5" />

                        <div className="relative">
                            <h2 className="font-heading text-2xl font-bold sm:text-3xl text-balance">
                                Need a Custom Lime Product?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
                                We specialize in custom-made high grade lime products tailored to
                                your industry specifications.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
                            >
                                Contact Us Today
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
