import { Cat, RotateCw, Bell, Home } from 'lucide-react';
import { STORY_STEPS } from '../../configs/Constants';

interface StorySectionProps { isDark: boolean; }

const storyIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { Cat, RotateCw, Bell, Home };

export default function StorySection({ isDark }: StorySectionProps) {
  return (
    <section id="story" className="py-20 md:py-28 relative">
      <div className={`absolute inset-0 ${isDark ? 'bg-[#0d1321]' : 'bg-gradient-to-b from-orange-50/30 to-transparent'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-orange-400' : 'text-[#ff7a1a]'}`}>Scrollytelling</span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#172033]'}`}>Một ngày cùng boss và CleanBox Pro</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

          <div className="space-y-12 stagger-children">
            {STORY_STEPS.map((step, i) => {
              const Icon = storyIcons[step.icon] || Cat;
              return (
                <div key={i} className="reveal relative pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full border-4 z-10 ${isDark ? 'bg-[#ff7a1a] border-[#101827]' : 'bg-[#ff7a1a] border-[#fff8f1]'}`} />
                  
                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-[#172033] border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-[#ff7a1a]/15' : 'bg-[#ff7a1a]/10'}`}>
                        <Icon size={18} className="text-[#ff7a1a]" />
                      </div>
                      <span className="text-[#ff7a1a] font-bold text-lg">{step.time}</span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#172033]'}`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
