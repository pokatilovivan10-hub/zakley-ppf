const marqueeItems = [
  'SunTek',
  'XPEL',
  'STEK',
  'LLumar',
  'PPF',
  'Керамика',
  'Полировка',
  'Антидождь',
  '7 лет гарантии',
  '1500+ авто',
  'с 2015 года',
  'м. Павелецкая',
];

export default function MarqueeBlock() {
  // Duplicate items for seamless loop
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="bg-dark py-12 overflow-hidden border-y border-dark-border">
      {/* Row 1 - moves left */}
      <div className="relative flex overflow-hidden mb-4">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={`l-${i}`}
              className="inline-flex items-center mx-6 text-2xl md:text-3xl font-extrabold text-white/10 uppercase tracking-widest select-none"
            >
              {item}
              <span className="ml-6 w-2 h-2 bg-yellow/40 rounded-full" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-left whitespace-nowrap" aria-hidden>
          {items.map((item, i) => (
            <span
              key={`l2-${i}`}
              className="inline-flex items-center mx-6 text-2xl md:text-3xl font-extrabold text-white/10 uppercase tracking-widest select-none"
            >
              {item}
              <span className="ml-6 w-2 h-2 bg-yellow/40 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - moves right (reverse) */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...items].reverse().map((item, i) => (
            <span
              key={`r-${i}`}
              className="inline-flex items-center mx-6 text-2xl md:text-3xl font-extrabold text-yellow/15 uppercase tracking-widest select-none"
            >
              {item}
              <span className="ml-6 w-2 h-2 bg-white/20 rounded-full" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-right whitespace-nowrap" aria-hidden>
          {[...items].reverse().map((item, i) => (
            <span
              key={`r2-${i}`}
              className="inline-flex items-center mx-6 text-2xl md:text-3xl font-extrabold text-yellow/15 uppercase tracking-widest select-none"
            >
              {item}
              <span className="ml-6 w-2 h-2 bg-white/20 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
