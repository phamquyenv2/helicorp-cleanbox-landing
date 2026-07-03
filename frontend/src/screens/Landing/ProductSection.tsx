import { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Heart, Check, Star, Package } from 'lucide-react';
import { PRODUCTS } from '../../configs/Constants';
import { addToCart, toggleFavorite, isFavorite, addRecentlyViewed, formatPrice, showToast } from '../../reducers/AppReducer';
import type { Product } from '../../configs/Types';
import Container from '../../components/common/Container';

interface ProductSectionProps { isDark: boolean; onCartUpdate: () => void; }

export default function ProductSection({ isDark, onCartUpdate }: ProductSectionProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});
  const d = isDark;

  useEffect(() => {
    const s: Record<string, boolean> = {};
    PRODUCTS.forEach((p) => { s[p.id] = isFavorite(p.id); });
    setFavorites(s);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    addToCart(product); onCartUpdate();
    showToast('success', `Đã thêm ${product.name} vào giỏ hàng`);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [product.id]: false })), 1500);
  }, [onCartUpdate]);

  const handleToggleFavorite = useCallback((product: Product) => {
    const updated = toggleFavorite(product.id);
    const nowFav = updated.includes(product.id);
    setFavorites((prev) => ({ ...prev, [product.id]: nowFav }));
    showToast(nowFav ? 'success' : 'info', nowFav ? `Đã thêm ${product.name} vào yêu thích` : `Đã bỏ yêu thích`);
  }, []);

  const badgeStyles: Record<string, string> = {
    'Tiết kiệm': 'from-emerald-500 to-teal-500',
    'Bán chạy nhất': 'from-[#ff7a1a] to-[#ff9a4d]',
    'Cao cấp nhất': 'from-violet-500 to-purple-500',
  };

  return (
    <section id="products" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-orange-500/10 text-orange-400 border border-orange-500/15' : 'bg-orange-50 text-orange-600 border border-orange-200/60'}`}>
            <Package size={13} />
            <span>SẢN PHẨM</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${d ? 'text-white' : 'text-[#172033]'}`}>
            Chọn Combo Purobot Ultra cho boss
          </h2>
          <p className={`text-base max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-500'}`}>
            Tối ưu chi phí vận hành, nâng tầm trải nghiệm thông minh cho gia đình bạn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 stagger-children">
          {PRODUCTS.map((product) => {
            const isPopular = product.badge === 'Bán chạy nhất';
            return (
              <div key={product.id} className={`reveal rounded-2xl overflow-hidden card-hover ${
                isPopular ? 'ring-2 ring-[#ff7a1a]/30' : ''
              } ${d ? 'bg-[#151c2c] border border-white/6' : 'bg-white border border-gray-100 shadow-md'}`}
                onMouseEnter={() => addRecentlyViewed(product.id)}
              >
                {isPopular && <div className="h-1 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d]" />}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    {product.badge && (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${badgeStyles[product.badge]}`}>
                        {isPopular && <Star size={10} fill="currentColor" />}
                        {product.badge}
                      </span>
                    )}
                    <button onClick={() => handleToggleFavorite(product)}
                      className={`p-2 rounded-lg cursor-pointer transition-colors ${favorites[product.id] ? 'text-red-500 bg-red-50' : d ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-400'}`}>
                      <Heart size={16} fill={favorites[product.id] ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <h3 className={`text-xl font-bold mb-1.5 ${d ? 'text-white' : 'text-[#172033]'}`}>{product.name}</h3>
                  <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-500'}`}>{product.shortDescription}</p>

                  <div className="mb-5">
                    <span className={`text-2xl font-extrabold ${isPopular ? 'text-[#ff7a1a]' : d ? 'text-white' : 'text-[#172033]'}`}>
                      {formatPrice(product.price)}
                    </span>
                    {product.compareAtPrice && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm line-through ${d ? 'text-gray-500' : 'text-gray-400'}`}>{formatPrice(product.compareAtPrice)}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${d ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                          -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} strokeWidth={3} className={`mt-0.5 shrink-0 ${isPopular ? 'text-[#ff7a1a]' : 'text-[#16c7a8]'}`} />
                        <span className={`text-sm ${d ? 'text-gray-300' : 'text-gray-600'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => handleAddToCart(product)} disabled={addedMap[product.id]}
                    className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedMap[product.id] ? 'bg-emerald-500 text-white'
                      : isPopular ? 'bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white shadow-md shadow-orange-500/15 hover:shadow-orange-500/25 active:scale-95'
                      : d ? 'bg-white/6 text-white hover:bg-white/10 border border-white/6 active:scale-95'
                      : 'bg-[#172033] text-white hover:bg-[#172033]/90 active:scale-95'
                    }`}>
                    {addedMap[product.id] ? <><Check size={16} /> Đã thêm</> : <><ShoppingCart size={16} /> Thêm vào giỏ hàng</>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
