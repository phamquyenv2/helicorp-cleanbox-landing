import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Camera, PackageCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import img1 from '../../assets/PetKit 1.png';
import img2 from '../../assets/PetKit 2.png';
import img3 from '../../assets/PetKit 3.png';
import img4 from '../../assets/PetKit 4.png';

const IMAGES = [img1, img2, img3, img4];

interface HeroSectionProps {
  isDark: boolean;
  onTrack: (eventType: string, extra?: Record<string, unknown>) => void;
}

export default function HeroSection({ isDark, onTrack }: HeroSectionProps) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const d = isDark;

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className={`absolute top-0 right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-40 animate-pulse-glow ${d ? 'bg-[#ff7a1a]/15' : 'bg-orange-300/30'}`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-30 ${d ? 'bg-teal-500/10' : 'bg-teal-200/40'}`} />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 mx-auto lg:mx-0 border backdrop-blur-sm w-fit animate-fade-up
              bg-white/60 border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none">
              <Sparkles size={14} className="text-[#ff7a1a]" />
              <span className={`text-[11px] font-bold tracking-[0.2em] uppercase ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                Thế hệ mới 2026
              </span>
            </div>

            <h1 className={`text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black tracking-tighter leading-[1.02] mb-6 animate-fade-up ${d ? 'text-white' : 'text-[#111827]'}`} style={{ animationDelay: '0.1s' }}>
              <span className="block text-[#ff7a1a] mb-1 sm:mb-2 drop-shadow-sm">PETKIT</span>
              <span className="block opacity-90">Purobot Ultra.</span>
            </h1>

            <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-[34rem] mx-auto lg:mx-0 mb-10 animate-fade-up font-medium ${d ? 'text-gray-400' : 'text-gray-600'}`} style={{ animationDelay: '0.2s' }}>
              Kỷ nguyên mới của sự sạch sẽ. Tích hợp Camera AI giám sát và hệ thống đóng gói rác hoàn toàn tự động đầu tiên trên thế giới.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button
                id="hero-cta-primary"
                onClick={() => { scrollTo('#lead-form'); onTrack('cta_click', { eventName: 'hero_register_click', section: 'hero' }); }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#ff7a1a] hover:bg-[#e56a10] text-white font-bold text-lg rounded-full shadow-xl shadow-orange-500/25 active:scale-[0.98] transition-all overflow-hidden relative"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Nhận tư vấn ngay</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => { scrollTo('#story'); onTrack('cta_click', { eventName: 'hero_how_it_works', section: 'hero' }); }}
                className={`flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-[0.98] border-2
                  ${d ? 'border-white/15 hover:bg-white/5 text-white' : 'border-gray-200 hover:border-gray-300 hover:bg-white text-gray-900 shadow-sm'}`}
              >
                Xem cách hoạt động
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[420px] lg:max-w-[500px]">

              <div className={`relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl transition-transform duration-700 hover:scale-[1.02]
                ${d ? 'bg-zinc-900 border border-white/10 shadow-black/60' : 'bg-gray-100 border border-black/5 shadow-xl shadow-gray-200/80'}`}>

                {IMAGES.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`PETKIT Purobot Ultra ${idx + 1}`}
                    width={500}
                    height={625}
                    fetchpriority={idx === 0 ? "high" : "auto"}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-in-out ${idx === currentImageIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.08] z-0'} group-hover:scale-[1.04]`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10 pointer-events-none mix-blend-overlay z-20" />
                
                <div className="absolute top-6 left-6 z-30 animate-float-delayed hover:scale-105 transition-transform cursor-default">
                  <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-md border shadow-lg ${d ? 'bg-black/40 border-white/10' : 'bg-white/70 border-white'}`}>
                    <div className={`p-1.5 rounded-full ${d ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                      <Camera size={14} className="text-[#ff7a1a]" />
                    </div>
                    <span className={`text-xs font-bold ${d ? 'text-white' : 'text-gray-900'}`}>Camera AI 360°</span>
                  </div>
                </div>

                <div className="absolute bottom-14 right-6 z-30 animate-float hover:scale-105 transition-transform cursor-default">
                  <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-md border shadow-lg ${d ? 'bg-black/40 border-white/10' : 'bg-white/70 border-white'}`}>
                    <div className={`p-1.5 rounded-full ${d ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                      <PackageCheck size={14} className="text-[#ff7a1a]" />
                    </div>
                    <span className={`text-xs font-bold ${d ? 'text-white' : 'text-gray-900'}`}>Tự đóng gói rác</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
                  {IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIdx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
