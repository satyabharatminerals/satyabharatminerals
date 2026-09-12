import Link from 'next/link';
import { ArrowRight, Home, Package, Phone, Mountain } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#001F41] px-4 py-20 text-white">
            {/* Decorative blurred blobs */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#197FD1]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#197FD1]/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#197FD1]/5 blur-2xl" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                    <Mountain className="h-10 w-10 text-[#197FD1]" />
                </div>

                {/* 404 number */}
                <p className="font-heading text-8xl font-bold leading-none tracking-tight text-white/10 sm:text-9xl">
                    404
                </p>

                {/* Heading */}
                <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
                    Page Not Found
                </h1>

                {/* Description */}
                <p className="mt-4 text-lg text-white/60 text-balance">
                    Looks like this page has been quarried away! The page you&apos;re
                    looking for doesn&apos;t exist or may have been moved.
                </p>

                {/* Primary CTA */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#197FD1] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#197FD1]/30 transition-all hover:bg-[#197FD1]/90 hover:shadow-xl hover:shadow-[#197FD1]/40 hover:-translate-y-0.5"
                >
                    <Home className="h-4 w-4" />
                    Back to Home
                </Link>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10 pt-10">
                    <p className="mb-6 text-sm font-medium uppercase tracking-wider text-white/40">
                        Or explore these pages
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                            { href: '/products', label: 'Our Products', icon: Package },
                            { href: '/about', label: 'About Us', icon: Mountain },
                            { href: '/contact', label: 'Contact Us', icon: Phone },
                        ].map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:border-[#197FD1]/50 hover:bg-white/10 hover:text-white"
                            >
                                <Icon className="h-4 w-4 text-[#197FD1]" />
                                {label}
                                <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
