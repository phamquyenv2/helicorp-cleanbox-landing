interface FooterProps { isDark: boolean; }

export default function Footer({ isDark }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t ${isDark ? 'bg-[#0a0f1a] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                Clean<span className="text-[#ff7a1a]">Box</span> Pro
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Máy dọn vệ sinh mèo tự động thông minh — Nhà sạch thơm, boss an toàn, sen nhàn hơn mỗi ngày.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDark ? 'text-white' : 'text-[#172033]'}`}>Sản phẩm</h4>
            <ul className="space-y-2">
              {['CleanBox Lite', 'CleanBox Pro', 'CleanBox Pro Plus'].map((item) => (
                <li key={item}>
                  <a href="#products" className={`text-sm transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-[#172033]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDark ? 'text-white' : 'text-[#172033]'}`}>Hỗ trợ</h4>
            <ul className="space-y-2">
              {['FAQ', 'Bảo hành', 'Liên hệ', 'Hướng dẫn sử dụng'].map((item) => (
                <li key={item}>
                  <a href="#faq" className={`text-sm transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-[#172033]'}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDark ? 'text-white' : 'text-[#172033]'}`}>Liên hệ</h4>
            <ul className="space-y-2">
              <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>📧 support@cleanbox.vn</li>
              <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>📞 1900 xxxx</li>
              <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>📍 TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t text-center ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {year} CleanBox. Đây là sản phẩm demo cho bài test HELICORP.
          </p>
        </div>
      </div>
    </footer>
  );
}
