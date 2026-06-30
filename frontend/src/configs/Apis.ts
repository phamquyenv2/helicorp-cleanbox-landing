import type { LeadFormData, TrackingEvent, ApiResponse, ChatMessage } from './Types';

const API_URL = import.meta.env.VITE_API_URL;

async function request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: data.message || 'Có lỗi xảy ra', data: data.data };
    }
    return data;
  } catch {
    return { success: false, message: 'Không thể kết nối máy chủ. Vui lòng thử lại sau.' };
  }
}

export async function submitLead(data: LeadFormData): Promise<ApiResponse> {
  return request('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function trackEvent(data: TrackingEvent): Promise<ApiResponse> {
  return request('/api/events', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function sendChatMessage(data: {
  sessionId: string;
  message: string;
}): Promise<ApiResponse<{ reply: string }>> {
  return request('/api/chat', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getProducts(): Promise<ApiResponse> {
  return request('/api/products');
}

/* ===== Local chatbot fallback (keyword matching) ===== */
const CHAT_RULES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['an toàn', 'kẹt', 'mèo con', 'nguy hiểm'],
    reply: 'CleanBox Pro rất an toàn! Máy được trang bị cảm biến hồng ngoại, trọng lượng và cơ chế chống kẹt. Nếu phát hiện mèo quay lại trong lúc vận hành, máy sẽ tự động dừng ngay lập tức. Phù hợp cho cả mèo con từ 1.5kg trở lên.',
  },
  {
    keywords: ['mèo lớn', 'to', 'nặng', 'maine coon', 'british'],
    reply: 'Nếu bạn nuôi mèo lớn (trên 8kg) hoặc nhiều mèo, CleanBox Pro Plus là lựa chọn tối ưu với khoang siêu rộng, phù hợp cho mèo giống lớn như Maine Coon, British Shorthair. Giá 7.690.000đ, bảo hành 18 tháng!',
  },
  {
    keywords: ['cát', 'loại cát', 'cát gì'],
    reply: 'CleanBox Pro tương thích với cát vón, cát khoáng và cát đậu nành hạt nhỏ. Chúng tôi khuyến nghị sử dụng cát vón chất lượng tốt để máy hoạt động tối ưu và kéo dài tuổi thọ cơ cấu sàng.',
  },
  {
    keywords: ['rác', 'đổ rác', 'bao lâu', 'thay rác'],
    reply: 'Khoang rác CleanBox Pro có thể chứa từ 14 đến 20 ngày tùy số lượng mèo và tần suất sử dụng. App sẽ tự động thông báo khi khoang rác sắp đầy để bạn thay kịp thời.',
  },
  {
    keywords: ['app', 'ứng dụng', 'điều khiển', 'remote', 'từ xa'],
    reply: 'Có! CleanBox Pro hỗ trợ kết nối Wi-Fi và app điều khiển trên iOS/Android. Qua app bạn có thể: theo dõi trạng thái máy, nhận thông báo khi mèo sử dụng, điều chỉnh chế độ dọn (Auto/Manual/Schedule), và xem lịch sử sử dụng.',
  },
  {
    keywords: ['bảo hành', 'warranty', 'hỏng', 'sửa'],
    reply: 'CleanBox Lite và Pro được bảo hành 12 tháng, CleanBox Pro Plus được bảo hành mở rộng 18 tháng. Hỗ trợ kỹ thuật trọn đời sản phẩm. Liên hệ hotline hoặc gửi form tư vấn để được hỗ trợ nhanh nhất.',
  },
  {
    keywords: ['giá', 'bao nhiêu', 'tiền'],
    reply: 'CleanBox có 3 phiên bản:\n• CleanBox Lite (1 mèo): 5.990.000đ\n• CleanBox Pro (1–3 mèo): 6.690.000đ\n• CleanBox Pro Plus (mèo lớn/nhiều mèo): 7.690.000đ\nĐăng ký tư vấn ngay để nhận ưu đãi sớm nhất!',
  },
];

export function getLocalChatReply(message: string): ChatMessage {
  const lowerMsg = message.toLowerCase();
  
  for (const rule of CHAT_RULES) {
    if (rule.keywords.some((kw) => lowerMsg.includes(kw))) {
      return {
        id: crypto.randomUUID(),
        role: 'bot',
        content: rule.reply,
        timestamp: Date.now(),
      };
    }
  }
  
  return {
    id: crypto.randomUUID(),
    role: 'bot',
    content: 'Cảm ơn bạn đã quan tâm! Mình chưa hiểu rõ câu hỏi. Bạn có thể hỏi về: an toàn, loại cát phù hợp, thời gian đổ rác, điều khiển qua app, bảo hành, hoặc giá sản phẩm. Hoặc để lại thông tin ở form tư vấn, đội ngũ chuyên gia sẽ liên hệ bạn sớm nhất!',
    timestamp: Date.now(),
  };
}
