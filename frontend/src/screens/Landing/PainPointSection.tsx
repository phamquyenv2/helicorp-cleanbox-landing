import { Droplets, Clock, AlertTriangle } from 'lucide-react';
import { PAIN_POINTS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface PainPointSectionProps { isDark: boolean; }

const icons = [Droplets, Clock, AlertTriangle];

export default function PainPointSection({ isDark }: PainPointSectionProps) {
  const d = isDark;
  
  return (
    <section id="pain-points" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-50 ${
        d ? 'bg-amber-500/5' : 'bg-amber-200/20'
      }`} />
      
      <Container className="relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-5 ${
            d ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-600 border border-amber-200/60'
          }`}>
            VẤN ĐỀ QUEN THUỘC
          </div>
          <h2 className={`text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold tracking-tight leading-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Sen nào cũng <span className={d ? 'text-amber-400' : 'text-amber-500'}>từng gặp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((point, i) => {
            const Icon = icons[i];
            const isLast = i === PAIN_POINTS.length - 1;
            
            return (
              <div 
                key={i} 
                className={`group relative overflow-hidden p-8 sm:p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  d 
                    ? 'bg-[#111827] border border-white/5 hover:border-amber-500/30 hover:bg-[#151c2c]' 
                    : 'bg-white border border-gray-100 hover:border-amber-400/40'
                }`}
              >

                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    d ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-500'
                  }`}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                    {point.title}
                  </h3>
                  
                  <p className={`text-[15px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
