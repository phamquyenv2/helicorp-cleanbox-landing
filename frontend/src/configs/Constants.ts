import type { Product } from './Types';

export const PRODUCTS: Product[] = [
  {
    id: 'cleanbox-lite',
    name: 'CleanBox Lite',
    slug: 'cleanbox-lite',
    price: 5990000,
    compareAtPrice: 6990000,
    badge: 'Tiết kiệm',
    shortDescription: 'Dành cho 1 mèo — Gọn nhẹ, đầy đủ tính năng cơ bản, lý tưởng cho không gian nhỏ.',
    imageUrl: '/products/cleanbox-lite.webp',
    features: [
      'Tự động dọn sau khi mèo rời đi',
      'Khử mùi khoang kín',
      'Cảm biến hồng ngoại',
      'Kết nối Wi-Fi cơ bản',
      'Phù hợp mèo dưới 6kg',
    ],
    isActive: true,
  },
  {
    id: 'cleanbox-pro',
    name: 'CleanBox Pro',
    slug: 'cleanbox-pro',
    price: 6690000,
    compareAtPrice: 7990000,
    badge: 'Bán chạy nhất',
    shortDescription: 'Dành cho 1–3 mèo — Cảm biến nâng cao, khử mùi kép, điều khiển qua app.',
    imageUrl: '/products/cleanbox-pro.webp',
    features: [
      'Tự động dọn thông minh',
      'Khử mùi kép: khoang kín + sáp thơm',
      'Cảm biến hồng ngoại + trọng lượng',
      'Chống kẹt an toàn',
      'App điều khiển & theo dõi',
      'Khoang rộng cho mèo đến 10kg',
      'Chế độ Auto / Manual / Schedule',
    ],
    isActive: true,
  },
  {
    id: 'cleanbox-pro-plus',
    name: 'CleanBox Pro Plus',
    slug: 'cleanbox-pro-plus',
    price: 7690000,
    compareAtPrice: 9190000,
    badge: 'Cao cấp nhất',
    shortDescription: 'Dành cho mèo lớn / nhiều mèo — Khoang siêu rộng, cảm biến toàn diện, yên tĩnh tối đa.',
    imageUrl: '/products/cleanbox-pro-plus.webp',
    features: [
      'Tất cả tính năng của Pro',
      'Khoang siêu rộng cho mèo trên 10kg',
      'Motor êm ái, chống ồn',
      'Cảm biến nắp + trạng thái đầy',
      'Thông báo đẩy real-time',
      'Hỗ trợ OTA update firmware',
      'Bảo hành mở rộng 18 tháng',
    ],
    isActive: true,
  },
];

export const FEATURES = [
  {
    icon: 'Sparkles',
    title: 'Tự động dọn sau khi mèo rời đi',
    description: 'Cảm biến nhận diện khi boss rời khỏi khoang, máy tự động xoay sàng lọc sau 60 giây đảm bảo an toàn.',
  },
  {
    icon: 'Wind',
    title: 'Khử mùi kép',
    description: 'Khoang rác kín mùi kết hợp sáp khử mùi chuyên dụng, không gian sống luôn thơm tho dễ chịu.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Cảm biến an toàn đa điểm',
    description: 'Hồng ngoại, trọng lượng, chống kẹt — tự dừng ngay khi phát hiện mèo quay lại trong lúc vận hành.',
  },
  {
    icon: 'Smartphone',
    title: 'Theo dõi qua app',
    description: 'Biết ngay khi boss sử dụng, xem trạng thái khoang rác, điều khiển chế độ dọn từ xa trên điện thoại.',
  },
  {
    icon: 'Maximize',
    title: 'Khoang rộng cho mèo lớn',
    description: 'Thiết kế khoang rộng rãi phù hợp mọi giống mèo, từ mèo ta đến mèo Anh lông ngắn, Maine Coon.',
  },
  {
    icon: 'Wrench',
    title: 'Dễ tháo lắp vệ sinh',
    description: 'Cấu trúc mô-đun, dễ dàng tháo rời để vệ sinh sâu, không cần dụng cụ chuyên dụng.',
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
    name: 'Cảm biến hồng ngoại',
    description: 'Phát hiện chuyển động khi mèo bước vào hoặc rời đi',
    position: 'top',
  },
  {
    name: 'Cảm biến trọng lượng',
    description: 'Xác nhận mèo đã rời khỏi khoang hoàn toàn trước khi vận hành',
    position: 'bottom',
  },
  {
    name: 'Cơ chế chống kẹt',
    description: 'Tự động dừng ngay khi phát hiện lực cản bất thường',
    position: 'left',
  },
  {
    name: 'Cảm biến nắp',
    description: 'Dừng vận hành khi nắp máy được mở để đảm bảo an toàn',
    position: 'right',
  },
];

