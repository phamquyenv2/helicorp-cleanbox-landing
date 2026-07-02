import { useEffect, useRef } from 'react';
import { Cat, Activity, Smartphone, PackageCheck } from 'lucide-react';
import { STORY_STEPS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface StorySectionProps { isDark: boolean; }
const storyIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { Cat, Activity, Smartphone, PackageCheck };

export default function StorySection({ isDark }: StorySectionProps) {
  const d = isDark;
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="story" className={`relative py-24 lg:py-32 overflow-hidden ${d ? 'bg-[#0a0f18]' : 'bg-[#fcfaf9]'}`}>
      <Container>
        <div ref={addToRefs} className="text-center mb-24 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-violet-500/10 text-violet-400 border border-violet-500/15' : 'bg-violet-50 text-violet-600 border border-violet-200/60'}`}>
            KỶ NGUYÊN RẢNH TAY
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Trải nghiệm hoàn toàn tự động
          </h2>
          <p className={`mt-5 max-w-2xl mx-auto text-lg ${d ? 'text-gray-400' : 'text-gray-500'}`}>
            Hành trình chăm sóc thú cưng được tối ưu hóa đến từng chi tiết, giải phóng bạn hoàn toàn khỏi những rắc rối thường ngày.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* The Trail Line */}
          <div className={`absolute top-4 bottom-4 left-[32px] md:left-1/2 w-1 -translate-x-1/2 border-l-2 border-dashed ${d ? 'border-violet-500/20' : 'border-violet-300'}`} />

          <div className="flex flex-col gap-14 md:gap-20 relative z-10">
            {STORY_STEPS.map((step, i) => {
              const Icon = storyIcons[step.icon] || Cat;
              const isEven = i % 2 === 0;
              
              return (
                <div key={i} ref={addToRefs} className={`flex flex-col md:flex-row items-center w-full reveal ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                    <div className={`p-8 md:p-10 rounded-[2rem] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative group ${d ? 'bg-[#151c2c] border border-white/5 shadow-black/40' : 'bg-white border border-gray-100 shadow-violet-900/5'}`}>
                      
                      {/* Decorative glowing blob on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none`} />

                      <div className={`inline-flex items-center gap-3 mb-5 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`font-mono font-bold text-sm tracking-widest px-4 py-1.5 rounded-full ${d ? 'bg-violet-500/20 text-violet-300' : 'bg-violet-50 text-violet-600'}`}>
                          {step.time}
                        </span>
                      </div>
                      <h3 className={`text-2xl font-extrabold mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                      <p className={`text-base md:text-lg leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                    </div>
                  </div>

                  {/* The Trail Marker */}
                  <div className={`absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-[6px] z-20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-violet-500/30 ${d ? 'bg-[#0a0f18] border-[#0a0f18]' : 'bg-[#fcfaf9] border-[#fcfaf9]'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-inner ${d ? 'bg-gradient-to-br from-violet-500 to-purple-600' : 'bg-gradient-to-br from-violet-500 to-purple-600'}`}>
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Empty Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
