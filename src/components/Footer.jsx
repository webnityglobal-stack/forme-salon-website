
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  Phone,
  Clock
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#20201d] text-[#f3eee5]">

      {/* Main Footer */}
      <div className="wrap grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

        {/* Brand Section */}
        <div>
          <div className="serif text-5xl font-black tracking-[-.08em] md:text-6xl">
            FORME<span className="text-[#d9e76a]">®</span>
          </div>

          <p className="mt-5 max-w-sm text-lg leading-8 text-white/65 md:text-xl">
            Good hair days are for everybody. Come as you are,
            leave a little more you.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold tracking-wide text-[#d9e76a]">
            <span className="h-2 w-2 rounded-full bg-[#d9e76a]"></span>
            ALL STYLES WELCOME
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-sm font-black uppercase tracking-[.25em] text-[#d9e76a]">
            Find our studio
          </p>

          <div className="mt-7 space-y-6">

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-[#d9e76a]" size={24} />
              <div>
                <p className="text-lg font-bold md:text-xl">Our Location</p>
                <p className="mt-1 text-base leading-7 text-white/60 md:text-lg">
                  Main Market, New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0 text-[#d9e76a]" size={24} />
              <div>
                <p className="text-lg font-bold md:text-xl">Call Us</p>
                <a
                  href="tel:+919876543210"
                  className="mt-1 block text-base text-white/60 transition hover:text-[#d9e76a] md:text-lg"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 shrink-0 text-[#d9e76a]" size={24} />
              <div>
                <p className="text-lg font-bold md:text-xl">Studio Hours</p>
                <p className="mt-1 text-base text-white/60 md:text-lg">
                  Mon – Sun: 10 AM – 8 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Links Section */}
        <div>
          <p className="text-sm font-black uppercase tracking-[.25em] text-[#d9e76a]">
            Explore & connect
          </p>

          <p className="mt-7 text-lg leading-8 text-white/60 md:text-xl">
            Follow the cuts, colours and studio life.
            Your next favourite look starts here.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-3 text-lg font-bold text-[#d9e76a] transition hover:text-white md:text-xl"
          >
            <Instagram size={23} />
            Follow on Instagram
            <ArrowUpRight size={19} />
          </a>

          <div className="mt-8">
            <Link
              to="/book"
              className="inline-flex items-center gap-3 bg-[#f06b43] px-6 py-4 text-base font-black text-[#20201d] transition hover:bg-[#d9e76a] md:text-lg"
            >
              Book your visit
              <ArrowUpRight size={22} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-base font-bold text-white/65">
            <Link to="/" className="hover:text-[#d9e76a]">Studio</Link>
            <Link to="/services" className="hover:text-[#d9e76a]">Services</Link>
            <Link to="/book" className="hover:text-[#d9e76a]">Booking</Link>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-white/50 md:text-base">
            © {new Date().getFullYear()} FORME Studio. All rights reserved.
          </p>

          <p className="text-sm font-bold tracking-wide text-[#d9e76a] md:text-base">
            MADE FOR EVERY YOU.
          </p>

        </div>
      </div>

    </footer>
  )
}
