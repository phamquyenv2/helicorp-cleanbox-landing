import { ShieldCheck } from 'lucide-react';
import { SAFETY_SENSORS } from '../../configs/Constants';

interface SafetySectionProps { isDark: boolean; }

export default function SafetySection({ isDark }: SafetySectionProps) {
  return (
    <section id="safety" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-red-400' : 'text-red-500'}`}>An toàn hàng đầu</span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-[#172033]'}`}>An toàn cho boss là ưu tiên số 1</h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hệ thống cảm biến giúp phát hiện khi mèo bước vào, quay lại hoặc đứng gần vùng hoạt động. Nếu phát hiện rủi ro, máy sẽ tự động tạm dừng để bảo vệ boss.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center product visual */}
          <div className="flex justify-center mb-12 reveal-scale">
            <div className={`w-48 h-48 md:w-56 md:h-56 rounded-3xl flex items-center justify-center relative ${isDark ? 'bg-gradient-to-br from-[#1e293b] to-[#172033] border border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-2xl'}`}>
              <ShieldCheck size={64} className="text-[#16c7a8]" />
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#16c7a8]/30 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Sensor cards grid */}
          <div className="grid sm:grid-cols-2 gap-5 stagger-children">
            {SAFETY_SENSORS.map((sensor, i) => (
              <div key={i} className={`reveal group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-[#172033] border-white/10 hover:border-[#16c7a8]/30' : 'bg-white border-gray-100 hover:border-[#16c7a8]/30'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-[#16c7a8]/15' : 'bg-[#16c7a8]/10'}`}>
                    <ShieldCheck size={18} className="text-[#16c7a8]" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-[#172033]'}`}>{sensor.name}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{sensor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
