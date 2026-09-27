import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/site-data';

export function Footer() {
    return (
        <footer className="border-t border-border bg-secondary/50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/logo-icon.png"
                                alt="Satya Bharat Minerals"
                                width={48}
                                height={49}
                                className="h-12 w-auto shrink-0"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="font-heading text-sm font-black tracking-tight text-foreground whitespace-nowrap">
                                    Satya Bharat Minerals
                                </span>
                                <span className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground">
                                    Lime For Everyday Life
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A pioneer and renowned lime brand in India, specializing in
                            custom-made high grade Hydrated Lime, Quick Lime, and allied
                            minerals.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                            Navigation
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About Us' },
                                { href: '/products', label: 'Products' },
                                { href: '/applications', label: 'Applications' },
                                { href: '/contact', label: 'Contact' },
                                { href: '/gallery', label: 'Gallery' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                            Contact Us
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>
                                    <strong>Head Office:</strong><br />
                                    {companyInfo.address.line1}
                                    <br />
                                    {companyInfo.address.line2}
                                </span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>
                                    <strong>Site Office:</strong><br />
                                    {companyInfo.siteOffice.line1}
                                    <br />
                                    {companyInfo.siteOffice.line2}
                                    <br />
                                    {companyInfo.siteOffice.line3}
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 shrink-0 text-primary" />
                                <span>{companyInfo.phone.join(', ')}</span>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                                    {companyInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                            Get in Touch
                        </h3>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Our team supports you for any kind of questions or queries.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Request a Quote
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t border-border pt-6">
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Satya Bharat Minerals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
