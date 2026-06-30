import { PAIN_POINTS } from '../../configs/Constants';

interface PainPointSectionProps {
  isDark: boolean;
}

export default function PainPointSection({ isDark }: PainPointSectionProps) {
  return (
    <section id="pain-points" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-orange-400' : 'text-[#ff7a1a]'}`}>
            Vấn đề quen thuộc
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#172033]'}`}>
            Sen nào cũng từng gặp
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className={`reveal group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                isDark
                  ? 'bg-[#1e293b]/50 border-white/5 hover:border-white/10'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-lg font-bold pr-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {point.title}
                </h3>
                <span className={`text-2xl font-black font-mono opacity-20 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  0{index + 1}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
