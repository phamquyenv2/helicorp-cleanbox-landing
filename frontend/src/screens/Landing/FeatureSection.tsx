import { useEffect, useRef, useState } from 'react';
import { Camera, Activity, PackageCheck, Users, ShieldCheck, Maximize, Wind, Moon, Droplets, Sparkles, ArrowUpRight } from 'lucide-react';
import { FEATURES } from '../../configs/Constants';
import Container from '../../components/common/Container';
import productImg from '../../assets/camera quan sát mèo.webp';

// Import Assets for cards
import imgHealth from '../../assets/Camera AI theo dõi tình trạng sức khỏe qua phân.webp';
import gifSeal from '../../assets/Niêm phong tự động.gif';
import imgMultiCat from '../../assets/Camera AI nhận diện nhiều mèo.webp';
import imgCabin from '../../assets/20 ngày k dọn.gif';
import imgDeodor from '../../assets/Hệ thống khử mùi 4 tầng.webp';
import imgQuiet from '../../assets/Vận hành êm ỉ không ồn.webp';
import gifPad from '../../assets/Nâng cấp lót đáy.gif';
import imgSensors from '../../assets/PETKIT Purobot Ultra.webp';

const featureImages: string[] = [
  productImg,   // 0: AI Camera
  imgHealth,    // 1: Health
  gifSeal,      // 2: Auto-sealing
  imgMultiCat,  // 3: Multi-cat
  imgSensors,   // 4: 20 Sensors
  imgCabin,     // 5: 70L Cabin
  imgDeodor,    // 6: Deodorization
  imgQuiet,     // 7: Quiet
  gifPad,       // 8: Bottom Pad
];

interface FeatureSectionProps { isDark: boolean; }

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number | string }>> = {
  Camera, Activity, PackageCheck, Users, ShieldCheck, Maximize, Wind, Moon, Droplets, Sparkles
};

export default function FeatureSection({ isDark }: FeatureSectionProps) {
  const d = isDark;
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className={`relative py-20 ${d ? 'bg-[#0a0f18]' : 'bg-[#f8f9fa]'}`}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 reveal">
          <div className="max-w-2xl">
            <h2 className={`text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-tighter leading-[1.1] mb-6 ${d ? 'text-white' : 'text-[#111827]'}`}>
              Công nghệ tiên phong. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a1a] to-orange-400">Trải nghiệm rảnh tay.</span>
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Khám phá 9 tính năng đột phá được trang bị trên CleanBox Pro Ultra, tái định nghĩa hoàn toàn tiêu chuẩn chăm sóc thú cưng hiện đại.
            </p>
          </div>
          <div className="shrink-0 pb-2">
            <a href="#buy" className={`inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider ${d ? 'text-[#ff7a1a] hover:text-orange-400' : 'text-[#e56a10] hover:text-[#ff7a1a]'} transition-colors`}>
              Đặt hàng ngay <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-start">

          {/* Left: Scrollable Content */}
          <div className="w-full md:w-1/2 relative z-10 px-4 md:px-0">
            {FEATURES.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  ref={el => { stepRefs.current[i] = el; }}
                  data-index={i}
                  className="min-h-[60vh] md:min-h-screen flex items-center justify-start py-10 md:py-20 transition-opacity duration-700 snap-center"
                  style={{ opacity: isActive ? 1 : 0.2 }}
                >
                  <div className={`p-8 md:p-12 rounded-[2.5rem] w-full max-w-[500px] transition-all duration-700 relative ${isActive ? 'scale-100 translate-x-0' : 'scale-95 -translate-x-4'} ${d ? 'bg-[#151c2c]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' : 'bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl shadow-gray-200/50'
                    }`}>
                    {/* Number Badge at Top Right Corner */}
                    <div className={`absolute top-6 right-6 md:top-8 md:right-8 font-mono text-sm font-bold px-3 py-1 rounded-full tracking-widest ${d ? 'bg-[#ff7a1a]/10 text-[#ff7a1a]' : 'bg-orange-50 text-[#e56a10]'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${d ? 'bg-gradient-to-br from-[#ff7a1a]/20 to-orange-500/10 text-[#ff7a1a]' : 'bg-gradient-to-br from-orange-50 to-[#ff7a1a]/10 text-[#e56a10]'}`}>
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className={`text-2xl md:text-[2rem] font-extrabold mb-4 leading-tight tracking-tight ${d ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                    <p className={`text-base md:text-lg leading-relaxed whitespace-pre-line ${d ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Image Container */}
          <div className="hidden md:flex w-1/2 sticky top-0 h-screen items-center justify-center pl-10 lg:pl-20">
            <div className={`relative w-full max-w-[600px] aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${d ? 'bg-[#0e1525] border border-white/5 shadow-black/80' : 'bg-gray-100 border border-gray-200 shadow-gray-300/50'}`}>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a1a]/20 via-transparent to-orange-500/10 animate-pulse-glow" />

              {/* Images crossfade */}
              {featureImages.map((imgSrc, idx) => {
                const isProductImg = imgSrc === productImg;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${activeStep === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                  >
                    <img
                      src={imgSrc}
                      alt={FEATURES[idx].title}
                      className={`w-full h-full transition-transform duration-1000 ${isProductImg ? 'object-contain mix-blend-screen scale-90 drop-shadow-2xl' : 'object-cover'}`}
                    />
                    {/* Gradient Overlay for better contrast */}
                    {!isProductImg && (
                      <div className={`absolute inset-0 bg-gradient-to-t ${d ? 'from-[#0e1525]/80 via-transparent' : 'from-gray-100/80 via-transparent'} to-transparent`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
