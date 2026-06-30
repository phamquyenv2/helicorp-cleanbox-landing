import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, ShoppingCart, Menu, X } from 'lucide-react';
import { getTheme, setTheme } from '../../reducers/AppReducer';

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

  // Sync cart count on storage events (multi-tab)
  useEffect(() => {
    function onStorage() {
      // Force re-render on cart changes
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#101827]/90 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
      style={isDark && isScrolled ? { backgroundColor: 'rgba(16,24,39,0.9)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-white' : 'text-[#172033]'}`}>
              Clean<span className="text-[#ff7a1a]">Box</span> Pro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { scrollToSection(item.href); onTrack('cta_click', { eventName: `nav_${item.label}`, section: 'header' }); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-[#172033] hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart */}
            <button
              id="cart-button"
              onClick={() => { onCartClick(); onTrack('cta_click', { eventName: 'cart_open', section: 'header' }); }}
              className={`p-2.5 rounded-xl transition-all relative cursor-pointer ${
                isDark
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10'
              }`}
              aria-label="Open cart"
            >
              <ShoppingCart size={18} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff7a1a] text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => { scrollToSection('#lead-form'); onTrack('cta_click', { eventName: 'header_cta', section: 'header' }); }}
              className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Nhận tư vấn
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all cursor-pointer ${
                isDark ? 'bg-white/10 text-gray-300' : 'bg-black/5 text-gray-600'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 pb-4 space-y-1 ${isDark ? 'bg-[#101827]/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-[#172033] hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#lead-form')}
            className="block w-full px-4 py-3 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white text-sm font-semibold rounded-xl text-center cursor-pointer"
          >
            Nhận tư vấn miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
