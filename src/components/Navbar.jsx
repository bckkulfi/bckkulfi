import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/flavors', label: 'Flavors' },
  { to: '/franchise', label: 'Franchise' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">BCK</div>
          <div className="brand-text">
            <span className="brand-name">Bombay Chowpaty Kulfi</span>
            <span className="brand-tagline">Authentic Since 1999</span>
          </div>
        </Link>

        <nav className={`navbar-links ${open ? 'active' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta btn-primary" onClick={() => setOpen(false)}>
            <span>Get in Touch</span>
          </Link>
        </nav>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
