import { useInView } from '../hooks/useInView';

const rows = [
  { element: 'Передние фары', i: '6 000 ₽', ii: '6 000 ₽', iii: '6 000 ₽' },
  { element: 'Зеркала', i: '6 000 ₽', ii: '6 000 ₽', iii: '6 000 ₽' },
  { element: 'Противотуманки', i: '2 000 ₽', ii: '2 000 ₽', iii: '2 000 ₽' },
  { element: 'Зоны под ручками', i: '2 000 ₽', ii: '2 000 ₽', iii: '2 000 ₽' },
  { element: 'Лобовое стекло', i: '25 000 ₽', ii: '30 000 ₽', iii: '35 000 ₽' },
];

export default function Elements() {
  const { ref, inView } = useInView();

  return (
    <section id="elements" className="bg-gray-light py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-dark text-3xl lg:text-[36px] font-bold mb-4 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Оклейка по элементам
        </h2>
        <p
          className={`text-dark/80 text-base mb-10 max-w-[700px] transition-all duration-600 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Начните с самых уязвимых зон или доклейте отдельные элементы после комплекса.
          Нестандартные авто с обвесами — по запросу.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl">
          <div className="grid grid-cols-4 bg-dark text-white text-sm font-semibold">
            <div className="px-6 py-4">Область оклейки</div>
            <div className="px-6 py-4 text-center">I класс</div>
            <div className="px-6 py-4 text-center">II класс</div>
            <div className="px-6 py-4 text-center">III класс</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.element}
              className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-light'} transition-all duration-500 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="px-6 py-4 font-medium text-dark">{row.element}</div>
              <div className="px-6 py-4 text-center text-dark">{row.i}</div>
              <div className="px-6 py-4 text-center text-dark">{row.ii}</div>
              <div className="px-6 py-4 text-center text-dark">{row.iii}</div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={row.element}
              className={`bg-white rounded-2xl p-5 shadow-card transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h4 className="font-semibold text-dark mb-3">{row.element}</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center">
                  <span className="text-gray-medium text-xs block">I класс</span>
                  <span className="text-dark font-medium">{row.i}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-medium text-xs block">II класс</span>
                  <span className="text-dark font-medium">{row.ii}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-medium text-xs block">III класс</span>
                  <span className="text-dark font-medium">{row.iii}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
