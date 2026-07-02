import { Cat, RotateCw, Bell, Home } from 'lucide-react';
import { STORY_STEPS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface StorySectionProps { isDark: boolean; }
const storyIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { Cat, RotateCw, Bell, Home };

export default function StorySection({ isDark }: StorySectionProps) {
  const d = isDark;
  return (
    <section id="story" className={`py-20 md:py-28 ${d ? 'bg-[#0e1525]' : 'bg-orange-50/40'}`}>
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-violet-500/10 text-violet-400 border border-violet-500/15' : 'bg-violet-50 text-violet-600 border border-violet-200/60'}`}>
            MỘT NGÀY CÙNG BOSS
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Một ngày cùng boss và CleanBox Pro
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className={`absolute left-[19px] top-0 bottom-0 w-[2px] ${d ? 'bg-white/6' : 'bg-gray-200'}`} />

          <div className="space-y-5 stagger-children">
            {STORY_STEPS.map((step, i) => {
              const Icon = storyIcons[step.icon] || Cat;
              return (
                <div key={i} className="reveal relative pl-12">
                  {/* Dot */}
                  <div className={`absolute left-[12px] top-6 w-[16px] h-[16px] rounded-full border-[3px] z-10 ${
                    d ? 'bg-[#ff7a1a] border-[#0e1525]' : 'bg-[#ff7a1a] border-[#fff8f1]'
                  }`} />

                  <div className="p-5 sm:p-6 rounded-2xl card-glass card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${d ? 'bg-white/5 text-gray-300' : 'bg-gray-50 text-gray-600'}`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-[#ff7a1a] font-mono font-bold text-sm bg-[#ff7a1a]/8 px-3 py-0.5 rounded-full">{step.time}</span>
                    </div>
                    <h3 className={`text-base font-bold mb-1.5 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
