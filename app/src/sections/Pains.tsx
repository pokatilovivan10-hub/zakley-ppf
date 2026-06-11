import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pains = [
  {
    num: '01',
    title: 'Сколы и сквалы',
    desc: 'Песок и реагенты оставляют следы на капоте и бампере уже за первую зиму',
  },
  {
    num: '02',
    title: 'Царапины от моек',
    desc: 'Щётки на автомойках, ветки и грязь царапают ЛКП при каждой мойке',
  },
  {
    num: '03',
    title: 'Потеря стоимости',
    desc: 'При перепродаже сколы снижают цену авто на 5–15% — десятки тысяч рублей',
  },
  {
    num: '04',
    title: 'Пескоструй',
    desc: 'Фары, зеркала, передние крылья страдают больше всего',
  },
];

export default function Pains() {
  const { ref, inView } = useInView();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-light py-20 lg:py-28 relative">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-dark text-3xl lg:text-[36px] font-bold text-center mb-14 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Что происходит с ЛКП без защиты
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <div
              key={pain.num}
              className={`bg-dark-card rounded-2xl p-10 lg:p-12 relative overflow-hidden transition-all duration-700 min-h-[260px] flex flex-col justify-center ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="absolute top-4 right-4 text-yellow/20 text-7xl font-extrabold leading-none select-none">
                {pain.num}
              </span>
              <h3 className="text-white font-bold text-2xl mb-4 relative z-10">{pain.title}</h3>
              <p className="text-white/80 text-base leading-relaxed relative z-10 font-medium">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex justify-center transition-all duration-600 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 bg-yellow text-dark font-bold text-base px-9 py-4 rounded-xl hover:scale-[1.03] hover:shadow-glow active:scale-[0.98] transition-all duration-200"
          >
            Подобрать защиту под мою машину
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
