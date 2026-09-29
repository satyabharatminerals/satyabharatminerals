import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { products } from '@/lib/site-data';

import { getSeoAlternates, generateProductCatalogSchema, generateFaqSchema, BASE_URL } from '@/lib/seo-helpers';
import JsonLd from '@/components/seo/JsonLd';

export function generateMetadata(): Metadata {
  return {
    title: 'Quick Lime Powder, Calcined Lime Lumps and Hydrated Lime Manufacturer | SBM',
    description: 'Buy high-purity Quick Lime Powder (CaO), Calcined Lime Lumps, Hydrated Lime (Slaked Lime), and Natural Limestone from India\'s trusted industrial lime manufacturer, Satya Bharat Minerals in Rajasthan.',
    alternates: getSeoAlternates('/products'),
  };
}

const limeFaqs = [
  {
    q: 'What is the difference between Quick Lime and Hydrated Lime?',
    a: 'Quick Lime (Calcium Oxide / CaO) is produced by calcining limestone at high temperatures. It is highly reactive and generates significant heat when mixed with water. Hydrated Lime (Calcium Hydroxide / Ca(OH)₂) is formed by adding controlled amounts of water to Quick Lime, resulting in a stable, fine white powder used in water treatment, construction, and chemical industries.',
  },
  {
    q: 'What industries use Quick Lime Powder (CaO) and Calcined Lime Lumps?',
    a: 'Quick Lime Powder and Calcined Quicklime Lumps are essential raw materials in steel making (fluxing agent), cement production, flue gas desulfurization (FGD), chemical manufacturing, water and effluent treatment, mining, paper and pulp, glass making, and soil stabilization for road construction.',
  },
  {
    q: 'What is the purity level of your Quick Lime and Hydrated Lime products?',
    a: 'Our Quick Lime Powder (CaO) is manufactured with 85-95% CaO purity, our Calcined Lime Lumps with 85-92% CaO, and our Hydrated Lime (Ca(OH)₂) with 90-96% purity, all tested and quality-checked under our ISO 9001:2015 certified processes.',
  },
  {
    q: 'Where is Satya Bharat Minerals located and do you supply across India?',
    a: 'Satya Bharat Minerals operates its manufacturing plant in Khinwsar, Nagaur, Rajasthan - one of India\'s richest limestone belts. We supply Quick Lime, Hydrated Lime, and Calcium Oxide (CaO) to industries across India from our Rajasthan plant, with a registered office in New Delhi.',
  },
  {
    q: 'Does Satya Bharat Minerals supply bulk quicklime and hydrated lime?',
    a: 'Yes. We supply bulk quantities of Quick Lime Lumps, Quick Lime Powder (CaO), and Hydrated Lime (Slaked Lime) in jumbo bags, bulk tankers, and customized packaging. Contact us to discuss your bulk requirements and get a competitive quote.',
  },
];

export default function ProductsPage() {
    return (
        <>
            <JsonLd
                data={[
                    generateProductCatalogSchema(products, `${BASE_URL}/products`),
                    generateFaqSchema(limeFaqs, `${BASE_URL}/products`),
                ]}
            />

            {/* Hero - Dark blue with decorative shapes */}
            <section className="relative overflow-hidden bg-[#001F41] py-20 lg:py-28">
                <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#197FD1]/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#197FD1]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-[#197FD1]/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#197FD1]">
                            Quick Lime and Hydrated Lime Manufacturer in Rajasthan, India
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Quick Lime, Hydrated Lime and Calcium Oxide (CaO) Manufacturer
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            ISO 9001:2015 certified quick lime manufacturer in Nagaur, Rajasthan, supplying
                            high-calcium quicklime lumps, CaO powder, hydrated lime (slaked lime), and natural
                            limestone to steel, construction, water treatment, and chemical industries across India.
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

                                <div className="grid items-start gap-10 lg:grid-cols-2">
                                    {/* Left Column: Image + Key Applications */}
                                    <div className="space-y-6">
                                        <div className="relative">
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

                                        {/* Key Applications placed below image */}
                                        <div className="rounded-xl border border-border/70 bg-secondary/20 p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                Key Applications:
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {product.applications.map((app) => (
                                                    <span
                                                        key={app}
                                                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs sm:text-sm text-primary"
                                                    >
                                                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                                                        {app}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Title, Description, Specs Grid, and CTAs */}
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                                                {product.name}
                                            </h2>
                                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Specs Grid */}
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
                                        </div>

                                        <div className="mt-8 flex flex-wrap items-center gap-3">
                                            <Link
                                                href={`/products/${product.slug}`}
                                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                                            >
                                                Technical Specs and Details
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                            <Link
                                                href={`/contact?product=${encodeURIComponent(product.name)}`}
                                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent/10"
                                            >
                                                Request a Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section - with accent borders */}
            <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                            FAQ
                        </span>
                        <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                            Quick Lime and Hydrated Lime - FAQs
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Common questions about our industrial quick lime, calcium oxide (CaO), and hydrated lime products.
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

            {/* CTA - with decorative circles */}
            <section className="pb-16 lg:pb-24 pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl sm:px-16">
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/10" />
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute top-1/2 right-1/4 h-20 w-20 rounded-full bg-white/5" />

                        <div className="relative">
                            <h2 className="font-heading text-2xl font-bold sm:text-3xl text-balance">
                                Need Bulk Quick Lime or Hydrated Lime Supply?
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
                                Get in touch for bulk quicklime lumps, CaO powder, or hydrated lime, with custom
                                grades manufactured to your exact industrial specifications.
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
