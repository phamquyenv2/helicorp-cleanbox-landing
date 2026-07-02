import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, ShoppingCart, Menu, X } from 'lucide-react';
import { getTheme, setTheme } from '../../reducers/AppReducer';
import Container from './Container';

interface HeaderProps {
  onCartClick: () => void;
  onTrack: (eventType: string, extra?: Record<string, unknown>) => void;
  cartItems: number;
}

export default function Header({ onCartClick, onTrack, cartItems }: HeaderProps) {
  const [isDark, setIsDark] = useState(getTheme() === 'dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    setTheme(newTheme);
    onTrack('dark_mode_toggle', { metadata: { theme: newTheme } });
  }, [isDark, onTrack]);

  const navItems = [
    { label: 'Tính năng', href: '#features' },
    { label: 'An toàn', href: '#safety' },
    { label: 'Thông số', href: '#specs' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const d = isDark;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? d
            ? 'bg-[#0c111d]/85 backdrop-blur-2xl shadow-lg shadow-black/10 border-b border-white/[0.04]'
            : 'bg-white/80 backdrop-blur-2xl shadow-lg shadow-gray-900/5 border-b border-gray-100/50'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/35 transition-shadow">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
              Clean<span className="text-[#ff7a1a]">Box</span> Pro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { scrollToSection(item.href); onTrack('cta_click', { eventName: `nav_${item.label}`, section: 'header' }); }}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                  d
                    ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-500 hover:text-[#172033] hover:bg-gray-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
            {/* Dark mode toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                d
                  ? 'text-yellow-300/80 hover:text-yellow-300 hover:bg-white/[0.06]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle dark mode"
            >
              {d ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart */}
            <button
              id="cart-button"
              onClick={() => { onCartClick(); onTrack('cta_click', { eventName: 'cart_open', section: 'header' }); }}
              className={`p-2.5 rounded-xl transition-all relative cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/70'
              }`}
              aria-label="Open cart"
            >
              <ShoppingCart size={18} />
              {cartItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm shadow-orange-500/30">
                  {cartItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => { scrollToSection('#lead-form'); onTrack('cta_click', { eventName: 'header_cta', section: 'header' }); }}
              className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer"
            >
              Nhận tư vấn
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all cursor-pointer ${
                d ? 'text-gray-400 hover:bg-white/[0.06]' : 'text-gray-500 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container className={`pb-4 pt-2 space-y-1 ${d ? 'bg-[#0c111d]/95 backdrop-blur-2xl md:bg-transparent' : 'bg-white/95 backdrop-blur-2xl md:bg-transparent'}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                  : 'text-gray-500 hover:text-[#172033] hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#lead-form')}
            className="block w-full px-4 py-3 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white text-sm font-semibold rounded-xl text-center cursor-pointer mt-2"
          >
            Nhận tư vấn miễn phí
          </button>
        </Container>
      </div>
    </header>
  );
}
