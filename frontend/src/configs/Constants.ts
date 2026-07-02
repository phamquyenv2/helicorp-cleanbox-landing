import type { Product } from './Types';

export const PRODUCTS: Product[] = [
  {
    id: 'purobot-ultra-standard',
    name: 'PETKIT Purobot Ultra',
    slug: 'petkit-purobot-ultra',
    price: 19800000,
    compareAtPrice: 38000000,
    badge: 'Ưu đãi khủng',
    shortDescription: 'Cỗ máy dọn vệ sinh AI đỉnh cao. Tặng kèm gói bảo hành 24 tháng và quà tặng hấp dẫn.',
    imageUrl: '/products/cleanbox-lite.webp',
    features: [
      'Máy PETKIT Purobot Ultra',
      'Tặng 1 Kệ gỗ máy ăn HeLiPet',
      'Tặng 1 Bịch cát pH PETKIT',
      'Bảo hành chính hãng 24 tháng (18+6)',
      'Giao hàng hỏa tốc 2h nội thành',
    ],
    isActive: true,
  },
  {
    id: 'combo-purobot-dreame',
    name: 'Combo Vệ Sinh Không Tì Vết',
    slug: 'combo-purobot-dreame',
    price: 25010000,
    compareAtPrice: 27790000,
    badge: 'Bán chạy nhất',
    shortDescription: 'Rẻ hơn mua lẻ máy! Combo PETKIT Purobot Ultra và Máy hút bụi lau nhà thông minh Dreame.',
    imageUrl: '/products/cleanbox-pro.webp',
    features: [
      'Máy PETKIT Purobot Ultra',
      'Máy hút bụi lau nhà Dreame H12 Pro',
      'Tiết kiệm hơn so với mua lẻ từng món',
      'Tối ưu tự động hóa dọn dẹp nhà cửa',
      'Hỗ trợ trả góp 0% qua thẻ tín dụng',
    ],
    isActive: true,
  },
  {
    id: 'combo-purobot-levoit',
    name: 'Combo Không Khí Sạch',
    slug: 'combo-purobot-levoit',
    price: 20780000,
    compareAtPrice: 23090000,
    badge: 'Bảo vệ hô hấp',
    shortDescription: 'Sự kết hợp hoàn hảo giữa máy dọn vệ sinh AI và Máy lọc không khí Levoit hàng đầu.',
    imageUrl: '/products/cleanbox-pro-plus.webp',
    features: [
      'Máy PETKIT Purobot Ultra',
      'Máy lọc không khí Levoit Vital 100s',
      'Loại bỏ 100% mùi hôi thú cưng',
      'Bảo vệ hệ hô hấp cho bé và gia đình',
      'Bảo hành chính hãng toàn quốc',
    ],
    isActive: true,
  },
];

export const FEATURES = [
  {
    icon: 'Camera',
    title: 'Camera AI & Đàm thoại',
    description: 'Tích hợp Camera AI xoay 180°, quan sát 210° và hỗ trợ đàm thoại 2 chiều giúp bạn tương tác với mèo mọi lúc.',
  },
  {
    icon: 'Activity',
    title: 'Phân tích sức khỏe qua AI',
    description: 'Tự động phân tích màu sắc chất thải để phát hiện sớm các dấu hiệu bệnh lý và gửi cảnh báo trực tiếp qua ứng dụng.',
  },
  {
    icon: 'PackageCheck',
    title: 'Tự động niêm phong túi rác',
    description: 'Hệ thống tự động hàn kín miệng túi rác chỉ với 1 chạm. Không tiếp xúc chất thải, không lọt mùi hôi ra ngoài.',
  },
  {
    icon: 'Users',
    title: 'Nhận diện đa thú cưng',
    description: 'Camera AI nhận diện chính xác từng bé mèo qua kiểu lông và kích thước, lập hồ sơ theo dõi chi tiết cho từng bé.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Hệ thống 20 cảm biến an toàn',
    description: 'Trang bị cảm biến tiệm cận, trọng lượng và Hall. Tự động dừng ngay lập tức khi phát hiện mèo tiến lại gần.',
  },
  {
    icon: 'Maximize',
    title: '20 ngày không dọn',
    description: 'Hộc rác chứa chất thải của PETKIT Purobot Ultra được nâng cấp với dung tích lớn lên đến 10L, đáp ứng nhu cầu sử dụng trong thời gian dài mà không cần đổ rác thường xuyên.\n\nVới gia đình nuôi 1 bé mèo, máy có thể chứa chất thải trong khoảng 20 ngày, giúp bạn tiết kiệm đáng kể thời gian và công sức dọn dẹp mỗi ngày.',
  },
  {
    icon: 'Wind',
    title: 'Khử mùi thông minh N60',
    description: 'Hệ thống khử mùi 4 tầng kết hợp sáp N60 và hộp chứa rác đóng kín ngăn chặn 100% mùi hôi phát tán ra ngoài.',
  },
  {
    icon: 'Moon',
    title: 'Vận hành êm ái 36dB',
    description: 'Motor chống ồn hoạt động cực kỳ tĩnh lặng, tương đương tiếng lá rơi, không gây sợ hãi cho mèo và không ảnh hưởng giấc ngủ của bạn.',
  },
  {
    icon: 'Droplets',
    title: 'Tấm lót đáy chống dính',
    description: 'Được nâng cấp với chất liệu chống thấm, chống trầy xước và hạn chế tối đa tình trạng dính cát, dễ dàng vệ sinh.',
  },
];

