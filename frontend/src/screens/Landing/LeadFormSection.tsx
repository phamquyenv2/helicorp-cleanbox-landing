import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { CAT_WEIGHT_RANGES, NEED_OPTIONS } from '../../configs/Constants';
import { submitLead } from '../../configs/Apis';
import { showToast } from '../../reducers/AppReducer';
import { useTracking } from '../../hooks/useTracking';
import type { LeadFormData } from '../../configs/Types';
import Container from '../../components/common/Container';
import tuvanBg from '../../assets/Tư vấn.jpg';

interface LeadFormSectionProps {
  isDark: boolean;
}

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const leadFormSchema = z.object({
  fullName: z.string().min(2, 'Họ tên phải có ít nhất 2 ký tự').max(100, 'Họ tên quá dài'),
  phone: z.string().regex(phoneRegex, 'Số điện thoại không hợp lệ (VD: 0912345678)'),
  email: z.union([z.literal(''), z.string().email('Email không hợp lệ')]).optional(),
  catCount: z.number().min(1, 'Số lượng mèo phải lớn hơn hoặc bằng 1').max(50, 'Số lượng không hợp lệ'),
  catWeightRange: z.string().min(1, 'Vui lòng chọn cân nặng mèo'),
  need: z.string().min(1, 'Vui lòng chọn nhu cầu tư vấn'),
  message: z.string().max(500, 'Ghi chú không được vượt quá 500 ký tự').optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export default function LeadFormSection({ isDark }: LeadFormSectionProps) {
  const { track } = useTracking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      catCount: 1,
      catWeightRange: '',
      need: '',
      message: '',
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    track('form_submit_start', { section: 'lead_form' });

    try {
      const response = await submitLead(data as LeadFormData);

      if (response.success) {
        setIsSuccess(true);
        showToast('success', 'Đăng ký nhận tư vấn thành công! Chúng tôi sẽ liên hệ sớm nhất.');
        track('form_submit_success', { section: 'lead_form' });
        reset();
      } else {
        showToast('error', response.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau.');
        track('form_submit_error', { section: 'lead_form', metadata: { error: response.message } });
      }
    } catch (error) {
      showToast('error', 'Lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.');
      track('form_submit_error', { section: 'lead_form', metadata: { error: 'Network Error' } });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className={`py-20 md:py-28 ${isDark ? 'bg-[#0b101a]' : 'bg-white'}`}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl shadow-xl overflow-hidden reveal ${isDark ? 'bg-[#151c2c] border border-white/5' : 'bg-white border border-gray-100 shadow-orange-500/5'
            }`}>
            <div className="grid md:grid-cols-5 h-full">

              <div className={`md:col-span-2 relative p-8 md:p-10 flex flex-col justify-center text-white overflow-hidden ${isDark ? 'border-r border-white/5' : ''
                }`}>
                <img src={tuvanBg} alt="Tư vấn" loading="lazy" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className={`absolute inset-0 z-0 ${isDark ? 'bg-[#0e1525]/80' : 'bg-[#ff7a1a]/85'}`}></div>

                <div className="relative z-10 h-full flex flex-col">
                  <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Nhận tư vấn ngay!</h2>
                  <p className="text-white/90 mb-8 leading-relaxed font-medium drop-shadow">
                    Đội ngũ chuyên gia CleanBox sẽ liên hệ để tư vấn giải pháp dọn vệ sinh tối ưu nhất cho boss nhà bạn.
                  </p>

                  <ul className="space-y-4 mt-auto relative z-10">
                    {['Tư vấn 1-1 miễn phí', 'Ưu đãi độc quyền', 'Hỗ trợ kỹ thuật 24/7'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium drop-shadow-sm">
                        <CheckCircle2 size={18} className="text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-3 p-8 md:p-10">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-toast-in">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-green-100 text-green-500'}`}>
                      <CheckCircle2 size={40} className="currentColor" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Đăng ký thành công!</h3>
                    <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ qua số điện thoại đã đăng ký trong thời gian sớm nhất.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className={`px-6 py-2.5 font-medium rounded-xl transition-colors cursor-pointer ${isDark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Họ và tên *
                        </label>
                        <input
                          {...register('fullName')}
                          type="text"
                          placeholder="Nguyễn Văn A"
                          className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none ${errors.fullName
                              ? 'border-red-500 focus:ring-red-500/20'
                              : isDark
                                ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                            }`}
                        />
                        {errors.fullName && <p className="mt-1.5 text-sm text-red-500">{errors.fullName.message}</p>}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Số điện thoại *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="09xx xxx xxx"
                          className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none ${errors.phone
                              ? 'border-red-500 focus:ring-red-500/20'
                              : isDark
                                ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                            }`}
                        />
                        {errors.phone && <p className="mt-1.5 text-sm text-red-500">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email (Tùy chọn)
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="example@gmail.com"
                        className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none ${errors.email
                            ? 'border-red-500 focus:ring-red-500/20'
                            : isDark
                              ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                              : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                          }`}
                      />
                      {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Số lượng mèo *
                        </label>
                        <input
                          {...register('catCount', { valueAsNumber: true })}
                          type="number"
                          min="1"
                          className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none ${errors.catCount
                              ? 'border-red-500 focus:ring-red-500/20'
                              : isDark
                                ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                            }`}
                        />
                        {errors.catCount && <p className="mt-1.5 text-sm text-red-500">{errors.catCount.message}</p>}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Cân nặng trung bình *
                        </label>
                        <select
                          {...register('catWeightRange')}
                          className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none appearance-none ${errors.catWeightRange
                              ? 'border-red-500 focus:ring-red-500/20'
                              : isDark
                                ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                            }`}
                        >
                          <option value="">Chọn cân nặng...</option>
                          {CAT_WEIGHT_RANGES.map(range => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                          ))}
                        </select>
                        {errors.catWeightRange && <p className="mt-1.5 text-sm text-red-500">{errors.catWeightRange.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Nhu cầu tư vấn *
                      </label>
                      <select
                        {...register('need')}
                        className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none appearance-none ${errors.need
                            ? 'border-red-500 focus:ring-red-500/20'
                            : isDark
                              ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                              : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                          }`}
                      >
                        <option value="">Chọn nhu cầu...</option>
                        {NEED_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.need && <p className="mt-1.5 text-sm text-red-500">{errors.need.message}</p>}
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Ghi chú thêm (Tùy chọn)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={3}
                        placeholder="Bạn cần tư vấn thêm điều gì?"
                        className={`w-full px-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:outline-none resize-none ${errors.message
                            ? 'border-red-500 focus:ring-red-500/20'
                            : isDark
                              ? 'bg-[#0e1525] border-white/10 text-white focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                              : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff7a1a] focus:ring-[#ff7a1a]/20'
                          }`}
                      />
                      {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi yêu cầu
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    <p className={`text-xs text-center mt-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Thông tin của bạn được bảo mật tuyệt đối.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
