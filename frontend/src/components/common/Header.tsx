import { useState, useEffect, useCallback, useRef } from 'react';
import { Moon, Sun, ShoppingCart, Menu, X } from 'lucide-react';
import { getTheme, setTheme } from '../../reducers/AppReducer';
import logoUrl from '../../assets/logo.webp';

interface HeaderProps {
  onCartClick: () => void;
  onTrack: (eventType: string, extra?: Record<string, unknown>) => void;
  cartItems: number;
}

export default function Header({ onCartClick, onTrack, cartItems }: HeaderProps) {
  const [isDark, setIsDark] = useState(getTheme() === 'dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);

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

  const handleNavHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = e.currentTarget.getBoundingClientRect();
    setHoverStyle({
      left: btnRect.left - navRect.left,
      width: btnRect.width,
      opacity: 1,
    });
  };

  const handleNavLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const d = isDark;

  return (
    <header
      id="main-header"
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? `top-2 md:top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[860px] md:right-auto rounded-2xl md:rounded-full ${
              d
                ? 'bg-[#0c111d]/75 backdrop-blur-lg border border-white/[0.08] shadow-2xl shadow-black/40'
                : 'bg-white/80 backdrop-blur-lg border border-gray-200/80 shadow-lg shadow-gray-900/5'
            }`
          : 'top-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:right-auto w-full bg-transparent border-b border-transparent rounded-none'
      }`}
    >
      <div className={`mx-auto w-full transition-all duration-700 ${isScrolled ? 'px-2' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-14' : 'h-16 md:h-20'}`}>
          
          <a
            href="#"
            className={`flex items-center gap-2.5 group shrink-0 transition-all duration-700 ${isScrolled ? 'ml-2' : ''}`}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="h-7 md:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </a>

          <nav 
            ref={navRef}
            onMouseLeave={handleNavLeave}
            className="hidden md:flex items-center relative"
          >
            <div 
              className={`absolute h-8 rounded-lg pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                d ? 'bg-white/[0.08]' : 'bg-black/[0.04]'
              }`}
              style={{
                left: hoverStyle.left,
                width: hoverStyle.width,
                opacity: hoverStyle.opacity,
                transform: 'translateY(0)',
              }}
            />
            {navItems.map((item) => (
              <button
                key={item.href}
                onMouseEnter={handleNavHover}
                onClick={() => { scrollToSection(item.href); onTrack('cta_click', { eventName: `nav_${item.label}`, section: 'header' }); }}
                className={`relative z-10 px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                  d
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-[#172033]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className={`flex items-center gap-1 transition-all duration-700 ${isScrolled ? 'mr-1' : ''}`}>
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-yellow-300 hover:bg-white/[0.08]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-black/[0.04]'
              }`}
              aria-label="Toggle dark mode"
            >
              {d ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              id="cart-button"
              onClick={() => { onCartClick(); onTrack('cta_click', { eventName: 'cart_open', section: 'header' }); }}
              className={`p-2 rounded-full transition-colors relative cursor-pointer ${
                d
                  ? 'text-gray-400 hover:text-white hover:bg-white/[0.08]'
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

            <button
              onClick={() => { scrollToSection('#lead-form'); onTrack('cta_click', { eventName: 'header_cta', section: 'header' }); }}
              className={`hidden sm:block px-4 bg-[#ff7a1a] hover:bg-[#e56a10] text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md active:scale-[0.97] transition-all cursor-pointer ${
                isScrolled ? 'py-1.5 ml-1' : 'py-2 ml-2'
              }`}
            >
              Nhận tư vấn
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors cursor-pointer ${
                d ? 'text-gray-400 hover:bg-white/[0.08]' : 'text-gray-500 hover:bg-black/[0.04]'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden absolute left-0 right-0 top-full mt-2 rounded-2xl mx-4 shadow-xl ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 border' : 'max-h-0 opacity-0 border-transparent'
        } ${d ? 'bg-[#151c2c] border-white/10' : 'bg-white border-gray-100'}`}
      >
        <div className="py-2 px-2 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                d
                  ? 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  : 'text-gray-600 hover:text-[#172033] hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#lead-form')}
            className="block w-full px-4 py-3 bg-[#ff7a1a] hover:bg-[#e56a10] text-white text-sm font-semibold rounded-xl text-center cursor-pointer mt-2 transition-colors"
          >
            Nhận tư vấn miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
