import { Award, ShieldCheck, BadgeCheck, ClipboardCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const cards = [
  {
    icon: Award,
    title: 'Более 1500 авто с 2015 года',
    subtitle: 'Опыт',
  },
  {
    icon: ShieldCheck,
    title: 'Единственные на рынке даём гарантию на плёнку на срок эксплуатации авто',
    subtitle: 'Гарантия',
  },
  {
    icon: BadgeCheck,
    title: 'Оригинальные плёнки с серийными номерами. Сертификаты в боксе',
    subtitle: 'Оригинал',
  },
  {
    icon: ClipboardCheck,
    title: 'Контрольный осмотр через 2 недели. Проверяем швы и клей',
    subtitle: 'Контроль',
  },
];

// Pre-defined particle data
const particles = [
  { w: 14, h: 14, l: 12, t: 15, d: 16, del: 0 },
  { w: 18, h: 18, l: 82, t: 22, d: 20, del: 3 },
  { w: 12, h: 12, l: 38, t: 35, d: 14, del: 5 },
  { w: 20, h: 20, l: 72, t: 55, d: 18, del: 2 },
  { w: 16, h: 16, l: 22, t: 72, d: 15, del: 6 },
  { w: 22, h: 22, l: 58, t: 88, d: 19, del: 1 },
  { w: 14, h: 14, l: 92, t: 45, d: 17, del: 4 },
  { w: 18, h: 18, l: 48, t: 62, d: 13, del: 7 },
  { w: 12, h: 12, l: 68, t: 82, d: 21, del: 3 },
  { w: 20, h: 20, l: 15, t: 92, d: 16, del: 8 },
];

export default function Trust() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-dark py-20 lg:py-24 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-[-40px] z-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.w}px`,
              height: `${p.h}px`,
              left: `${p.l}%`,
              top: `${p.t}%`,
              background: 'radial-gradient(circle, rgba(250,254,12,0.5) 0%, rgba(250,254,12,0.1) 60%, transparent 100%)',
              boxShadow: '0 0 20px rgba(250,254,12,0.35)',
              animation: `floatParticle ${p.d}s ease-in-out infinite`,
              animationDelay: `${p.del}s`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.subtitle}
                className={`bg-dark-card border border-dark-border rounded-2xl p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-yellow/40 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon size={48} className="text-yellow mb-5" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-base leading-snug">{card.title}</h3>
                <span className="sr-only">{card.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          25% { transform: translateY(-25px) translateX(12px); opacity: 0.8; }
          50% { transform: translateY(-45px) translateX(-12px); opacity: 0.4; }
          75% { transform: translateY(-25px) translateX(8px); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
