import { Sparkles, Shield, Smartphone, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  isDark: boolean;
  onTrack: (eventType: string, extra?: Record<string, unknown>) => void;
}

export default function HeroSection({ isDark, onTrack }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-teal-400/15 to-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-400/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-6 reveal">
              <Sparkles size={14} className="text-[#ff7a1a]" />
              <span className={`text-sm font-medium ${isDark ? 'text-orange-300' : 'text-[#ff7a1a]'}`}>
                Pet-tech thông minh #1 Việt Nam
              </span>
            </div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 reveal ${isDark ? 'text-white' : 'text-[#172033]'}`}>
              Máy dọn vệ sinh mèo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] animate-gradient">
                tự động
              </span>
              {' '}cho nhà sạch thơm mỗi ngày
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 reveal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              CleanBox Pro tự động dọn sau khi boss rời đi, khử mùi thông minh, cảm biến an toàn đa điểm
              và theo dõi trạng thái qua ứng dụng.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal">
              <button
                id="hero-cta-primary"
                onClick={() => { scrollTo('#lead-form'); onTrack('cta_click', { eventName: 'hero_register_click', section: 'hero' }); }}
                className="group px-8 py-4 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all animate-pulse-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                Nhận tư vấn miễn phí
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => { scrollTo('#story'); onTrack('cta_click', { eventName: 'hero_how_it_works', section: 'hero' }); }}
                className={`px-8 py-4 rounded-2xl font-bold border-2 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-200 text-[#172033] hover:bg-gray-50'
                }`}
              >
                Xem cách hoạt động
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start reveal">
              {[
                { icon: Sparkles, label: 'Tự động dọn' },
                { icon: Shield, label: 'An toàn tuyệt đối' },
                { icon: Smartphone, label: 'App mobile' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                    isDark
                      ? 'bg-white/5 text-gray-300 border border-white/10'
                      : 'bg-white text-gray-700 border border-gray-100 shadow-sm'
                  }`}
                >
                  <Icon size={16} className="text-[#ff7a1a]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Visual */}
          <div className="relative flex justify-center items-center">
            {/* Glow ring */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-400/20 via-yellow-300/10 to-teal-400/10 blur-2xl animate-pulse" />

            {/* Product mockup container */}
            <div className="relative animate-float">
              <div className={`w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-[#1e293b] to-[#172033] border border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-2xl'
              }`}>
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#ff7a1a]/20 to-[#16c7a8]/20 flex items-center justify-center">
                    <span className="text-5xl">🐱</span>
                  </div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                    CleanBox Pro
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Smart Self-Cleaning Litter Box
                  </p>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className={`absolute -bottom-4 -left-4 sm:left-0 animate-notification ${
              isDark
                ? 'bg-[#1e293b] border border-white/10'
                : 'bg-white border border-gray-100 shadow-xl'
            } rounded-2xl px-4 py-3 max-w-[260px]`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16c7a8] to-[#0fa88e] flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                    CleanBox App
                  </p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Boss vừa sử dụng, máy sẽ tự dọn sau 60s 🐾
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge top-right */}
            <div className={`absolute -top-2 -right-2 sm:right-4 animate-float-delayed ${
              isDark
                ? 'bg-[#1e293b] border border-white/10'
                : 'bg-white border border-gray-100 shadow-lg'
            } rounded-xl px-3 py-2`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-xs font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  Đang hoạt động
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
