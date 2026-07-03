import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../../configs/Constants';
import Container from '../../components/common/Container';

interface FAQSectionProps { isDark: boolean; }

export default function FAQSection({ isDark }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const d = isDark;

  return (
    <section id="faq" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className={`section-label inline-flex mb-4 ${d ? 'bg-orange-500/10 text-orange-400 border border-orange-500/15' : 'bg-orange-50 text-orange-600 border border-orange-200/60'}`}>
            <HelpCircle size={13} />
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${d ? 'text-white' : 'text-[#172033]'}`}>
            Bạn thắc mắc điều gì?
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3 stagger-children">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal">
                <div className={`rounded-2xl overflow-hidden transition-all ${
                  d ? 'bg-[#151c2c] border border-white/6' : 'bg-white border border-gray-100 shadow-sm'
                } ${isOpen ? (d ? 'ring-1 ring-orange-500/20' : 'ring-1 ring-orange-300/30') : ''}`}>
                  <button onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer group" aria-expanded={isOpen}>
                    <span className={`font-semibold text-[15px] pr-4 transition-colors ${isOpen ? 'text-[#ff7a1a]' : d ? 'text-white' : 'text-[#172033]'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff7a1a]' : d ? 'text-gray-500' : 'text-gray-400'}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-5 pb-5 text-sm leading-relaxed ${d ? 'text-gray-400' : 'text-gray-500'}`}>{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
