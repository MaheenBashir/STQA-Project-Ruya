import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About Us', 'Writers', 'Blog', 'Contact']

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="text-2xl text-cream tracking-wide hover:text-gold transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          ruya.
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() =>
                  scrollTo(link.toLowerCase().replace(' ', '-'))
                }
                className="font-body text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 px-6 pt-4 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase().replace(' ', '-'))}
              className="text-cream/80 text-sm tracking-[0.2em] uppercase text-left hover:text-gold transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
