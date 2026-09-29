import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Award,
  FileText,
  ChevronRight,
  Layers,
  FlaskConical,
} from 'lucide-react';
import { products, getProductBySlug, companyInfo } from '@/lib/site-data';
import {
  BASE_URL,
  getSeoAlternates,
  generateProductSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo-helpers';
import JsonLd from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  products.forEach((p) => {
    slugs.add(p.slug);
    if (p.id !== p.slug) {
      slugs.add(p.id);
    }
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Satya Bharat Minerals',
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.targetKeywords,
    alternates: getSeoAlternates(`/products/${product.slug}`),
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${BASE_URL}/products/${product.slug}`,
      type: 'website',
      images: [
        {
          url: product.image.startsWith('http') ? product.image : `${BASE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  const relatedProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Structured Data / Rich Snippets */}
      <JsonLd
        data={[
          generateProductSchema(
            product.name,
            product.description,
            `${BASE_URL}/products/${product.slug}`,
            product.image,
            product.specs,
            'Industrial Chemicals & Minerals'
          ),
          generateBreadcrumbSchema(breadcrumbs),
          generateFaqSchema(product.faqs, `${BASE_URL}/products/${product.slug}`),
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#001F41] py-16 lg:py-24 text-white">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#197FD1]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#197FD1]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, idx) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/40" />}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="font-medium text-white" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.url} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#197FD1]/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#197FD1] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" />
                ISO 9001:2015 Certified Manufacturing
              </div>

              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                {product.h1Title || product.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-[#197FD1]">
                {product.tagline}
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                {product.description}
              </p>

              {/* Quick Spec Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {product.specs.slice(0, 4).map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90"
                  >
                    <span className="text-white/60">{spec.label}: </span>
                    <strong className="text-white">{spec.value}</strong>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
                >
                  Request Bulk Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${companyInfo.phone[0]}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 text-[#197FD1]" />
                  Call: {companyInfo.phone[0]}
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={product.image}
                  alt={`${product.name} - Satya Bharat Minerals Rajasthan`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 p-3 backdrop-blur-md">
                  <p className="text-xs text-white/90">
                    Direct kiln dispatch from Nagaur, Rajasthan plant to industrial sites pan-India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data & Chemical Composition */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Laboratory Certified Analysis
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground">
              Technical Specifications and Chemical Composition
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Tested under Indian Standards (IS 1514) and ASTM methods. Consistent high purity guaranteed batch-to-batch.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Chemical Composition Table */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 pb-4 border-b border-border">
                <FlaskConical className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Chemical Analysis (IS 1514 / ASTM)
                </h3>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase text-muted-foreground">
                      <th className="py-2.5 font-semibold">Parameter</th>
                      <th className="py-2.5 font-semibold">Specification</th>
                      <th className="py-2.5 font-semibold">Test Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {product.chemicalAnalysis.map((row) => (
                      <tr key={row.parameter} className="hover:bg-muted/30">
                        <td className="py-3 font-medium text-foreground">{row.parameter}</td>
                        <td className="py-3 font-semibold text-primary">{row.value}</td>
                        <td className="py-3 text-muted-foreground text-xs">{row.method || 'Standard'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Physical Properties Table */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 pb-4 border-b border-border">
                <Layers className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Physical & Performance Properties
                </h3>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase text-muted-foreground">
                      <th className="py-2.5 font-semibold">Physical Characteristic</th>
                      <th className="py-2.5 font-semibold">Industrial Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {product.physicalProperties.map((row) => (
                      <tr key={row.property} className="hover:bg-muted/30">
                        <td className="py-3 font-medium text-foreground">{row.property}</td>
                        <td className="py-3 font-semibold text-foreground/90">{row.specification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications & Packaging */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Key Applications */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Industry Applications
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                Where is {product.name} Used?
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Critical raw material for foundational infrastructure and heavy industrial manufacturing:
              </p>
              <div className="mt-6 space-y-3">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging & Logistics */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Supply & Logistics
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                Packaging, MOQ and Dispatch
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Flexible bulk packaging engineered to prevent ambient moisture contamination during transit:
              </p>
              <div className="mt-6 space-y-4">
                {product.packaging.map((pack, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-xs"
                  >
                    <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Packaging Option {idx + 1}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{pack}</p>
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Award className="h-4 w-4" />
                    Minimum Order Quantity (MOQ)
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    15–20 Metric Tonnes (full truckload). Bulk tanker dispatches available for plants with silo capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {product.name} - FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border border-l-4 border-l-primary bg-card p-5 shadow-xs"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-linking to Other Mineral Products */}
      <section className="py-16 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Explore More Products
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold text-foreground">
                Other Industrial Lime and Mineral Products
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View Full Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {rel.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {rel.tagline}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    View Specifications
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Get Competitive Factory-Direct Pricing for {product.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90 text-sm sm:text-base">
            Contact Satya Bharat Minerals today for custom test certificates, technical data sheets, and bulk delivery quotes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
            >
              Request a Bulk Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <Mail className="h-4 w-4" />
              {companyInfo.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
