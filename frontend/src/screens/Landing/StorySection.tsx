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
                <div key={i} className="reveal relative pl-16 md:pl-24">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-6 top-1.5 w-4 h-4 rounded-full border-[3px] z-10 ${isDark ? 'bg-[#ff7a1a] border-[#0d1321]' : 'bg-[#ff7a1a] border-[#fff8f1]'}`} />
                  
                  <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md ${isDark ? 'bg-[#1e293b]/50 border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[#ff7a1a] font-mono font-bold text-sm bg-[#ff7a1a]/10 px-3 py-1 rounded-full">{step.time}</span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{step.description}</p>
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
