import { useEffect } from 'react';
import { CheckCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Spasibo() {
  useEffect(() => {
    // Цель Метрики — достижение страницы "Спасибо"
    if (typeof window.ym === 'function') {
      window.ym(111319071, 'reachGoal', 'spasibo_page_view');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="max-w-[500px] w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-yellow" />
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">
          Спасибо за заявку!
        </h1>

        <p className="text-white/70 text-base mb-8">
          Мы получили вашу заявку и перезвоним вам в течение 15 минут.
          Если не хотите ждать — напишите нам в Telegram.
        </p>

        {/* Telegram CTA */}
        <a
          href="https://t.me/zakleyppf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-yellow text-dark font-bold text-base px-8 py-4 rounded-xl hover:scale-[1.03] hover:shadow-glow transition-all duration-200 mb-10"
        >
          Написать в Telegram @zakleyppf
        </a>

        {/* Contacts */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-6 text-left space-y-4">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-yellow shrink-0" />
            <a href="tel:+79876226070" className="text-white font-semibold hover:text-yellow transition-colors">
              +7 (987) 622-60-70
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-yellow shrink-0" />
            <span className="text-white/70 text-sm">м. Павелецкая, Жуков проезд 19</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-yellow shrink-0" />
            <span className="text-white/70 text-sm">пн–сб, 10:00–20:00</span>
          </div>
        </div>

        {/* Back to main */}
        <a
          href="/"
          className="inline-block mt-8 text-gray-medium text-sm hover:text-yellow transition-colors"
        >
          ← Вернуться на главную
        </a>
      </div>
    </div>
  );
}
