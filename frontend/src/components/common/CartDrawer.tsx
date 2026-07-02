import { useEffect, useCallback } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../../configs/Types';
import {
  updateCartQuantity, removeFromCart, clearCart,
  getCartTotal, getCartCount, formatPrice, showToast,
} from '../../reducers/AppReducer';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onCartUpdate: (cart: CartItem[]) => void;
  isDark: boolean;
}

export default function CartDrawer({ isOpen, onClose, cart, onCartUpdate, isDark }: CartDrawerProps) {
  const total = getCartTotal(cart);
  const count = getCartCount(cart);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);

  const handleQty = useCallback((id: string, qty: number) => {
    onCartUpdate(updateCartQuantity(id, qty));
  }, [onCartUpdate]);

  const handleRemove = useCallback((id: string, name: string) => {
    onCartUpdate(removeFromCart(id));
    showToast('info', `Đã xóa ${name} khỏi giỏ hàng`);
  }, [onCartUpdate]);

  const handleClear = useCallback(() => {
    onCartUpdate(clearCart());
    showToast('info', 'Đã xóa toàn bộ giỏ hàng');
  }, [onCartUpdate]);

  const d = isDark;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-0 right-0 z-[70] h-full w-full max-w-md ${d ? 'bg-[#101827]' : 'bg-white'} shadow-2xl flex flex-col`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-5 border-b ${d ? 'border-white/10' : 'border-gray-100'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ff9a4d] flex items-center justify-center shadow-lg shadow-orange-500/20">
              <ShoppingBag size={18} className="text-white" />
            </div>
            <div>
              <h2 className={`text-lg font-bold ${d ? 'text-white' : 'text-[#172033]'}`}>Giỏ hàng</h2>
              <p className={`text-xs ${d ? 'text-gray-400' : 'text-gray-500'}`}>{count} sản phẩm</p>
            </div>
          </div>
          <button onClick={onClose} className={`p-2 rounded-xl transition-colors cursor-pointer ${d ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`} aria-label="Đóng giỏ hàng">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${d ? 'bg-white/5' : 'bg-gray-50'}`}>
                <ShoppingBag size={32} className={d ? 'text-gray-500' : 'text-gray-300'} />
              </div>
              <p className={`font-semibold mb-1 ${d ? 'text-gray-300' : 'text-gray-600'}`}>Giỏ hàng trống</p>
              <p className={`text-sm ${d ? 'text-gray-500' : 'text-gray-400'}`}>Hãy chọn sản phẩm phù hợp cho boss nhé!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className={`rounded-xl p-4 transition-colors ${d ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <div className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm mb-1 truncate ${d ? 'text-white' : 'text-[#172033]'}`}>{item.product.name}</h4>
                      <p className={`text-xs mb-3 ${d ? 'text-gray-400' : 'text-gray-500'}`}>{formatPrice(item.product.price)} / sp</p>
                      <div className="flex items-center gap-2">
                        <div className={`inline-flex items-center rounded-lg overflow-hidden ${d ? 'bg-white/10' : 'bg-white border border-gray-200'}`}>
                          <button onClick={() => handleQty(item.product.id, item.quantity - 1)} className={`w-8 h-8 flex items-center justify-center cursor-pointer ${d ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-50 text-gray-600'}`}><Minus size={14} /></button>
                          <span className={`w-8 text-center text-sm font-semibold ${d ? 'text-white' : 'text-[#172033]'}`}>{item.quantity}</span>
                          <button onClick={() => handleQty(item.product.id, item.quantity + 1)} className={`w-8 h-8 flex items-center justify-center cursor-pointer ${d ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-50 text-gray-600'}`}><Plus size={14} /></button>
                        </div>
                        <button onClick={() => handleRemove(item.product.id, item.product.name)} className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 cursor-pointer"><Trash2 size={14} /></button>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={`text-sm font-bold ${d ? 'text-[#ff9a4d]' : 'text-[#ff7a1a]'}`}>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className={`px-6 py-5 border-t ${d ? 'border-white/10' : 'border-gray-100'}`}>
            <button onClick={handleClear} className={`w-full text-center text-xs font-medium mb-4 cursor-pointer ${d ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>Xóa toàn bộ giỏ hàng</button>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-600'}`}>Tổng cộng</span>
              <span className={`text-xl font-extrabold ${d ? 'text-white' : 'text-[#172033]'}`}>{formatPrice(total)}</span>
            </div>
            <button onClick={() => showToast('info', 'Đây là sản phẩm demo — tính năng thanh toán sẽ sớm được cập nhật!')} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Đặt hàng ngay</button>
            <p className={`text-center text-xs mt-3 ${d ? 'text-gray-500' : 'text-gray-400'}`}>Miễn phí vận chuyển toàn quốc</p>
          </div>
        )}
      </div>
    </div>
  );
}
