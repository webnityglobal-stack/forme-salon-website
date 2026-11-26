
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Studio', '/'],
    ['Services', '/services'],
    ['Book a slot', '/book']
  ]

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#20201d] bg-[#f3eee5]">
      <div className="wrap flex h-[88px] items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d9e76a] text-2xl font-black">
            F.
          </span>

          <span className="serif text-[30px] font-black tracking-[-.08em]">
            FORME
            <span className="text-[#3149d8]">®</span>

            <small className="ml-2 block text-[11px] font-black tracking-[.25em]">
              UNISEX HAIR & CARE
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([n, p]) => (
            <NavLink
              key={p}
              to={p}
              className={({ isActive }) =>
                `text-[19px] font-extrabold ${
                  isActive
                    ? 'text-[#3149d8]'
                    : 'hover:text-[#3149d8]'
                }`
              }
            >
              {n}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/book"
          className="btn-blue hidden !px-6 !py-4 !text-[17px] md:inline-flex"
        >
          Get a glow-up
          <ArrowUpRight size={21} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t-2 border-[#20201d] bg-[#d9e76a] px-5 py-3 md:hidden">
          {links.map(([n, p]) => (
            <Link
              key={p}
              onClick={() => setOpen(false)}
              to={p}
              className="block border-b border-black/15 py-5 text-2xl font-black"
            >
              {n}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
