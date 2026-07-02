import { Sparkles, Shield, Smartphone, ArrowRight, Zap, Wifi } from 'lucide-react';
import Container from '../../components/common/Container';

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
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-orange-300/20 to-amber-200/10 blur-[100px] md:h-[420px] md:w-[420px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-teal-300/10 to-cyan-200/5 blur-[80px] md:h-[360px] md:w-[360px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 section-label ${
              d ? 'bg-white/5 border border-white/10 text-orange-300' : 'bg-orange-50 border border-orange-200/60 text-[#ff7a1a]'
            }`}>
              <Sparkles size={13} />
              <span>PET-TECH THÔNG MINH #1 VIỆT NAM</span>
            </div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight mb-6 ${d ? 'text-white' : 'text-[#172033]'}`}>
              Máy dọn vệ sinh mèo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d]">tự động</span>
              {' '}cho nhà sạch thơm mỗi ngày
            </h1>

            {/* Description */}
            <p className={`text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 ${d ? 'text-gray-400' : 'text-gray-500'}`}>
              CleanBox Pro tự động dọn sau khi boss rời đi, khử mùi thông minh, cảm biến an toàn đa điểm và theo dõi trạng thái qua ứng dụng.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                id="hero-cta-primary"
                onClick={() => { scrollTo('#lead-form'); onTrack('cta_click', { eventName: 'hero_register_click', section: 'hero' }); }}
                className="group px-7 py-3.5 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Nhận tư vấn miễn phí
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => { scrollTo('#story'); onTrack('cta_click', { eventName: 'hero_how_it_works', section: 'hero' }); }}
                className={`px-7 py-3.5 rounded-xl font-bold border-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                  d ? 'border-white/15 text-white hover:bg-white/5' : 'border-gray-200 text-[#172033] hover:bg-white hover:shadow-md'
                }`}
              >
                Xem cách hoạt động
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: Sparkles, label: 'Tự động dọn' },
                { icon: Shield, label: 'An toàn tuyệt đối' },
                { icon: Smartphone, label: 'App mobile' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium ${
                  d ? 'bg-white/5 text-gray-300 border border-white/5' : 'bg-white text-gray-600 border border-gray-100 shadow-sm'
                }`}>
                  <Icon size={14} className="text-[#ff7a1a]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className={`absolute -inset-8 rounded-full blur-[60px] ${
                d ? 'bg-orange-500/8' : 'bg-orange-300/15'
              }`} />

              {/* Main card */}
              <div className={`relative w-72 sm:w-80 animate-float rounded-2xl p-8 text-center ${
                d ? 'bg-[#151c2c] border border-white/6 shadow-2xl' : 'bg-white border border-gray-100 shadow-2xl shadow-gray-200/50'
              }`}>
                {/* CB Logo */}
                <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-extrabold text-2xl">CB</span>
                </div>
                <p className={`text-lg font-bold ${d ? 'text-white' : 'text-[#172033]'}`}>CleanBox Pro</p>
                <p className={`text-xs mt-1 ${d ? 'text-gray-500' : 'text-gray-400'}`}>Smart Self-Cleaning Litter Box</p>
                {/* Mini icons */}
                <div className="flex justify-center gap-2 mt-5">
                  {[Zap, Shield, Wifi].map((Icon, i) => (
                    <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Icon size={14} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <div className={`absolute -bottom-6 -left-4 sm:-left-8 animate-notification rounded-xl px-4 py-3 max-w-[240px] z-10 ${
                d ? 'bg-[#151c2c] border border-white/6 shadow-xl' : 'bg-white border border-gray-100 shadow-xl'
              }`}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#16c7a8] to-[#0fa88e] flex items-center justify-center shrink-0">
                    <Smartphone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${d ? 'text-white' : 'text-[#172033]'}`}>CleanBox App</p>
                    <p className={`text-[11px] mt-0.5 ${d ? 'text-gray-400' : 'text-gray-500'}`}>Boss vừa sử dụng, máy sẽ tự dọn sau 60s</p>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className={`absolute -top-3 -right-3 sm:-right-6 animate-float-delayed rounded-lg px-3 py-1.5 z-10 ${
                d ? 'bg-[#151c2c] border border-white/6 shadow-lg' : 'bg-white border border-gray-100 shadow-lg'
              }`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`text-xs font-semibold ${d ? 'text-emerald-400' : 'text-emerald-600'}`}>Đang hoạt động</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
