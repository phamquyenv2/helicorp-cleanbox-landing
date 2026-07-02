import { Cpu } from 'lucide-react';
import { SPECS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface SpecsSectionProps { isDark: boolean; }

export default function SpecsSection({ isDark }: SpecsSectionProps) {
  const d = isDark;
  return (
    <section id="specs" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-blue-500/10 text-blue-400 border border-blue-500/15' : 'bg-blue-50 text-blue-600 border border-blue-200/60'}`}>
            <Cpu size={13} />
            <span>THÔNG SỐ KỸ THUẬT</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Chi tiết sản phẩm
          </h2>
        </div>

        <div className="max-w-2xl mx-auto reveal">
          <div className={`rounded-2xl overflow-hidden ${d ? 'bg-[#151c2c] border border-white/6' : 'bg-white border border-gray-100 shadow-lg'}`}>
            {SPECS.map((spec, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center px-6 py-3.5 ${
                i !== SPECS.length - 1 ? (d ? 'border-b border-white/4' : 'border-b border-gray-50') : ''
              } ${i % 2 === 0 ? (d ? 'bg-white/[0.02]' : 'bg-orange-50/30') : ''}`}>
                <div className={`sm:w-2/5 text-sm font-semibold mb-0.5 sm:mb-0 ${d ? 'text-gray-400' : 'text-gray-500'}`}>{spec.label}</div>
                <div className={`sm:w-3/5 text-sm font-medium ${d ? 'text-white' : 'text-[#172033]'}`}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
