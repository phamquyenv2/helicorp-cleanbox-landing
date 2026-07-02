import { ShieldCheck, Eye, Scale, Lock, MonitorCheck } from 'lucide-react';
import { SAFETY_SENSORS } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface SafetySectionProps { isDark: boolean; }
const sensorIcons = [Eye, Scale, Lock, MonitorCheck];

export default function SafetySection({ isDark }: SafetySectionProps) {
  const d = isDark;
  return (
    <section id="safety" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' : 'bg-emerald-50 text-emerald-600 border border-emerald-200/60'}`}>
            <ShieldCheck size={13} />
            <span>AN TOÀN HÀNG ĐẦU</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${d ? 'text-white' : 'text-[#172033]'}`}>
            An toàn cho boss là ưu tiên số 1
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-500'}`}>
            Hệ thống cảm biến giúp phát hiện khi mèo bước vào, quay lại hoặc đứng gần vùng hoạt động. Nếu phát hiện rủi ro, máy sẽ tự động tạm dừng để bảo vệ boss.
          </p>
        </div>

        {/* Center icon */}
        <div className="flex justify-center mb-12 reveal-scale">
          <div className={`w-28 h-28 rounded-3xl flex items-center justify-center ${
            d ? 'bg-[#151c2c] border border-white/6 shadow-xl' : 'bg-white border border-gray-100 shadow-xl'
          }`}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16c7a8] to-[#0fa88e] flex items-center justify-center shadow-lg shadow-teal-500/20">
              <ShieldCheck size={28} className="text-white" />
            </div>
          </div>
        </div>

        {/* Sensor cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto stagger-children">
          {SAFETY_SENSORS.map((sensor, i) => {
            const Icon = sensorIcons[i] || ShieldCheck;
            return (
              <div key={i} className="reveal p-5 rounded-2xl card-glass card-hover">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${d ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${d ? 'text-white' : 'text-[#172033]'}`}>{sensor.name}</h3>
                    <p className={`text-sm leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>{sensor.description}</p>
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
