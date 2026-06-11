import { Layers, Thermometer, FileCheck, ClipboardCheck, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const cards = [
  {
    icon: Layers,
    title: '200 микрон',
    desc: 'Толщина берёт удар на себя — камни и реагенты не достают до ЛКП',
  },
  {
    icon: Thermometer,
    title: 'Полиуретан',
    desc: 'Не жёлтеет и самовосстанавливается от мелких царапин под теплом',
  },
  {
    icon: FileCheck,
    title: 'Оригинал',
    desc: 'Плёнки с серийными номерами. Сертификаты и образцы в боксе',
  },
  {
    icon: ClipboardCheck,
    title: 'Контроль',
    desc: 'Осмотр через 2 недели. Проверяем швы и клей, входим в бокс сами',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    desc: 'м. Павелецкая, Жуков проезд 19. Можно приехать и посмотреть бокс',
  },
];

export default function TrustMaterials() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-dark py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-white text-3xl lg:text-[36px] font-bold text-center mb-14 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Почему плёнка держится 7 лет
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`bg-dark-card border border-dark-border rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1 hover:border-yellow/40 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon size={48} className="text-yellow mb-5" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-medium text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
