import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getSeoAlternates } from '@/lib/seo-helpers';
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Leaf,
  Eye,
  ShieldCheck,
  Award,
  GraduationCap,
  Quote,
} from 'lucide-react';
import {
  products,
  industrialApplications,
  coreValues,
  productionSteps,
  testimonials,
  companyInfo,
} from '@/lib/site-data';

const valueIcons: Record<string, typeof Leaf> = {
  Leaf,
  Eye,
  ShieldCheck,
  Award,
  GraduationCap,
};

export const metadata: Metadata = {
  alternates: getSeoAlternates('/'),
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-secondary/60 via-background to-background">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-quarry.jpg"
            alt="Limestone quarry"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background from-35% via-background/60 via-60% to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              Industrial Production of Lime & Related Products
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Lime For{' '}
              <span className="text-primary">Everyday Life</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
              We process all phases of lime products, from feasibility to
              manufacturing, guaranteeing high-performance, reliable, and
              quality lime from A to Z. A pioneer and renowned lime brand in
              India.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
              >
                Request a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {[
                'High-Grade Quality',
                'Custom-Made Products',
                'Timely Delivery',
                'Eco-Friendly',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/about/manufacturing-facility.jpg"
                  alt="Industrial lime manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:block">
                <p className="font-heading text-3xl font-bold">25+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Industrial Production of Lime & Related Products
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We have always persisted in following our company ethos of
                sincerity and credit, quality first, service paramountcy. We
                maintain focus towards vertical integration, automated
                production, and environment-friendly management.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We unceasingly upgrade the quality and properties of our
                products to cater to the development and needs of our clients.
                We specialize in offering custom-made high grade Hydrated Lime,
                Quicklime, Limestone and Allied Minerals.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Products
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Premium Lime Products
            </h2>
            <p className="mt-4 text-muted-foreground">
              High-quality lime products manufactured to meet the diverse needs
              of industries across India and beyond.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products#${product.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
                A Leading Position Through Modern Technology
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In the field of industrial production of lime and related
                products, Satya Bharat Minerals is committed to maintaining a
                leading position through an approach that synthesises the most
                modern industrial technologies to design lime kilns and
                hydrating plants that can be defined as increasingly smart,
                flexible, automated, and sustainable.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We do not distinguish ourselves from our competitors only on
                the basis of quality, but also through our commitment to
                innovation and customer satisfaction.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => {
                const Icon = valueIcons[value.icon] || Factory;
                return (
                  <div
                    key={value.title}
                    className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications Preview */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Industrial Applications
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Lime & Limestone Are Essential
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our products serve as essential components across a wide range of
              industries, from steel making to water treatment.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industrialApplications.slice(0, 6).map((app) => (
              <div
                key={app.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {app.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
            >
              View All Applications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Production Process
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              From Limestone to Hydrated Lime
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quicklime can be processed into hydrated lime by adding water to
              crushed lime, and then classifying the hydrated lime to ensure it
              meets customer specifications before transport.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productionSteps.map((step, index) => (
              <li key={step.step} className="relative h-full">
                <article className="flex h-full min-h-73 flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </article>
                {index < productionSteps.length - 1 && (
                  <div
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary lg:block"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Customers Love Us
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground shadow-xl sm:px-16">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-white/10" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
                Ready to Partner with a Trusted Lime Manufacturer?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
                Get in touch with our team for high-grade lime products
                tailored to your industry needs. Call us at{' '}
                {companyInfo.phone[0]} or request a quote today.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
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