'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { companyInfo } from '@/lib/site-data';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/applications', label: 'Applications' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                    <Image
                        src="/logo-icon.png"
                        alt="SBM Icon"
                        width={48}
                        height={49}
                        className="h-12 w-auto shrink-0"
                        priority
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="font-heading text-sm font-black tracking-tight text-foreground sm:text-base whitespace-nowrap">
                            Satya Bharat Minerals
                        </span>
                        <span className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground">
                            Lime For Everyday Life
                        </span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                                pathname === link.href
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href={`tel:${companyInfo.phone[0]}`}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        {companyInfo.phone[0]}
                    </a>
                    <Link
                        href="/contact"
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Request a Quote
                    </Link>
                </div>

                <button
                    className="rounded-md p-2 text-foreground md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {mobileOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                                    pathname === link.href
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
                        >
                            Request a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
