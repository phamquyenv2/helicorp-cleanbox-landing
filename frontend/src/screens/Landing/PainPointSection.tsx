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
              className={`reveal group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isDark
                  ? 'bg-[#172033] border-white/10 hover:border-orange-500/30 hover:shadow-orange-500/10'
                  : 'bg-white border-gray-100 hover:border-orange-500/30 hover:shadow-orange-500/10'
              }`}
            >
              {/* Emoji */}
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">
                {point.emoji}
              </div>
              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                {point.title}
              </h3>
              {/* Description */}
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {point.description}
              </p>
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
