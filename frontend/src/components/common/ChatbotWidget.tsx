import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronUp } from 'lucide-react';
import { CHATBOT_SUGGESTIONS } from '../../configs/Constants';
import { getLocalChatReply } from '../../configs/Apis';
import { getChatHistory, saveChatHistory } from '../../reducers/AppReducer';
import type { ChatMessage } from '../../configs/Types';

interface ChatbotWidgetProps {
  isDark: boolean;
}

export default function ChatbotWidget({ isDark }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const d = isDark;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setMessages(getChatHistory());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getLocalChatReply(text);
      const withReply = [...updated, botReply];
      setMessages(withReply);
      saveChatHistory(withReply);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <div className={`fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 z-50 w-auto sm:w-[380px] max-h-[min(520px,calc(100dvh-6rem))] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
      } ${d ? 'bg-[#172033] border border-white/10' : 'bg-white border border-gray-200'}`}>
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm">CleanBox Assistant</h3>
              <p className="text-xs text-white/70">Sẵn sàng hỗ trợ bạn</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer" aria-label="Đóng chat">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[240px]">
          {messages.length === 0 && (
            <div className="chat-bubble-enter">
              <div className={`rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] ${d ? 'bg-white/10 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                <p className="text-sm">Xin chào! 👋 Mình là trợ lý CleanBox. Bạn muốn hỏi gì về máy dọn vệ sinh mèo tự động?</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {CHATBOT_SUGGESTIONS.slice(0, 4).map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                      d ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10' : 'bg-orange-50 text-[#ff7a1a] hover:bg-orange-100 border border-orange-200'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} chat-bubble-enter`}>
              {msg.role === 'bot' && (
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1 ${d ? 'bg-[#ff7a1a]/20 text-[#ff9a4d]' : 'bg-orange-100 text-[#ff7a1a]'}`}>
                  <Bot size={14} />
                </div>
              )}
              <div className={`rounded-2xl px-4 py-2.5 max-w-[78%] text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white rounded-tr-sm'
                  : d ? 'bg-white/10 text-gray-200 rounded-tl-sm' : 'bg-gray-100 text-gray-700 rounded-tl-sm'
              }`}>
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-2 mt-1 ${d ? 'bg-white/10 text-gray-300' : 'bg-gray-200 text-gray-500'}`}>
                  <User size={14} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 chat-bubble-enter">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${d ? 'bg-[#ff7a1a]/20 text-[#ff9a4d]' : 'bg-orange-100 text-[#ff7a1a]'}`}>
                <Bot size={14} />
              </div>
              <div className={`rounded-2xl rounded-tl-sm px-4 py-3 ${d ? 'bg-white/10' : 'bg-gray-100'}`}>
                <div className="flex gap-1">
                  <span className={`w-2 h-2 rounded-full animate-bounce ${d ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '0ms' }} />
                  <span className={`w-2 h-2 rounded-full animate-bounce ${d ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '150ms' }} />
                  <span className={`w-2 h-2 rounded-full animate-bounce ${d ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={`px-4 py-3 border-t ${d ? 'border-white/10' : 'border-gray-100'}`}>
          <div className={`flex items-center gap-2 rounded-xl px-3 py-1 ${d ? 'bg-white/5' : 'bg-gray-50'}`}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi..."
              className={`flex-1 bg-transparent py-2 text-sm outline-none ${d ? 'text-white placeholder-gray-500' : 'text-[#172033] placeholder-gray-400'}`}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                input.trim() ? 'bg-[#ff7a1a] text-white hover:bg-[#e56a10]' : d ? 'text-gray-500' : 'text-gray-300'
              }`}
              aria-label="Gửi tin nhắn"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>

      <div className="fixed bottom-4 right-4 sm:right-6 z-50 flex flex-col items-center gap-3 pointer-events-none">
        <button
          onClick={scrollToTop}
          className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#ff7a1a] text-white shadow-lg border border-orange-400 transition-all duration-300 pointer-events-auto hover:bg-[#e56a10] hover:-translate-y-1 ${
            showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
          }`}
          aria-label="Lên đầu trang"
        >
          <ChevronUp size={22} />
        </button>

        <button
          id="chatbot-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer pointer-events-auto ${
            isOpen
              ? d ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-600'
              : 'bg-gradient-to-r from-[#ff7a1a] to-[#ff9a4d] text-white shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-110 animate-pulse-glow'
          }`}
          aria-label={isOpen ? 'Đóng chat' : 'Mở chat'}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>
    </>
  );
}