export const PAIN_POINTS = [
  {
    title: 'Nhà có mùi dù thay cát thường xuyên',
    description: 'Mùi hôi vẫn tồn tại vì phân và nước tiểu ngấm vào cát lâu trước khi được xúc đi.',
  },
  {
    title: 'Bận rộn, không thể xúc cát mỗi ngày',
    description: 'Công việc bận rộn, về nhà mệt mỏi, dọn khay mèo trở thành gánh nặng hàng ngày.',
  },
  {
    title: 'Lo lắng khi để mèo ở nhà một mình',
    description: 'Đi công tác, du lịch mà lo mèo ở nhà không ai dọn vệ sinh, khay bẩn mèo bỏ đi lung tung.',
  },
];

export const SAFETY_SENSORS = [
  {
    name: 'Cảm biến tiệm cận',
    description: 'Tự động dừng khi phát hiện mèo hoặc vật thể đến gần, đảm bảo an toàn tuyệt đối',
    position: 'top',
  },
  {
    name: 'Cảm biến trọng lượng',
    description: 'Nhận biết mèo ra vào, kích hoạt dọn dẹp và theo dõi cân nặng của thú cưng',
    position: 'bottom',
  },
  {
    name: 'Cảm biến hộc rác',
    description: 'Chỉ mở hộc chứa sau khi hoàn tất dọn dẹp để ngăn mùi hôi lây lan',
    position: 'left',
  },
  {
    name: 'Cảm biến Hall',
    description: 'Kiểm tra vị trí lắp ráp linh kiện, máy không hoạt động nếu lắp sai cách',
    position: 'right',
  },
];

export const STORY_STEPS = [
  {
    time: '07:30',
    title: 'Camera AI nhận diện',
    description: 'Khi mèo bước vào, Camera AI tự động nhận diện chính xác danh tính qua kiểu lông và trọng lượng.',
    icon: 'Cat',
  },
  {
    time: '07:32',
    title: 'Phân tích sức khỏe',
    description: 'Sau khi mèo rời đi, AI phân tích màu sắc chất thải để phát hiện sớm các dấu hiệu tiết niệu, sỏi thận.',
    icon: 'Activity',
  },
  {
    time: '18:00',
    title: 'Theo dõi từ xa',
    description: 'Bạn nhận báo cáo sức khỏe chi tiết và đàm thoại trực tiếp với boss qua app dù ở bất cứ đâu.',
    icon: 'Smartphone',
  },
  {
    time: 'Cuối tuần',
    title: 'Niêm phong tự động',
    description: 'Thay vì xúc cát, chỉ cần 1 chạm, túi rác tự động hàn kín. Bạn chỉ việc xách đi vứt, hoàn toàn sạch sẽ.',
    icon: 'PackageCheck',
  },
];

