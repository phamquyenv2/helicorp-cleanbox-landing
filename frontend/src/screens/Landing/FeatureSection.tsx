import { Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench } from 'lucide-react';
import { FEATURES } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface FeatureSectionProps { isDark: boolean; }

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench,
};

const iconColors = [
  { text: 'text-orange-500', bg: 'bg-orange-50', darkBg: 'bg-orange-500/10', accent: 'bg-orange-500', glow: 'group-hover:shadow-orange-500/20' },
  { text: 'text-teal-500', bg: 'bg-teal-50', darkBg: 'bg-teal-500/10', accent: 'bg-teal-500', glow: 'group-hover:shadow-teal-500/20' },
  { text: 'text-blue-500', bg: 'bg-blue-50', darkBg: 'bg-blue-500/10', accent: 'bg-blue-500', glow: 'group-hover:shadow-blue-500/20' },
  { text: 'text-violet-500', bg: 'bg-violet-50', darkBg: 'bg-violet-500/10', accent: 'bg-violet-500', glow: 'group-hover:shadow-violet-500/20' },
  { text: 'text-emerald-500', bg: 'bg-emerald-50', darkBg: 'bg-emerald-500/10', accent: 'bg-emerald-500', glow: 'group-hover:shadow-emerald-500/20' },
  { text: 'text-rose-500', bg: 'bg-rose-50', darkBg: 'bg-rose-500/10', accent: 'bg-rose-500', glow: 'group-hover:shadow-rose-500/20' },
];

export default function FeatureSection({ isDark }: FeatureSectionProps) {
  const d = isDark;
  
  return (
    <section id="features" className={`py-20 md:py-28 ${d ? 'bg-[#0c111d]' : 'bg-[#fcfaf9]'}`}>
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-5 ${
            d ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200/60'
          }`}>
            TÍNH NĂNG NỔI BẬT
          </div>
          <h2 className={`text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold tracking-tight leading-tight mb-5 ${d ? 'text-white' : 'text-[#172033]'}`}>
            Tại sao chọn CleanBox Pro?
          </h2>
          <p className={`text-base sm:text-lg max-w-[600px] mx-auto ${d ? 'text-gray-400' : 'text-gray-500'}`}>
            Công nghệ tiên tiến được thiết kế tinh tế giúp cuộc sống của sen và boss dễ dàng hơn mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const color = iconColors[i % iconColors.length];
            
            return (
              <div 
                key={i} 
                className={`group relative overflow-hidden p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color.glow} ${
                  d 
                    ? 'bg-[#111827] border border-white/5 hover:bg-[#151c2c] shadow-black/20' 
                    : 'bg-white border border-gray-100 hover:border-transparent'
                }`}
              >
                {/* Accent line on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${color.accent}`} />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  d ? color.darkBg : color.bg
                } ${color.text}`}>
                  <Icon size={28} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                
                <p className={`text-[15px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
