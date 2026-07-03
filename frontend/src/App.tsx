import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from './hooks/useAnimations';
import { initTheme, getCart, getCartCount } from './reducers/AppReducer';
import type { CartItem } from './configs/Types';
import Header from './components/common/Header';
import HeroSection from './screens/Landing/HeroSection';
import PainPointSection from './screens/Landing/PainPointSection';
import FeatureSection from './screens/Landing/FeatureSection';
import SafetySection from './screens/Landing/SafetySection';
import StorySection from './screens/Landing/StorySection';
import SpecsSection from './screens/Landing/SpecsSection';
import ProductSection from './screens/Landing/ProductSection';
import LeadFormSection from './screens/Landing/LeadFormSection';
import FAQSection from './screens/Landing/FAQSection';
import Footer from './components/common/Footer';
import ToastContainer from './components/common/ToastContainer';
import CartDrawer from './components/common/CartDrawer';
import ChatbotWidget from './components/common/ChatbotWidget';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const theme = initTheme();
    setIsDark(theme === 'dark');
    setCart(getCart());
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useScrollReveal();

  const handleTrack = useCallback((_eventType: string, _extra?: Record<string, unknown>) => {

  }, []);

  const handleCartUpdate = useCallback((updatedCart?: CartItem[]) => {
    const newCart = updatedCart ?? getCart();
    setCart(newCart);
  }, []);

  const handleCartClick = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-clip ${isDark ? 'bg-[#101827]' : 'bg-[#fff8f1]'} transition-colors duration-300`}>
      <Header
        onCartClick={handleCartClick}
        onTrack={handleTrack}
        cartItems={getCartCount(cart)}
      />

      <main className="w-full max-w-full overflow-x-clip">
        <HeroSection isDark={isDark} onTrack={handleTrack} />
        <PainPointSection isDark={isDark} />
        <FeatureSection isDark={isDark} />
        <SafetySection isDark={isDark} />
        <StorySection isDark={isDark} />
        <SpecsSection isDark={isDark} />
        <ProductSection isDark={isDark} onCartUpdate={() => handleCartUpdate()} />
        <LeadFormSection isDark={isDark} />
        <FAQSection isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
      <ToastContainer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onCartUpdate={handleCartUpdate}
        isDark={isDark}
      />
      <ChatbotWidget isDark={isDark} />
    </div>
  );
}
