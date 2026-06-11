import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    title: 'Полировка + керамика',
    desc: 'Детейлинг-коррекция ЛКП + нанесение защитного керамического состава в 2 слоя',
    price: 'от 30 000 ₽',
  },
  {
    title: 'Антидождь',
    desc: 'Нанесение специального покрытия на стёкла. Даже в дождь стёкла останутся сухими',
    price: 'от 3 000 ₽',
  },
  {
    title: 'Керамика на плёнку',
    desc: 'Защитный гидрофобный состав для полиуретановых плёнок',
    price: '15 000 ₽',
  },
];

export default function Detailing() {
  const { ref, inView } = useInView();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-light py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-dark text-3xl lg:text-[36px] font-bold text-center mb-4 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Уже оклеили авто? Добавьте детейлинг
        </h2>
        <p
          className={`text-dark/80 text-base text-center mb-14 max-w-[600px] mx-auto transition-all duration-600 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Полировка + керамика перед оклейкой = идеальное ЛКП под плёнку
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 shadow-card transition-all duration-700 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-dark font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-medium text-sm leading-relaxed mb-6">{service.desc}</p>
              <p className="text-dark font-extrabold text-xl">{service.price}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex justify-center transition-all duration-600 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 bg-yellow text-dark font-bold text-base px-9 py-4 rounded-xl hover:scale-[1.03] hover:shadow-glow active:scale-[0.98] transition-all duration-200"
          >
            Узнать, что подойдёт моему авто
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
