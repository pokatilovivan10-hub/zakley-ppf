import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'Сколько по времени?',
    a: 'Лайт — 1 день, Стандарт — 2 дня, Полная / Цветная — 3–5 дней.',
  },
  {
    q: 'Можно ли снять плёнку?',
    a: 'Да, без следа на ЛКП. Полиуретан не взаимодействует с лаком.',
  },
  {
    q: 'Что будет с ЛКП?',
    a: 'Ничего. Плёнка сохраняет его — это главная задача PPF.',
  },
  {
    q: 'Матовая или глянцевая?',
    a: 'Обе в наличии. Покажем образцы в боксе.',
  },
  {
    q: 'Как ухаживать?',
    a: 'Обычная мойка, без ограничений.',
  },
  {
    q: 'Почему цена от класса?',
    a: 'Площадь кузова и сложность деталей разные.',
  },
  {
    q: 'Можно ли на выходных?',
    a: 'Пн–сб, 10:00–20:00. Воскресенье — выходной.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-dark py-20 lg:py-28">
      <div ref={ref} className="max-w-[800px] mx-auto px-6">
        <h2
          className={`text-white text-3xl lg:text-[36px] font-bold text-center mb-14 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Ответы на вопросы
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-dark-border transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-white font-semibold text-base pr-4 group-hover:text-yellow transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-yellow shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="text-gray-medium text-sm leading-relaxed pb-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
