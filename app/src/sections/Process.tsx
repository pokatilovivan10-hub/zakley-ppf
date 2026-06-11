import { Droplets, Wrench, Sparkles, Paintbrush, Layers, ClipboardCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: Droplets,
    title: 'Детейлинг-мойка',
    desc: 'Обезжириваем и готовим поверхность под плёнку',
  },
  {
    icon: Wrench,
    title: 'Разбор в боксе',
    desc: 'Снимаем элементы для идеальной оклейки',
  },
  {
    icon: Sparkles,
    title: 'Очистка глиной',
    desc: 'Убираем битум и металл без царапин',
  },
  {
    icon: Paintbrush,
    title: 'Полировка',
    desc: 'Убираем царапины и сколы перед оклейкой',
  },
  {
    icon: Layers,
    title: 'Оклейка плёнкой',
    desc: 'Каждый элемент вручную, без пузырей',
  },
  {
    icon: ClipboardCheck,
    title: 'Контрольный осмотр',
    desc: 'Проверяем швы, моем, отдаём ключи',
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="bg-gray-light py-20 lg:py-28 overflow-hidden">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-dark text-3xl lg:text-[36px] font-bold text-center mb-4 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Этапы оклейки
        </h2>
        <p
          className={`text-dark/60 text-base text-center mb-16 max-w-[500px] mx-auto transition-all duration-600 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          От мойки до выдачи — каждый этап под контролем
        </p>

        {/* Desktop: 3x2 grid with connecting lines */}
        <div className="hidden lg:block relative">
          {/* Horizontal connecting lines */}
          <div className="absolute top-[80px] left-[16.6%] right-[16.6%] h-0.5">
            <div
              className={`h-full bg-yellow transition-all duration-1000 ease-out delay-500 ${
                inView ? 'w-full' : 'w-0'
              }`}
            />
          </div>
          <div className="absolute top-[280px] left-[16.6%] right-[16.6%] h-0.5">
            <div
              className={`h-full bg-yellow transition-all duration-1000 ease-out delay-1000 ${
                inView ? 'w-full' : 'w-0'
              }`}
            />
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const row = Math.floor(i / 3);
              const isReversed = row % 2 === 1;
              const visualIndex = isReversed ? (row + 1) * 3 - 1 - (i % 3) : i;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${visualIndex * 150}ms` }}
                >
                  {/* Number badge */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-dark flex items-center justify-center shadow-card mb-5 group hover:scale-110 transition-transform duration-300">
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-yellow text-dark font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <Icon size={28} className="text-yellow" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-dark font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative max-w-[500px] mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow/30" />
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 transition-all duration-600 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-dark flex items-center justify-center shadow-card">
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-yellow text-dark font-bold text-[10px] flex items-center justify-center">
                      {i + 1}
                    </span>
                    <Icon size={22} className="text-yellow" strokeWidth={1.5} />
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-card flex-1">
                    <h3 className="text-dark font-bold text-base mb-1">{step.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline info bar */}
        <div
          className={`mt-16 bg-dark rounded-2xl p-6 lg:p-8 text-center max-w-[900px] mx-auto transition-all duration-600 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-white text-sm lg:text-base">
            Сроки выполнения:{' '}
            <span className="text-yellow font-bold">Лайт — 1 день</span>{' '}
            <span className="text-dark/40 mx-2">|</span>{' '}
            <span className="text-yellow font-bold">Стандарт — 2 дня</span>{' '}
            <span className="text-dark/40 mx-2">|</span>{' '}
            <span className="text-yellow font-bold">Полная / Цветная — 3–5 дней</span>
          </p>
        </div>
      </div>
    </section>
  );
}
