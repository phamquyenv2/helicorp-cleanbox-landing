/* ===== Product Types ===== */
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  imageUrl: string;
  features: string[];
  isActive: boolean;
}

/* ===== Cart Types ===== */
export interface CartItem {
  product: Product;
  quantity: number;
}

/* ===== Lead Form Types ===== */
export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  catCount: number;
  catWeightRange: string;
  need: string;
  message?: string;
}

/* ===== Chat Types ===== */
export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
}

/* ===== Event Tracking Types ===== */
export interface TrackingEvent {
  sessionId: string;
  eventType: string;
  eventName?: string;
  pageUrl?: string;
  section?: string;
  productId?: string;
  metadata?: string;
}

/* ===== API Response ===== */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

/* ===== Toast Types ===== */
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}
