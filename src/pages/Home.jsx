
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Scissors,
  Heart,
  Sparkles,
  ShieldCheck,
  Star,
} from 'lucide-react'

import ServiceTile from '../components/ServiceTile'
import { services } from '../data'

const gallery = [
  {
    title: 'Hair Transformation',
    category: 'HAIR STYLING',
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Beauty & Glow',
    category: 'SKIN CARE',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Modern Grooming',
    category: 'MEN STYLING',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Your Beauty Moment',
    category: 'SALON EXPERIENCE',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85',
  },
]

const features = [
  {
    icon: Scissors,
    title: 'Expert Stylists',
    description:
      'Creative professionals who understand your style and give you the perfect look.',
  },
  {
    icon: Heart,
    title: 'Personal Care',
    description:
      'Every service is thoughtfully designed around your comfort and preferences.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description:
      'We use quality products to give your hair and skin the care they deserve.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean & Hygienic',
    description:
      'A fresh, comfortable and hygienic salon experience every time you visit.',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FFF1E8] text-[#35252B]">

      {/* 1. HERO SECTION */}
      <section className="px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto grid max-w-7xl items-center gap-5 overflow-hidden rounded-[24px] bg-[#EFAE9A] p-5 md:grid-cols-2 md:gap-8 md:p-9 lg:p-11">

          <div className="order-2 md:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#35252B]/25 px-3 py-2 text-xs font-bold tracking-[2px]">
              <Star size={13} fill="currentColor" />
              YOUR PERSONAL STYLE STUDIO
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-3px] sm:text-6xl lg:text-7xl">
              A LOOK THAT
              <br />
              FEELS LIKE
              <br />
              <span className="text-[#C65D78]">YOU.</span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-7 text-[#35252B]/80 md:text-lg">
              Discover your style at FORME. From fresh haircuts to complete
              beauty transformations, make every look your own.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-[#C65D78] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#dfd6d9]"
              >
                Book Appointment <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#35252B]/40 px-6 py-3.5 text-sm font-bold transition hover:bg-[#f4e1e8] hover:text-white"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="Salon client"
                  className="h-9 w-9 rounded-full border-2 border-[#EFAE9A] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                  alt="Salon client"
                  className="h-9 w-9 rounded-full border-2 border-[#EFAE9A] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80"
                  alt="Salon client"
                  className="h-9 w-9 rounded-full border-2 border-[#EFAE9A] object-cover"
                />
              </div>

              <p className="text-xs font-bold text-[#35252B]/75">
                STYLE, CONFIDENCE & YOU
              </p>
            </div>
          </div>

          <div className="relative order-1 h-[280px] overflow-hidden rounded-[18px] sm:h-[360px] md:order-2 md:h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=90"
              alt="Modern luxury salon interior"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 rounded-xl bg-[#FFF1E8] px-4 py-3">
              <p className="text-xs font-bold tracking-[2px]">WELCOME TO</p>
              <p className="text-2xl font-black tracking-tight">FORME.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE SERVICES */}
      <section className="px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto max-w-7xl">

          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-xs font-bold tracking-[3px] text-[#C65D78]">
                WHAT WE DO
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Signature Services
                <span className="text-[#C65D78]">.</span>
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-[#35252B]/70 md:text-base">
                Everything you need to look good and feel amazing.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C65D78] hover:underline"
            >
              View All Services <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((item, index) => (
              <ServiceTile key={item.id || index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. STYLE GALLERY */}
      <section className="px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto max-w-7xl">

          <div className="mb-5">
            <p className="mb-2 text-xs font-bold tracking-[3px] text-[#C65D78]">
              THE FORME LOOKBOOK
            </p>

            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Style Inspiration
                <span className="text-[#C65D78]">.</span>
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[#35252B]/70">
                Explore fresh looks, beautiful details and styles that inspire.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[16px] ${
                  index % 2 === 0 ? 'md:mt-0' : 'md:mt-7'
                }`}
              >
                <div className="h-[210px] overflow-hidden sm:h-[280px] md:h-[340px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#35252B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-3 text-white sm:p-4">
                  <p className="mb-1 text-[9px] font-bold tracking-[2px] text-[#F4D66D] sm:text-[10px]">
                    {item.category}
                  </p>

                  <h3 className="text-sm font-bold sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY FORME */}
      <section className="px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto max-w-7xl rounded-[22px] bg-[#35252B] px-5 py-7 text-white md:px-9 md:py-9">

          <div className="mb-6 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-[3px] text-[#F4D66D]">
              THE FORME DIFFERENCE
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              More Than Just A Salon
              <span className="text-[#EFAE9A]">.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">
              We believe great style starts with great care. Come in, relax and
              let us take care of the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="rounded-[15px] border border-white/15 bg-white/[0.07] p-4 transition hover:bg-white/[0.12]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EFAE9A] text-[#35252B]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/70">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. BOOKING CTA */}
      <section className="px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[22px] bg-[#EFAE9A] px-5 py-7 sm:flex-row sm:items-center md:px-10 md:py-9">

          <div>
            <p className="mb-2 text-xs font-bold tracking-[3px] text-[#35252B]/75">
              YOUR NEXT LOOK STARTS HERE
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Ready For A Little
              <br className="hidden sm:block" />
              Style Upgrade?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#35252B]/80 md:text-base">
              Your style deserves attention. Book your appointment and let
              FORME bring out your best look.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#C65D78] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ddd6d9]"
          >
            Book Your Visit <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  )
}
