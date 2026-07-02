import { Droplets, Clock, AlertTriangle } from 'lucide-react';
import { PAIN_POINTS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface PainPointSectionProps { isDark: boolean; }

const icons = [Droplets, Clock, AlertTriangle];

export default function PainPointSection({ isDark }: PainPointSectionProps) {
  const d = isDark;
  return (
    <section id="pain-points" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-amber-500/10 text-amber-400 border border-amber-500/15' : 'bg-amber-50 text-amber-600 border border-amber-200/60'}`}>
            VẤN ĐỀ QUEN THUỘC
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Sen nào cũng từng gặp
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 stagger-children">
          {PAIN_POINTS.map((point, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="reveal p-6 rounded-2xl card-glass card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${d ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-sm font-mono font-bold ${d ? 'text-white/10' : 'text-gray-200'}`}>0{i + 1}</span>
                </div>
                <h3 className={`text-base font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{point.title}</h3>
                <p className={`text-sm leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>{point.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