export const STORY_STEPS = [
  {
    time: '07:30',
    title: 'Boss đi vệ sinh',
    description: 'Máy nhận diện lượt sử dụng qua cảm biến hồng ngoại và trọng lượng.',
    icon: 'Cat',
  },
  {
    time: '07:31',
    title: 'Tự động dọn',
    description: 'Sau khi boss rời khỏi khoang 60 giây, máy bắt đầu xoay sàng lọc và đẩy rác vào khoang kín.',
    icon: 'RotateCw',
  },
  {
    time: '08:00',
    title: 'Sen đi làm',
    description: 'Ứng dụng gửi thông báo "Boss đã sử dụng, máy đã dọn xong" ngay trên điện thoại.',
    icon: 'Bell',
  },
  {
    time: '20:00',
    title: 'Nhà vẫn sạch thơm',
    description: 'Khoang chứa rác kín mùi, sáp khử mùi hoạt động liên tục — không gian sống dễ chịu hơn bao giờ hết.',
    icon: 'Home',
  },
];

export const SPECS = [
  { label: 'Tên sản phẩm', value: 'CleanBox Pro' },
  { label: 'Loại thiết bị', value: 'Máy dọn vệ sinh mèo tự động' },
  { label: 'Cơ chế dọn', value: 'Tự động sau khi mèo rời đi' },
  { label: 'Cảm biến', value: 'Hồng ngoại, trọng lượng, chống kẹt, trạng thái nắp' },
  { label: 'Kết nối', value: 'Wi-Fi / Mobile App' },
  { label: 'Chế độ', value: 'Auto / Manual / Schedule' },
  { label: 'Khử mùi', value: 'Khoang rác kín + sáp khử mùi' },
  { label: 'Phù hợp', value: '1–3 mèo' },
  { label: 'Loại cát', value: 'Cát vón, cát khoáng, cát đậu nành hạt nhỏ' },
  { label: 'Thời gian chứa rác', value: '14–20 ngày tùy tần suất' },
  { label: 'Bảo hành demo', value: '12 tháng' },
];

export const FAQ_DATA = [
  {
    question: 'Máy có an toàn không?',
    answer: 'CleanBox Pro được trang bị hệ thống cảm biến an toàn đa điểm gồm cảm biến hồng ngoại, trọng lượng, chống kẹt và cảm biến nắp. Máy tự động dừng ngay khi phát hiện mèo quay lại hoặc có lực cản bất thường, đảm bảo an toàn tuyệt đối cho boss.',
  },
  {
    question: 'Dùng được loại cát nào?',
    answer: 'CleanBox Pro tương thích với cát vón, cát khoáng và cát đậu nành hạt nhỏ. Chúng tôi khuyến nghị sử dụng cát vón chất lượng tốt để máy hoạt động hiệu quả nhất.',
  },
  {
    question: 'Bao lâu cần đổ rác?',
    answer: 'Tùy thuộc vào số lượng mèo và tần suất sử dụng, khoang rác có thể chứa từ 14 đến 20 ngày. App sẽ thông báo khi khoang rác sắp đầy.',
  },
  {
    question: 'Có cần app không?',
    answer: 'Không bắt buộc. Máy có thể hoạt động độc lập ở chế độ tự động. Tuy nhiên, app giúp bạn theo dõi trạng thái, điều chỉnh chế độ dọn và nhận thông báo từ xa — rất tiện lợi khi bạn đi vắng.',
  },
  {
    question: 'Có phù hợp nhà nuôi nhiều mèo không?',
    answer: 'Có! CleanBox Pro phù hợp cho 1–3 mèo. Nếu bạn nuôi nhiều mèo hoặc mèo lớn, phiên bản CleanBox Pro Plus với khoang siêu rộng sẽ là lựa chọn tối ưu.',
  },
  {
    question: 'Bảo hành bao lâu?',
    answer: 'Sản phẩm được bảo hành chính hãng 12 tháng (CleanBox Pro Plus được bảo hành mở rộng 18 tháng). Hỗ trợ kỹ thuật trọn đời sản phẩm.',
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
