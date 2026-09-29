import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail } from 'lucide-react';
import { companyInfo } from '@/lib/site-data';
import { getSeoAlternates } from '@/lib/seo-helpers';

export const metadata: Metadata = {
    title: 'Contact Quick Lime Supplier in India | Request a Bulk Quote - SBM',
    description: 'Contact Satya Bharat Minerals, India\'s trusted quick lime and hydrated lime supplier, for bulk orders, pricing, and supply enquiries. Delhi office and Nagaur, Rajasthan plant.',
    alternates: getSeoAlternates('/contact'),
};

export default function ContactPage() {
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
                            Contact Us
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
                            Get in Touch
                        </h1>
                        <p className="mt-6 text-lg text-white/70 text-balance">
                            Our team supports you for any kind of questions or queries. Reach
                            out to request a quote or learn more about our products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                                Contact Information
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                Reach out to us through any of the following channels. We
                                respond promptly to all inquiries.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm font-semibold text-foreground">
                                            Head Office
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                            {companyInfo.address.line1}
                                            <br />
                                            {companyInfo.address.line2}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm font-semibold text-foreground">
                                            Site Office
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                            {companyInfo.siteOffice.line1}
                                            <br />
                                            {companyInfo.siteOffice.line2}
                                            <br />
                                            {companyInfo.siteOffice.line3}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm font-semibold text-foreground">
                                            Phone
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {companyInfo.phone.map((p, i) => (
                                                <span key={p}>
                                                    {i > 0 && <span className="mx-1">,</span>}
                                                    <a href={`tel:${p}`} className="hover:text-primary transition-colors">
                                                        {p}
                                                    </a>
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-sm font-semibold text-foreground">
                                            Email
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            <a
                                                href={`mailto:${companyInfo.email}`}
                                                className="hover:text-primary transition-colors"
                                            >
                                                {companyInfo.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-muted" />}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    );
}
