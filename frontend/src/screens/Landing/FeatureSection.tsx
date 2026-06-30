import { Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench } from 'lucide-react';
import { FEATURES } from '../../configs/Constants';

interface FeatureSectionProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench,
};

export default function FeatureSection({ isDark }: FeatureSectionProps) {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className={`absolute inset-0 ${isDark ? 'bg-[#0d1321]' : 'bg-gradient-to-b from-orange-50/50 to-transparent'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 text-[#16c7a8]`}>Tính năng nổi bật</span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-[#172033]'}`}>Tại sao chọn CleanBox Pro?</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Công nghệ tiên tiến giúp cuộc sống của sen và boss dễ dàng hơn mỗi ngày</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div key={index} className={`reveal group relative p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default ${isDark ? 'bg-[#172033] border-white/10 hover:border-[#16c7a8]/30' : 'bg-white border-gray-100 hover:border-[#16c7a8]/30'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 ${isDark ? 'bg-[#16c7a8]/15' : 'bg-[#16c7a8]/10'}`}>
                  <Icon size={24} className="text-[#16c7a8]" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#172033]'}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
