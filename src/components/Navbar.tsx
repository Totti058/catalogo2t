import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_2px_30px_rgba(212,175,55,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 border-2 border-gold-500 rotate-45 group-hover:border-gold-300 transition-colors duration-300">
              <span className="font-display text-gold-500 text-sm -rotate-45 leading-none group-hover:text-gold-300 transition-colors duration-300">
                2T
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-xl tracking-widest leading-none">
                MOTO
                <span className="text-gold-500">2T</span>
              </span>
              <span className="text-[9px] text-gold-600 tracking-[0.3em] uppercase font-body font-light">
                Premium
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/motos', label: 'Catálogo' },
              { to: '/contact', label: 'Contacto' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative font-body font-500 text-sm tracking-widest uppercase transition-colors duration-200 pb-1 ${
                    isActive
                      ? 'text-gold-500'
                      : 'text-gray-300 hover:text-gold-400'
                  } group`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-gold-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <a
              href="https://wa.me/573007442878"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2 text-xs tracking-widest uppercase rounded-none font-display text-base"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-gold-500 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-gold-500 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-gold-500 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 border-t border-gold-700/30' : 'max-h-0'
        } bg-black/98`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {[
            { to: '/', label: 'Inicio' },
            { to: '/motos', label: 'Catálogo' },
            { to: '/contact', label: 'Contacto' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-display text-2xl tracking-widest uppercase ${
                  isActive ? 'text-gold-500' : 'text-gray-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/573007442878"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-4 py-3 text-sm tracking-widest uppercase font-display text-center mt-2"
          >
            WhatsApp: 300 744 2878
          </a>
        </div>
      </div>
    </nav>
  );
}
