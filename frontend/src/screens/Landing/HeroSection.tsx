import { Shield, Smartphone, ArrowRight, Zap, Wifi } from 'lucide-react';
import Container from '../../components/common/Container';
import productImg from '../../assets/cleanbox-product.png';

interface HeroSectionProps {
  isDark: boolean;
  onTrack: (eventType: string, extra?: Record<string, unknown>) => void;
}

export default function HeroSection({ isDark, onTrack }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const d = isDark;

  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Background ambient gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] ${
          d ? 'bg-orange-500/[0.06]' : 'bg-orange-200/30'
        }`} />
        <div className={`absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] ${
          d ? 'bg-teal-500/[0.04]' : 'bg-teal-200/20'
        }`} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Headline */}
            <h1 className={`text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-extrabold leading-[1.12] tracking-tight mb-5 ${d ? 'text-white' : 'text-[#172033]'}`}>
              Máy dọn vệ sinh mèo{' '}
              <span className="text-[#ff7a1a]">tự động</span>
              {' '}cho nhà sạch thơm mỗi ngày
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0 ${d ? 'text-gray-400' : 'text-gray-500'}`}>
              CleanBox Pro tự động dọn sau khi boss rời đi, khử mùi thông minh, cảm biến an toàn đa điểm và theo dõi trạng thái qua ứng dụng.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button
                id="hero-cta-primary"
                onClick={() => { scrollTo('#lead-form'); onTrack('cta_click', { eventName: 'hero_register_click', section: 'hero' }); }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff7a1a] hover:bg-[#e56a10] text-white font-bold text-[15px] rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-[0.97] transition-all cursor-pointer"
              >
                Nhận tư vấn miễn phí
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => { scrollTo('#story'); onTrack('cta_click', { eventName: 'hero_how_it_works', section: 'hero' }); }}
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-[15px] border-2 transition-all active:scale-[0.97] cursor-pointer ${
                  d
                    ? 'border-white/12 text-white hover:bg-white/[0.04]'
                    : 'border-gray-200 text-[#172033] hover:border-gray-300 hover:bg-white'
                }`}
              >
                Xem cách hoạt động
              </button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {[
                { icon: Zap, label: 'Tự động dọn' },
                { icon: Shield, label: 'An toàn tuyệt đối' },
                { icon: Smartphone, label: 'App mobile' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium ${
                  d
                    ? 'bg-white/[0.04] text-gray-300 border border-white/[0.06]'
                    : 'bg-white/80 text-gray-600 border border-gray-200/80 shadow-sm'
                }`}>
                  <Icon size={13} className="text-[#ff7a1a]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] lg:max-w-none">

              {/* Product image */}
              <div className="relative">
                <img
                  src={productImg}
                  alt="CleanBox Pro - Máy dọn vệ sinh mèo tự động"
                  width={520}
                  height={520}
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  loading="eager"
                />

                {/* Subtle glow behind product */}
                <div className={`absolute inset-[15%] rounded-full blur-[60px] z-0 ${
                  d ? 'bg-orange-500/[0.08]' : 'bg-orange-300/20'
                }`} />
              </div>

              {/* Floating app notification card */}
              <div className={`absolute bottom-[8%] left-0 sm:left-[-4%] z-20 rounded-xl px-4 py-3 max-w-[220px] animate-notification ${
                d
                  ? 'bg-[#1a2236] border border-white/[0.08] shadow-2xl shadow-black/40'
                  : 'bg-white border border-gray-200/80 shadow-xl shadow-gray-900/10'
              }`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#16c7a8] to-[#0fa88e] flex items-center justify-center shrink-0 shadow-sm shadow-teal-500/20">
                    <Smartphone size={14} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-semibold truncate ${d ? 'text-white' : 'text-[#172033]'}`}>
                      CleanBox App
                    </p>
                    <p className={`text-[11px] leading-snug mt-0.5 ${d ? 'text-gray-400' : 'text-gray-500'}`}>
                      Boss vừa sử dụng, máy sẽ tự dọn sau 60s
                    </p>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className={`absolute top-[12%] right-[4%] sm:right-0 z-20 rounded-lg px-3 py-1.5 animate-float-delayed ${
                d
                  ? 'bg-[#1a2236] border border-white/[0.08] shadow-lg shadow-black/30'
                  : 'bg-white border border-gray-200/80 shadow-lg shadow-gray-900/5'
              }`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`text-[11px] font-semibold ${d ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Hoạt động
                  </span>
                </div>
              </div>

              {/* Wi-Fi connectivity badge */}
              <div className={`absolute top-[5%] left-[8%] z-20 rounded-lg p-2 animate-float ${
                d
                  ? 'bg-[#1a2236] border border-white/[0.08] shadow-lg shadow-black/30'
                  : 'bg-white border border-gray-200/80 shadow-lg shadow-gray-900/5'
              }`}>
                <Wifi size={14} className={d ? 'text-[#16c7a8]' : 'text-[#16c7a8]'} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
