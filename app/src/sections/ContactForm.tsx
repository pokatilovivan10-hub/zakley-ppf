import { useState } from 'react';
import { Phone, Clock, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router';

// ==== НАСТРОЙКИ ====
// 1. Замените PLACEHOLDER на реальный URL вашего Google Apps Script после развёртывания
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPLACEHOLDER/exec';

// 2. Telegram-бот для уведомлений:
//    - Напишите @BotFather → создайте бота → скопируйте токен
//    - Напишите @userinfobot → получите ваш ID → вставьте сюда
const TG_BOT_TOKEN = '8944529971:AAGFhx1Wmpqp731nr_d0JCElZqdBX09wPRU';
const TG_CHAT_IDS = ['665323584', '1509767525'];
// ====================

const PHONE_REGEX = /^[+\d\s()\-]{7,}$/;

export default function ContactForm() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');

    if (!form.name || !form.phone) return;

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 7 || !PHONE_REGEX.test(form.phone)) {
      setPhoneError('Введите корректный номер телефона (минимум 7 цифр)');
      return;
    }

    const payload = {
      name: form.name,
      phone: form.phone,
      telegram: '',
      car: form.comment,
      service: '',
      source: 'zakley-ppf сайт',
    };

    // 1. Отправка в Google Sheets (если URL настроен)
    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error('Google Sheets submission failed:', err);
      }
    }

    // 2. Отправка уведомления в Telegram (если настроен)
    if (TG_BOT_TOKEN && TG_CHAT_IDS.length > 0) {
      try {
        const text = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${form.name}
📞 <b>Телефон:</b> ${form.phone}
🚗 <b>Авто / комментарий:</b> ${form.comment || '—'}
📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU')}
        `.trim();

        for (const chatId of TG_CHAT_IDS) {
          fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: 'HTML',
            }),
          }).catch(err => console.error(`Telegram send to ${chatId} failed:`, err));
        }
      } catch (err) {
        console.error('Telegram notification failed:', err);
      }
    }

    // 3. Яндекс.Метрика
    if (typeof window.ym === 'function') {
      window.ym(111319071, 'reachGoal', 'form_successful_submission');
      console.log('Цель Метрики отправлена: form_successful_submission');
    }

    // 4. Очистка и редирект
    setForm({ name: '', phone: '', comment: '' });
    navigate('/spasibo');
  };

  return (
    <section id="contact" className="bg-gray-light py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10">
          {/* Form Column */}
          <div
            className={`transition-all duration-600 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-dark text-3xl lg:text-[36px] font-bold mb-4">
              Оставьте заявку — перезвоним за 15 минут
            </h2>
            <p className="text-dark/80 text-base mb-8">
              Или напишите в Telegram{' '}
              <a
                href="https://t.me/zakleyppf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark font-bold hover:underline"
              >
                @zakleyppf
              </a>{' '}
              — пришлём расчёт и карту зон риска
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors"
              />
              <div>
                <input
                  type="tel"
                  placeholder="Телефон / WhatsApp"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    setPhoneError('');
                  }}
                  required
                  className={`w-full bg-dark-card border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors ${
                    phoneError ? 'border-red-500' : 'border-dark-border'
                  }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-2 ml-1">{phoneError}</p>
                )}
              </div>
              <textarea
                placeholder="Марка и модель авто, желаемый комплекс (необязательно)"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                rows={3}
                className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-yellow text-dark font-bold text-base px-9 py-4 rounded-xl hover:scale-[1.02] hover:shadow-glow active:scale-[0.98] transition-all duration-200"
              >
                Получить расчёт и подарок
              </button>
              <p className="text-gray-medium text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <span className="text-dark font-semibold hover:underline cursor-pointer">
                  Политикой конфиденциальности
                </span>
              </p>
            </form>
          </div>

          {/* Map & Contacts Column */}
          <div
            className={`transition-all duration-600 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-2xl overflow-hidden mb-6 h-[320px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.641521%2C55.722821&z=16&pt=37.641521%2C55.722821%2Cpm2ywl"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Заклей Пленкой на карте"
                className="grayscale-[30%]"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="space-y-5">
                <a href="tel:+79876226070" className="flex items-center gap-4 group">
                  <Phone size={22} className="text-yellow" />
                  <span className="text-dark font-bold text-lg group-hover:text-yellow transition-colors">
                    +7 (987) 622-60-70
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <Clock size={22} className="text-yellow" />
                  <span className="text-dark text-base">пн–сб, 10:00–20:00</span>
                </div>
                <a
                  href="https://t.me/zakleyppf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <Send size={22} className="text-yellow" />
                  <span className="text-dark font-bold group-hover:text-yellow transition-colors">
                    @zakleyppf
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
