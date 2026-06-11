import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Комплексы', href: '#packages' },
  { label: 'Оклейка по элементам', href: '#elements' },
  { label: 'Проекты', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled ? 'bg-[#171B1D]/95 backdrop-blur-xl border-b border-dark-border' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-bold text-lg tracking-tight shrink-0">
            Заклей<span className="text-yellow">.</span>Пленкой
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/90 hover:text-yellow text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contacts */}
          <div className="hidden lg:flex flex-col items-end gap-0.5 shrink-0">
            <a href="tel:+79876226070" className="text-yellow text-sm font-semibold">
              +7 (987) 622-60-70
            </a>
            <span className="text-gray-medium text-xs">м. Павелецкая</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-yellow p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#171B1D]/98 backdrop-blur-xl lg:hidden pt-[72px]">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-xl font-medium hover:text-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+79876226070" className="text-yellow text-lg font-semibold mt-4">
              +7 (987) 622-60-70
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
