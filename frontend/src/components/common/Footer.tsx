import { Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';

interface FooterProps { isDark: boolean; }

export default function Footer({ isDark }: FooterProps) {
  const year = new Date().getFullYear();
  const d = isDark;

  return (
    <footer className={`relative overflow-hidden py-14 border-t ${d ? 'bg-[#080c15] border-white/[0.04]' : 'bg-gray-50/80 border-gray-100'}`}>
      {/* Subtle gradient */}
      <div className={`absolute inset-0 pointer-events-none ${d ? 'bg-gradient-to-t from-[#0c111d]/50 to-transparent' : ''}`} />

      <Container className="relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center shadow-lg shadow-orange-500/15">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className={`font-bold text-lg tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
                Clean<span className="text-[#ff7a1a]">Box</span> Pro
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${d ? 'text-gray-500' : 'text-gray-500'}`}>
              Máy dọn vệ sinh mèo tự động thông minh — Nhà sạch thơm, boss an toàn, sen nhàn hơn mỗi ngày.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-bold text-sm mb-4 uppercase tracking-wider ${d ? 'text-gray-300' : 'text-[#172033]'}`}>Sản phẩm</h4>
            <ul className="space-y-2.5">
              {['CleanBox Lite', 'CleanBox Pro', 'CleanBox Pro Plus'].map((item) => (
                <li key={item}>
                  <a href="#products" className={`text-sm transition-colors hover:translate-x-0.5 inline-block ${d ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-[#ff7a1a]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-sm mb-4 uppercase tracking-wider ${d ? 'text-gray-300' : 'text-[#172033]'}`}>Hỗ trợ</h4>
            <ul className="space-y-2.5">
              {['FAQ', 'Bảo hành', 'Liên hệ', 'Hướng dẫn sử dụng'].map((item) => (
                <li key={item}>
                  <a href="#faq" className={`text-sm transition-colors ${d ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-[#ff7a1a]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-sm mb-4 uppercase tracking-wider ${d ? 'text-gray-300' : 'text-[#172033]'}`}>Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className={d ? 'text-gray-500' : 'text-gray-400'} />
                <span className={`text-sm ${d ? 'text-gray-500' : 'text-gray-500'}`}>support@cleanbox.vn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className={d ? 'text-gray-500' : 'text-gray-400'} />
                <span className={`text-sm ${d ? 'text-gray-500' : 'text-gray-500'}`}>1900 xxxx</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className={d ? 'text-gray-500' : 'text-gray-400'} />
                <span className={`text-sm ${d ? 'text-gray-500' : 'text-gray-500'}`}>TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${d ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent' : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'}`} />

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className={`text-sm ${d ? 'text-gray-600' : 'text-gray-400'}`}>
            © {year} CleanBox Pro. Đây là sản phẩm demo cho bài test HELICORP.
          </p>
        </div>
      </Container>
    </footer>
  );
}
