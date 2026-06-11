import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const packages = [
  {
    name: 'Лайт',
    desc: 'Защита зон риска для города. Подходит для ежедневной езды',
    price: 'от 18 000 ₽',
    hit: false,
  },
  {
    name: 'Стандарт',
    desc: 'Полная передняя часть + крыша. Защита от пескоструя на трассе',
    price: 'от 45 000 ₽',
    hit: true,
  },
  {
    name: 'Полная защита',
    desc: 'Кузов целиком. Сохраняем заводской ЛКП и стоимость',
    price: 'от 180 000 ₽',
    hit: false,
  },
  {
    name: 'Цветной полиуретан',
    desc: 'Меняем цвет + PPF-защита в одной плёнке. Толщина 200 микрон',
    price: 'от 320 000 ₽',
    hit: false,
  },
];

export default function Packages() {
  const { ref, inView } = useInView();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="bg-dark py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-white text-3xl lg:text-[36px] font-bold text-center mb-14 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Комплексы по защите кузова
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative bg-dark-card border rounded-2xl p-8 lg:p-10 transition-all duration-700 hover:-translate-y-1 ${
                pkg.hit ? 'border-yellow border-2' : 'border-dark-border hover:border-yellow/40'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.hit && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow text-dark text-xs font-bold px-4 py-1 rounded-full">
                  хит продаж
                </span>
              )}
              <h3 className="text-white font-semibold text-xl mb-3">Комплекс {pkg.name}</h3>
              <p className="text-gray-medium text-sm leading-relaxed mb-6">{pkg.desc}</p>
              <p className="text-yellow font-bold text-2xl">{pkg.price}</p>
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
            Рассчитать стоимость на мой авто
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
