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
            ? 'bg-[#0c111d]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-white/85 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff7a1a] to-[#e56a10] flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-shadow">
              <span className="text-white font-bold text-xs tracking-tight">CB</span>
            </div>
            <span className={`font-semibold text-[15px] tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
              Clean<span className="text-[#ff7a1a]">Box</span> Pro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { scrollToSection(item.href); onTrack('cta_click', { eventName: `nav_${item.label}`, section: 'header' }); }}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                  d
                    ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-600 hover:text-[#172033] hover:bg-black/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Dark mode toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-yellow-300 hover:bg-white/[0.06]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-black/[0.04]'
              }`}
              aria-label="Toggle dark mode"
            >
              {d ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Cart */}
            <button
              id="cart-button"
              onClick={() => { onCartClick(); onTrack('cta_click', { eventName: 'cart_open', section: 'header' }); }}
              className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-black/[0.04]'
              }`}
              aria-label="Open cart"
            >
              <ShoppingCart size={17} />
              {cartItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 bg-[#ff7a1a] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                  {cartItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => { scrollToSection('#lead-form'); onTrack('cta_click', { eventName: 'header_cta', section: 'header' }); }}
              className="hidden sm:block ml-2 px-4 py-2 bg-[#ff7a1a] hover:bg-[#e56a10] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md active:scale-[0.97] transition-all cursor-pointer"
            >
              Nhận tư vấn
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                d ? 'text-gray-400 hover:bg-white/[0.06]' : 'text-gray-500 hover:bg-black/[0.04]'
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
        <div className={`border-t ${d ? 'bg-[#0c111d] border-white/[0.06]' : 'bg-white border-gray-100'}`}>
          <Container className="py-3 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  d
                    ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-600 hover:text-[#172033] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#lead-form')}
              className="block w-full px-4 py-3 bg-[#ff7a1a] hover:bg-[#e56a10] text-white text-sm font-semibold rounded-lg text-center cursor-pointer mt-2 transition-colors"
            >
              Nhận tư vấn miễn phí
            </button>
          </Container>
        </div>
      </div>
    </header>
  );
}
