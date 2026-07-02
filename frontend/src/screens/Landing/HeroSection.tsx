import { Shield, Smartphone, ArrowRight, Camera, PackageCheck, Wifi } from 'lucide-react';
import Container from '../../components/common/Container';
import productImg from '../../assets/PETKIT Purobot Ultra.jpg';

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
    <section id="hero" className="relative overflow-hidden min-h-[95vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Animated ambient background & particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow ${d ? 'bg-orange-500/[0.06]' : 'bg-orange-200/30'
          }`} />
        <div className={`absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] animate-float ${d ? 'bg-teal-500/[0.04]' : 'bg-teal-200/20'
          }`} />

        {/* Floating particles (Stars/Dust) */}
        <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-orange-400/50 animate-float blur-[1px]" />
        <div className="absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full bg-teal-400/50 animate-float-delayed blur-[1px]" />
        <div className="absolute bottom-[30%] left-[40%] w-3 h-3 rounded-full bg-amber-300/40 animate-pulse blur-[2px]" />
        <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-orange-300/60 animate-float blur-[1px]" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] font-extrabold leading-[1.15] tracking-tight mb-5 ${d ? 'text-white' : 'text-[#172033]'}`}>
              <span className="block text-xl sm:text-2xl lg:text-[1.75rem] text-[#ff7a1a] mb-2 lg:mb-3 tracking-wide">PETKIT PUROBOT ULTRA</span>
              Máy dọn vệ sinh mèo tự động cho nhà sạch thơm mỗi ngày
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0 ${d ? 'text-gray-400' : 'text-gray-500'}`}>
              Đột phá công nghệ với Camera AI thông minh và hệ thống tự động niêm phong túi rác. Không chạm tay, không lọt mùi, theo dõi sức khỏe boss qua điện thoại.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button
                id="hero-cta-primary"
                onClick={() => { scrollTo('#lead-form'); onTrack('cta_click', { eventName: 'hero_register_click', section: 'hero' }); }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff7a1a] hover:bg-[#e56a10] text-white font-bold text-[15px] rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-[0.97] transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Shiny sweep effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Nhận tư vấn miễn phí</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => { scrollTo('#story'); onTrack('cta_click', { eventName: 'hero_how_it_works', section: 'hero' }); }}
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-[15px] border-2 transition-all active:scale-[0.97] cursor-pointer ${d
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
                { icon: Camera, label: 'Camera AI góc rộng' },
                { icon: PackageCheck, label: 'Niêm phong túi tự động' },
                { icon: Shield, label: '20 Cảm biến an toàn' },
              ].map(({ icon: Icon, label }, idx) => (
                <div key={label} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-transform hover:-translate-y-0.5 ${d
                  ? 'bg-white/[0.04] text-gray-300 border border-white/[0.06] hover:bg-white/[0.08]'
                  : 'bg-white/80 text-gray-600 border border-gray-200/80 shadow-sm hover:shadow-md'
                  }`}>
                  <Icon size={13} className="text-[#ff7a1a]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] lg:max-w-[540px]">

              {/* Subtle ambient glow behind the container */}
              <div className={`absolute -inset-6 rounded-[3rem] blur-[50px] z-0 animate-pulse-glow opacity-60 ${d ? 'bg-orange-500/20' : 'bg-orange-400/30'
                }`} />

              {/* Abstract decorative background typography (Hidden on small screens) */}
              <div className="absolute top-[5%] right-full mr-[-4rem] z-0 select-none pointer-events-none origin-bottom-right -rotate-90 hidden lg:block opacity-70">
                <span className={`text-[7rem] font-black uppercase tracking-tighter leading-none ${d ? 'text-white/[0.02]' : 'text-gray-900/[0.03]'}`}>
                  PETKIT
                </span>
              </div>
              <div className="absolute bottom-[2%] left-full ml-[-2rem] z-0 select-none pointer-events-none origin-top-left -rotate-90 hidden lg:block opacity-70">
                <span className={`text-[6rem] font-black uppercase tracking-tighter leading-none ${d ? 'text-white/[0.02]' : 'text-gray-900/[0.03]'}`}>
                  ULTRA
                </span>
              </div>

              {/* Framed product image */}
              <div className={`relative z-10 w-full aspect-square sm:aspect-auto rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group ${d ? 'border-4 border-white/10 shadow-black/50' : 'border-[6px] border-white/70 shadow-orange-900/10'
                }`}>

                {/* Sleek Product Name Overlay */}
                <div className="absolute top-6 left-8 sm:top-8 sm:left-10 z-20 animate-fade-up">
                  <div className="flex flex-col">
                    <span className={`text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase mb-1 ${d ? 'text-orange-400' : 'text-[#ff7a1a]'}`}>
                      New Release
                    </span>
                    <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${d ? 'text-white' : 'text-gray-900'}`}>
                      PETKIT
                    </h2>
                    <h3 className={`text-lg sm:text-xl font-bold tracking-wide ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                      Purobot Ultra
                    </h3>
                  </div>
                </div>

                <img
                  src={productImg}
                  alt="PETKIT Purobot Ultra - Máy dọn vệ sinh mèo tự động"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-[1.06]"
                  loading="eager"
                />

                {/* Gradient overlay for grounding and depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none mix-blend-overlay" />
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
