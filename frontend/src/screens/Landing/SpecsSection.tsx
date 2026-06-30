import { SPECS } from '../../configs/Constants';

interface SpecsSectionProps { isDark: boolean; }

export default function SpecsSection({ isDark }: SpecsSectionProps) {
  return (
    <section id="specs" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
            Thông số kỹ thuật
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#172033]'}`}>
            Chi tiết sản phẩm
          </h2>
        </div>

        {/* Desktop: table-like, Mobile: cards */}
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-[#172033] border-white/10' : 'bg-white border-gray-100 shadow-lg'}`}>
            {SPECS.map((spec, i) => (
              <div
                key={i}
                className={`reveal flex flex-col sm:flex-row sm:items-center px-6 py-4 ${
                  i !== SPECS.length - 1
                    ? isDark ? 'border-b border-white/5' : 'border-b border-gray-50'
                    : ''
                } ${i % 2 === 0 ? (isDark ? 'bg-white/[0.02]' : 'bg-orange-50/30') : ''}`}
              >
                <div className={`sm:w-2/5 text-sm font-semibold mb-1 sm:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {spec.label}
                </div>
                <div className={`sm:w-3/5 text-sm font-medium ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
