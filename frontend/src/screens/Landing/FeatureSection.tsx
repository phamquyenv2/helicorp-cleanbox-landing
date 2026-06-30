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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 stagger-children">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div key={index} className={`reveal group p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-default ${isDark ? 'bg-[#1e293b]/50 border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
