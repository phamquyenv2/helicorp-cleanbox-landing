import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/constants';

interface FAQSectionProps { isDark: boolean; }

export default function FAQSection({ isDark }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-orange-400' : 'text-[#ff7a1a]'}`}>
            Câu hỏi thường gặp
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#172033]'}`}>
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 stagger-children">
          {FAQ_DATA.map((faq, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-[#172033] border-white/10 hover:border-white/20'
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer`}
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold pr-4 ${isDark ? 'text-white' : 'text-[#172033]'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  } ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-5 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
