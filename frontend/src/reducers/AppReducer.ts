import type { CartItem, Product, Toast, ChatMessage } from '../configs/Types';

const KEYS = {
  theme: 'cleanbox_theme',
  sessionId: 'cleanbox_session_id',
  cart: 'cleanbox_cart',
  favorites: 'cleanbox_favorites',
  recentlyViewed: 'cleanbox_recently_viewed',
  chatHistory: 'cleanbox_chat_history',
};

function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getTheme(): 'light' | 'dark' {
  return (localStorage.getItem(KEYS.theme) as 'light' | 'dark') || 'light';
}

export function setTheme(theme: 'light' | 'dark'): void {
  localStorage.setItem(KEYS.theme, theme);
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

export function initTheme(): 'light' | 'dark' {
  const saved = getTheme();
  setTheme(saved);
  return saved;
}

export function getSessionId(): string {
  let id = localStorage.getItem(KEYS.sessionId);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEYS.sessionId, id);
  }
  return id;
}

export function getCart(): CartItem[] {
  return getItem<CartItem[]>(KEYS.cart, []);
}

export function addToCart(product: Product): CartItem[] {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  setItem(KEYS.cart, cart);
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter((item) => item.product.id !== productId);
  setItem(KEYS.cart, cart);
  return cart;
}

export function updateCartQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }
  setItem(KEYS.cart, cart);
  return cart;
}

export function clearCart(): CartItem[] {
  setItem(KEYS.cart, []);
  return [];
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function getCartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getFavorites(): string[] {
  return getItem<string[]>(KEYS.favorites, []);
}

export function toggleFavorite(productId: string): string[] {
  const favs = getFavorites();
  const idx = favs.indexOf(productId);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(productId);
  }
  setItem(KEYS.favorites, favs);
  return favs;
}

export function isFavorite(productId: string): boolean {
  return getFavorites().includes(productId);
}

export function getRecentlyViewed(): string[] {
  return getItem<string[]>(KEYS.recentlyViewed, []);
}

export function addRecentlyViewed(productId: string): string[] {
  const recent = getRecentlyViewed().filter((id) => id !== productId);
  recent.unshift(productId);
  const trimmed = recent.slice(0, 10);
  setItem(KEYS.recentlyViewed, trimmed);
  return trimmed;
}

export function getChatHistory(): ChatMessage[] {
  return getItem<ChatMessage[]>(KEYS.chatHistory, []);
}

export function saveChatHistory(messages: ChatMessage[]): void {
  setItem(KEYS.chatHistory, messages);
}

let toastCallback: ((toast: Toast) => void) | null = null;

export function setToastCallback(cb: (toast: Toast) => void): void {
  toastCallback = cb;
}

export function showToast(type: Toast['type'], message: string, duration = 3000): void {
  if (toastCallback) {
    toastCallback({
      id: crypto.randomUUID(),
      type,
      message,
      duration,
    });
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}
