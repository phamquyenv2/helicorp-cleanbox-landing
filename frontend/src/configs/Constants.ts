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
    question: 'Máy dọn phân mèo PETKIT Purobot Ultra có an toàn cho mèo không?',
    answer: 'Có. PETKIT Purobot Ultra được trang bị cơ chế xoay theo trục X, giúp cửa ra vào luôn mở trong suốt quá trình hoạt động, tạo điều kiện để mèo ra vào dễ dàng và an toàn. Bên cạnh đó, thiết bị tích hợp 20 cảm biến an toàn độ chính xác cao, bao gồm cảm biến tiệm cận và cảm biến trọng lượng. Khi phát hiện mèo hoặc vật thể đến gần, máy sẽ tự động dừng ngay lập tức.',
  },
  {
    question: 'Nên đặt máy dọn phân mèo PETKIT Purobot Ultra ở đâu?',
    answer: 'Để đảm bảo cảm biến trọng lượng hoạt động chính xác, bạn nên đặt Purobot Ultra trên bề mặt phẳng, cứng và ổn định. Không đặt máy trên thảm, đệm hoặc các bề mặt mềm vì có thể ảnh hưởng đến cảm biến đo trọng lượng và nhận diện mèo. Ngoài ra, bạn cần đặt máy cách tường tối thiểu 5cm và đảm bảo khu vực phía trước cửa ra vào luôn thông thoáng.',
  },
  {
    question: 'Nên sử dụng loại cát vệ sinh nào cho PETKIT Purobot Ultra?',
    answer: 'PETKIT Purobot Ultra được trang bị 2 lưới lọc cát, gồm lưới lọc cát hạt nhuyễn và lưới lọc đa năng. Do đó, thiết bị tương thích với hầu hết các loại cát vệ sinh cho mèo có khả năng vón cục trên thị trường. Tuy nhiên, để đảm bảo máy hoạt động tối ưu và hạn chế phân bám thành khoang, chúng tôi khuyến nghị sử dụng Cát vệ sinh hỗn hợp PETKIT.',
  },
  {
    question: 'Làm thế nào để hạn chế tình trạng chất thải bám lên thành khoang của PETKIT Purobot Ultra?',
    answer: 'PETKIT Purobot Ultra được trang bị tấm lót đáy tiên tiến với diện tích bề mặt lớn, giúp cát vón cục hiệu quả hơn. Để hạn chế tình trạng phân bám lên thành khoang vệ sinh, chúng tôi khuyến nghị sử dụng cát vệ sinh có khả năng vón cục nhanh và chắc. Nếu phân bị mềm hoặc lỏng, bạn có thể thiết lập thời gian chờ dọn lâu hơn trên ứng dụng để cát kịp hút ẩm.',
  },
  {
    question: 'Làm thế nào để dạy mèo sử dụng PETKIT Purobot Ultra?',
    answer: 'Hãy đặt máy tại vị trí của khay vệ sinh cũ và sử dụng loại cát mà mèo đã quen dùng. Bạn có thể trộn một ít cát từ khay cũ vào để giữ mùi hương quen thuộc. Trong thời gian đầu, bạn có thể tắt tính năng tự động dọn, chỉ bật khi cần để mèo làm quen dần với máy mà không bị hoảng sợ.',
  },
  {
    question: 'Làm thế nào để cập nhật phần mềm hệ thống cho PETKIT Purobot Ultra?',
    answer: 'Thiết bị hỗ trợ cập nhật phần mềm từ xa qua OTA. Nhờ đó, máy có thể được bổ sung tính năng mới và cải thiện hiệu suất. Để cập nhật, bạn chỉ cần mở ứng dụng PETKIT, vào phần Cài đặt của máy, kiểm tra "Nâng cấp phần mềm" (Firmware Update) và thực hiện cập nhật theo hướng dẫn.',
  },
  {
    question: 'Camera trên PETKIT Purobot Ultra hoạt động như thế nào?',
    answer: 'Camera được thiết kế tự động xoay 180 độ với góc nhìn rộng 210 độ. Mặc định, camera sẽ hướng vào bên trong khoang vệ sinh để quan sát chất thải. Tuy nhiên, bạn có thể điều chỉnh góc quay để camera hướng ra bên ngoài thông qua ứng dụng PETKIT, giúp theo dõi môi trường xung quanh.',
  },
  {
    question: 'Camera AI của PETKIT Purobot Ultra có thể nhận diện được bao nhiêu mèo?',
    answer: 'Camera AI trên Purobot Ultra có khả năng nhận diện và quản lý tối đa 15 bé mèo trong gia đình. Thiết bị sẽ tự động tạo hồ sơ sức khỏe riêng cho từng bé, giúp theo dõi tần suất đi vệ sinh, thời gian sử dụng, tình trạng chất thải và các dấu hiệu sức khỏe bất thường.',
  },
  {
    question: 'Có thể đặt PETKIT Purobot Ultra trên thảm không?',
    answer: 'Không. Để đảm bảo thiết bị hoạt động chính xác, bạn nên đặt máy trên bề mặt cứng, phẳng và ổn định. Việc đặt trên thảm hoặc bề mặt mềm có thể làm sai lệch hệ thống cảm biến trọng lượng. Nếu cần thảm hứng cát, chỉ nên đặt thảm ở phía trước khu vực cửa ra vào.',
  },
  {
    question: 'Có thể kích hoạt tính năng đóng gói túi rác tự động trên ứng dụng PETKIT không?',
    answer: 'Không. Vì lý do an toàn, quá trình đóng gói túi rác tự động yêu cầu người dùng phải có mặt trực tiếp bên cạnh thiết bị và không thể kích hoạt từ xa qua ứng dụng. Để đóng gói, bạn cần nhấn đúp nút vật lý trên màn hình OLED của máy.',
  },
  {
    question: 'Có thể sử dụng túi rác thông thường cho PETKIT Purobot Ultra không?',
    answer: 'Không. Hệ thống đóng gói chất thải tự động được thiết kế dành riêng cho túi rác liền mạch PETKIT. Lõi túi rác có kích thước và cấu trúc đặc biệt phù hợp với cơ chế hàn nhiệt của máy. Dùng túi thường sẽ khiến hệ thống hàn bị lỗi hoặc làm hỏng thiết bị.',
  },
  {
    question: 'Bao lâu thì thay lõi túi rác của PETKIT Purobot Ultra?',
    answer: 'Mỗi hộp túi rác liền mạch bao gồm 3 lõi. Mỗi lõi có thể dùng khoảng 10 lần đóng gói tự động. Trung bình ngăn chứa của máy lưu trữ được 20 ngày cho 1 bé mèo trưởng thành. Vì vậy, 1 lõi túi rác có thể dùng được khá lâu, tùy thuộc vào số lượng mèo trong nhà.',
  },
  {
    question: 'Khi nào cần đóng gói và xử lý chất thải?',
    answer: 'Ngăn chứa chất thải có thể lưu trữ tối đa 20 ngày đối với 1 bé mèo trưởng thành. Tuy nhiên, với khu vực có khí hậu nóng ẩm như Việt Nam, chúng tôi khuyến nghị người dùng nên đóng gói và vứt rác thường xuyên hơn (khoảng 1 tuần/lần) để đảm bảo vệ sinh và hạn chế mùi hôi tối đa.',
  },
  {
    question: 'Tại sao bên trong ngăn chứa chất thải của PETKIT Purobot Ultra có nhiều khoảng trống?',
    answer: 'Khoảng trống này là thiết kế bắt buộc dành riêng cho hệ thống đóng gói tự động. Để máy có thể tự động kéo dài túi, cắt và hàn nhiệt, mô-đun đóng gói cần không gian đủ rộng để vận hành cơ khí bên trong mà không bị kẹt rác.',
  },
  {
    question: 'PETKIT Purobot Ultra có giới hạn cân nặng của mèo không?',
    answer: 'Có. Thiết bị phù hợp nhất với mèo có cân nặng từ 1,5kg đến 10kg. Mèo dưới 1,5kg sẽ quá nhẹ để cảm biến trọng lượng nhận diện chính xác, trong khi mèo trên 10kg có thể làm khoang máy bị chật chội và ảnh hưởng đến trải nghiệm vệ sinh.',
  },
  {
    question: 'Mèo con có thể sử dụng PETKIT Purobot Ultra không?',
    answer: 'Chúng tôi không khuyến nghị cho mèo dưới 1,5kg hoặc dưới 6 tháng tuổi sử dụng thiết bị ở chế độ tự động. Đối với mèo con đạt từ 1,5kg, bạn nên kích hoạt Chế độ bảo vệ mèo con (Kitten Protection Mode) trên ứng dụng, khi đó máy sẽ không tự động dọn để đảm bảo an toàn tuyệt đối.',
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
