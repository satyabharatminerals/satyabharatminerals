'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/lib/site-data';

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const searchParams = useSearchParams();
    const initialProduct = searchParams.get('product') || '';

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: initialProduct,
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Quote Request from ${form.name}`;
        const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'N/A'}
Company: ${form.company || 'N/A'}
Product of Interest: ${form.product || 'N/A'}

Message:
${form.message}`;

        // Create a dynamic link and click it to ensure it opens reliably in all browsers
        const mailtoLink = `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setSubmitted(true);
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
                <div className="flex h-full min-h-100 flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                        Thank You!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Your request has been received. Our team will get back to you
                        shortly.
                    </p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setForm({ name: '', email: '', phone: '', company: '', product: '', message: '' });
                        }}
                        className="mt-6 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
                    >
                        Send Another Request
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                        Request a Quote
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Fill out the form below and we&apos;ll get back to you as soon as
                        possible.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-foreground">
                                    Company
                                </label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={form.company}
                                    onChange={handleChange}
                                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder="Your company name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="product" className="block text-sm font-medium text-foreground">
                                Product of Interest
                            </label>
                            <select
                                id="product"
                                name="product"
                                value={form.product}
                                onChange={handleChange}
                                className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <option value="">Select a product</option>
                                <option value="Quick Lime Powder">Quick Lime Powder</option>
                                <option value="Calcined Lime Lumps">Calcined Lime Lumps</option>
                                <option value="Hydrated (Slaked) Lime">Hydrated (Slaked) Lime</option>
                                <option value="Limestone - Natural Mineral">Limestone - Natural Mineral</option>
                                <option value="Other">Other / Multiple Products</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="mt-1.5 flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                placeholder="Tell us about your requirements..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            <Send className="h-4 w-4" />
                            Submit Request
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}
