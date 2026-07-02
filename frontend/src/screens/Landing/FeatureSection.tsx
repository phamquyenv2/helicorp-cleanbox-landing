import { Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench } from 'lucide-react';
import { FEATURES } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface FeatureSectionProps { isDark: boolean; }

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Wind, ShieldCheck, Smartphone, Maximize, Wrench,
};

const iconColors = [
  { bg: 'bg-orange-50', text: 'text-orange-500', darkBg: 'bg-orange-500/10' },
  { bg: 'bg-teal-50', text: 'text-teal-500', darkBg: 'bg-teal-500/10' },
  { bg: 'bg-blue-50', text: 'text-blue-500', darkBg: 'bg-blue-500/10' },
  { bg: 'bg-violet-50', text: 'text-violet-500', darkBg: 'bg-violet-500/10' },
  { bg: 'bg-emerald-50', text: 'text-emerald-500', darkBg: 'bg-emerald-500/10' },
  { bg: 'bg-rose-50', text: 'text-rose-500', darkBg: 'bg-rose-500/10' },
];

export default function FeatureSection({ isDark }: FeatureSectionProps) {
  const d = isDark;
  return (
    <section id="features" className={`py-20 md:py-28 ${d ? 'bg-[#0e1525]' : 'bg-orange-50/40'}`}>
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-teal-500/10 text-teal-400 border border-teal-500/15' : 'bg-teal-50 text-teal-600 border border-teal-200/60'}`}>
            TÍNH NĂNG NỔI BẬT
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${d ? 'text-white' : 'text-[#172033]'}`}>
            Tại sao chọn CleanBox Pro?
          </h2>
          <p className={`text-base max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-500'}`}>
            Công nghệ tiên tiến giúp cuộc sống của sen và boss dễ dàng hơn mỗi ngày
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const color = iconColors[i];
            return (
              <div key={i} className="reveal p-6 rounded-2xl card-glass card-hover">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${d ? color.darkBg : color.bg} ${color.text}`}>
                  <Icon size={20} />
                </div>
                <h3 className={`text-base font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
