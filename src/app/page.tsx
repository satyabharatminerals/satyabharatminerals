import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getSeoAlternates } from '@/lib/seo-helpers';
import { ImageCarousel } from '@/components/image-carousel';
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
  Building2,
  Globe2,
  Hexagon,
  Briefcase,
  Handshake,
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
  title: {
    absolute: 'Quick Lime Manufacturer in India | Quick Lime and Hydrated Lime Supplier',
  },
  description:
    'Satya Bharat Minerals is an ISO 9001:2015 certified quick lime and hydrated lime manufacturer in India, supplying high calcium quicklime lumps, powder, and CaO across industrial sectors.',
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

        {/* ISO 9001:2015 Certification Badge - Top Right Corner */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-6 lg:top-6 lg:right-8 z-20">
          <div className="flex flex-col items-center">
            <Image
              src="/images/iso.png"
              alt="ISO 9001:2015 Certified"
              title="ISO 9001:2015 Certified"
              width={160}
              height={160}
              className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              ISO 9001:2015 Certified Quick Lime Manufacturer in India
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              India&apos;s Trusted{' '}
              <span className="text-primary">Quick Lime and Hydrated Lime</span>{' '}
              Manufacturer
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
              Satya Bharat Minerals is a premier quick lime manufacturer and hydrated lime
              supplier in India, operating high-capacity vertical shaft kilns in Nagaur,
              Rajasthan. We produce high-calcium quicklime lumps, quick lime powder (CaO),
              and hydrated lime (slaked lime), delivered reliably across industrial sectors.
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
                Request a Bulk Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {[
                'High-Calcium Quick Lime',
                'ISO 9001:2015 Certified',
                'Custom Grades Available',
                'Pan-India Supply',
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

      {/* Partnership Marquee */}
      <section className="py-10 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-20 pr-20 hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              {[
                { src: '/images/partners/birlanu.png', name: 'Birla NU' },
                { src: '/images/partners/jksmartblox.png', name: 'JK Smartblox' },
                { src: '/images/partners/fusionaac.png', name: 'Fusion AAC' },
                { src: '/images/partners/jindalsteel.png', name: 'Jindal Steel' },
                { src: '/images/partners/landt.png', name: 'L&T Construction' },
                { src: '/images/partners/tatasteel.png', name: 'Tata Long Product' },
                { src: '/images/partners/jamipol.png', name: 'Jamipol Ltd' },
                { src: '/images/partners/arnavi.png', name: 'Arnavi Green AAC' },
                { src: '/images/partners/mepcrete.png', name: 'Mepcrete AAC' },
                { src: '/images/partners/shreecement.png', name: 'Shree Cement AAC' },
              ].map((partner, idx) => (
                <div
                  key={`${i}-${idx}`}
                  className="shrink-0"
                  style={{ width: '180px', height: '70px' }}
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    style={{ width: '180px', height: '70px', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <ImageCarousel
                images={[
                  '/images/applications/aboutus/satya-bharat-minerals-manufacturing-plant.jpg',
                  '/images/applications/aboutus/industrial-lime-calcination-kiln.jpg',
                  '/images/applications/aboutus/calcined-lime-lumps-crushed-limestone.jpg',
                  '/images/applications/aboutus/hydrated-lime-jumbo-bulk-bags-warehouse.jpg',
                  '/images/applications/aboutus/lime-processing-machinery-facility.jpg',
                  '/images/applications/aboutus/pure-hydrated-lime-powder-packaging.jpg'
                ]}
                alt="Industrial lime manufacturing facility - Satya Bharat Minerals"
              />
              <div className="absolute -bottom-4 -right-4 hidden z-20 rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-xl sm:block">
                <p className="font-heading text-2xl font-bold">25+</p>
                <p className="text-xs opacity-90">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
                India&apos;s Leading Quick Lime and Hydrated Lime Manufacturer
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Operating high-capacity vertical shaft kilns in Nagaur, Rajasthan in India&apos;s
                premier limestone belt, we manufacture high-calcium quick lime lumps,
                quick lime powder (CaO), hydrated lime (slaked lime), and natural limestone.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With 25+ years of industrial lime production experience, we supply bulk
                quicklime and hydrated lime to steel plants, construction companies, water
                treatment facilities, and chemical manufacturers across India.
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
              Quick Lime, Hydrated Lime and Calcined Lime Products
            </h2>
            <p className="mt-4 text-muted-foreground">
              High-purity calcium oxide (CaO) powder, calcined quicklime lumps, hydrated
              lime (Ca(OH)₂), and natural limestone, manufactured in Rajasthan and
              supplied to industries across India.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
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
                Why Choose Satya Bharat Minerals as Your Lime Supplier?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As a dedicated quick lime manufacturer and hydrated lime supplier in India,
                Satya Bharat Minerals combines modern vertical shaft kiln technology with
                high-calcium Rajasthan limestone to deliver consistently high-purity
                quicklime and hydrated lime that meets the strictest industrial specifications.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ISO 9001:2015 certified, with 25+ years of experience, we supply
                bulk quicklime lumps, CaO powder, and slaked lime to steel, cement,
                water treatment, and construction industries across India.
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
              Industrial Applications of Quick Lime and Hydrated Lime
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quick lime (CaO) and hydrated lime (Ca(OH)₂) are essential raw materials
              in steel making, road construction, water treatment, flue gas desulfurization,
              chemical processes, glass, paper, and mining industries.
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              How We Manufacture Quick Lime and Hydrated Lime
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
                Looking for a Reliable Quick Lime and Hydrated Lime Supplier in India?
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