export const SPECS = [
  { label: 'Kích thước & Trọng lượng', value: ['Kích thước: 53.2 x 81.8 x 61.2 (cm)', 'Chiều cao cửa vào: 26.5 cm', 'Trọng lượng: 14.6 kg'], icon: 'Maximize', highlight: false, colSpan: 'col-span-1 sm:col-span-2 lg:col-span-1' },
  { label: 'Chất liệu - Dung tích', value: ['Nhựa ABS', 'Cabin: 70 lít', 'Hộc chất thải: 10L'], icon: 'Database', highlight: false, colSpan: 'col-span-1' },
  { label: 'Mèo phù hợp', value: ['Tất cả giống mèo', 'Dưới 10 kg', 'Từ 6 tháng tuổi và 1.5 kg trở lên'], icon: 'Cat', highlight: true, colSpan: 'col-span-1 lg:col-span-1' },
  { label: 'Camera', value: ['Camera AI xoay 180°', 'Góc rộng 210°'], icon: 'Camera', highlight: false, colSpan: 'col-span-1' },
  { label: 'Công nghệ cảm biến', value: '20 cảm biến', icon: 'ShieldCheck', highlight: false, colSpan: 'col-span-1' },
  { label: 'Độ ồn', value: '36dB', icon: 'Volume2', highlight: false, colSpan: 'col-span-1' },
  { label: 'Hệ thống khử mùi', value: ['Viên khử mùi N60', 'Hộp rác đóng kín'], icon: 'Wind', highlight: false, colSpan: 'col-span-1 sm:col-span-2 lg:col-span-1' },
  { label: 'Loại cát phù hợp', value: ['Cát đậu nành', 'Cát khoáng', 'Cát hỗn hợp', 'Cát đất sét'], icon: 'Layers', highlight: false, colSpan: 'col-span-1' },
  { label: 'Điều khiển & Điện áp', value: ['Nút bấm vật lý', 'APP PETKIT (wifi 5 GHz/2.4 GHz)', 'Trực tiếp - Adapter 12V - 4A'], icon: 'Zap', highlight: false, colSpan: 'col-span-1' },
  { label: 'Tiện ích', value: ['Tự động niêm phong túi rác', 'Túi rác liền mạch, tự niêm phong theo ý muốn', 'Vành thảm lót nâng cấp chống thấm', 'Theo dõi sức khỏe qua phân tích phân', 'Bảo vệ mèo con'], icon: 'Sparkles', highlight: true, colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2' },
  { label: 'Đơn vị phân phối', value: 'HeLiCorp', icon: 'Award', highlight: false, colSpan: 'col-span-1' },
];

export const FAQ_DATA = [
  {
    question: 'Máy có an toàn không?',
    answer: 'CleanBox Pro Ultra được trang bị hệ thống 20 cảm biến an toàn thông minh gồm cảm biến tiệm cận, trọng lượng và cảm biến Hall. Máy sẽ tự động dừng ngay lập tức khi phát hiện mèo hoặc vật thể tiến lại gần, đảm bảo an toàn tuyệt đối.',
  },
  {
    question: 'Dùng được loại cát nào?',
    answer: 'Máy tương thích hoàn hảo với các loại cát vón cục trên thị trường như cát đậu nành, cát đất sét, cát khoáng và cát hỗn hợp.',
  },
  {
    question: 'Bao lâu cần đổ rác?',
    answer: 'Nhờ thiết kế hộc chứa rác 10L kết hợp công nghệ niêm phong tự động, máy có thể chứa chất thải lên đến 20 ngày (với 1 bé mèo) mà không lo mùi hôi.',
  },
  {
    question: 'Camera AI hoạt động như thế nào?',
    answer: 'Camera AI góc rộng 210° không chỉ giúp bạn đàm thoại 2 chiều với mèo, mà còn phân tích hình ảnh chất thải để phát hiện sớm các nguy cơ bệnh lý và nhận diện từng bé mèo trong nhà.',
  },
  {
    question: 'Có phù hợp nhà nuôi nhiều mèo không?',
    answer: 'Rất phù hợp! Nhờ Camera AI nhận diện thú cưng qua trọng lượng và kiểu lông, bạn có thể dễ dàng quản lý hồ sơ và theo dõi sức khỏe cho từng bé mèo (từ 3-5 bé).',
  },
  {
    question: 'Bảo hành bao lâu?',
    answer: 'Sản phẩm được bảo hành chính hãng 18 tháng. Hỗ trợ kỹ thuật trọn đời sản phẩm.',
  },
];

export const CHATBOT_SUGGESTIONS = [
  'Máy có an toàn cho mèo con không?',
  'Máy có dùng cho mèo lớn không?',
  'Bao lâu phải đổ rác?',
  'Máy dùng loại cát nào?',
  'Có điều khiển bằng app không?',
  'Bảo hành bao lâu?',
];

export const CAT_WEIGHT_RANGES = [
  { value: 'under-3kg', label: 'Dưới 3kg' },
  { value: '3-5kg', label: '3–5kg' },
  { value: '5-8kg', label: '5–8kg' },
  { value: '8-10kg', label: '8–10kg' },
  { value: 'over-10kg', label: 'Trên 10kg' },
];

export const NEED_OPTIONS = [
  { value: 'receive_offer', label: 'Nhận ưu đãi sớm' },
  { value: 'consultation', label: 'Tư vấn sản phẩm phù hợp' },
  { value: 'bulk_order', label: 'Đặt hàng số lượng lớn' },
  { value: 'partnership', label: 'Hợp tác kinh doanh' },
  { value: 'other', label: 'Khác' },
];
