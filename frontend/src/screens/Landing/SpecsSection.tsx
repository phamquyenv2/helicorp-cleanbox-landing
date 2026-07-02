import { Cpu, Box, Maximize, Database, Cat, Camera, ShieldCheck, Wind, Volume2, Layers, Zap, Sparkles, Award } from 'lucide-react';
import { SPECS } from '../../configs/Constants';
import Container from '../../components/common/Container';

const IconMap: Record<string, React.ElementType> = {
  Box, Maximize, Database, Cat, Camera, ShieldCheck, Wind, Volume2, Layers, Zap, Sparkles, Award
};

interface SpecsSectionProps { isDark: boolean; }

export default function SpecsSection({ isDark }: SpecsSectionProps) {
  const d = isDark;
  return (
    <section id="specs" className={`py-20 md:py-28 relative overflow-hidden ${d ? 'bg-[#0b101a]' : 'bg-[#fff8f1]'}`}>
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-orange-500/10 text-orange-400 border border-orange-500/15' : 'bg-orange-50 text-orange-600 border border-orange-200/60'}`}>
            <Cpu size={13} />
            <span>THÔNG SỐ KỸ THUẬT</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Chi tiết cấu hình
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto stagger-children">
          {SPECS.map((spec, i) => {
            const Icon = IconMap[spec.icon || 'Box'] || Box;
            const highlight = spec.highlight;
            
            return (
              <div 
                key={i} 
                className={`reveal p-6 md:p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-start overflow-hidden relative group ${spec.colSpan} ${
                  d 
                    ? 'bg-gradient-to-br from-[#151c2c] to-[#1e1713] border border-orange-500/20 ring-1 ring-orange-500/10' 
                    : 'bg-gradient-to-br from-orange-50/50 to-white border border-orange-200 shadow-md shadow-orange-500/5'
                }`}
              >
                {/* Decorative Background Icon for all cards */}
                <div className={`absolute -right-6 -bottom-6 opacity-[0.03] w-48 h-48 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none ${d ? 'text-orange-300' : 'text-orange-600'}`}>
                   <Icon size={192} />
                </div>
                
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative z-10 transition-transform duration-500 group-hover:scale-110 ${
                  d ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-[#ff7a1a]'
                }`}>
                  <Icon size={24} />
                </div>
                
                <div className="relative z-10">
                  <div className={`text-sm font-extrabold uppercase tracking-widest mb-3 ${
                    d ? 'text-gray-300' : 'text-[#172033]'
                  }`}>
                    {spec.label}
                  </div>
                  <div className={`text-base font-medium leading-relaxed ${d ? 'text-white' : 'text-[#172033]'}`}>
                    {Array.isArray(spec.value) ? (
                      <ul className="space-y-1.5">
                        {spec.value.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${d ? 'bg-orange-400' : 'bg-[#ff7a1a]'}`} />
                            <span className="opacity-90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-lg md:text-xl font-bold">{spec.value}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
