import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from './hooks/useAnimations';
import { initTheme, getCart, getCartCount } from './reducers/AppReducer';
import Header from './components/common/Header';
import HeroSection from './screens/Landing/HeroSection';
import PainPointSection from './screens/Landing/PainPointSection';
import FeatureSection from './screens/Landing/FeatureSection';
import SafetySection from './screens/Landing/SafetySection';
import StorySection from './screens/Landing/StorySection';
import SpecsSection from './screens/Landing/SpecsSection';
import LeadFormSection from './screens/Landing/LeadFormSection';
import FAQSection from './screens/Landing/FAQSection';
import Footer from './components/common/Footer';
import ToastContainer from './components/common/ToastContainer';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Initialize theme
  useEffect(() => {
    const theme = initTheme();
    setIsDark(theme === 'dark');
    setCartItemCount(getCartCount(getCart()));
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Scroll reveal animations
  useScrollReveal();

  // Tracking stub (will be replaced with real tracking in later commits)
  const handleTrack = useCallback((_eventType: string, _extra?: Record<string, unknown>) => {
    // Will be implemented with backend integration
  }, []);

  const handleCartClick = useCallback(() => {
    // Will be implemented in mini ecommerce commit
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#101827]' : 'bg-[#fff8f1]'} transition-colors duration-300`}>
      <Header
        onCartClick={handleCartClick}
        onTrack={handleTrack}
        cartItems={cartItemCount}
      />

      <main>
        <HeroSection isDark={isDark} onTrack={handleTrack} />
        <PainPointSection isDark={isDark} />
        <FeatureSection isDark={isDark} />
        <SafetySection isDark={isDark} />
        <StorySection isDark={isDark} />
        <SpecsSection isDark={isDark} />
        <LeadFormSection isDark={isDark} />
        {/* ProductSection will be added in commit #5 */}
        <FAQSection isDark={isDark} />
        {/* ChatbotWidget will be added in commit #6 */}
      </main>

      <Footer isDark={isDark} />
      <ToastContainer />
    </div>
  );
}
