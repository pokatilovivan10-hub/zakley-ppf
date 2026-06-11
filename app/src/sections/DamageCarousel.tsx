import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const photos = [
  '/images/damage-1.jpg',
  '/images/damage-2.jpg',
  '/images/damage-3.jpg',
  '/images/damage-4.jpg',
  '/images/damage-5.jpg',
];

export default function DamageCarousel() {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % photos.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + photos.length) % photos.length), []);

  // Auto-play
  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [inView, next]);

  return (
    <section className="bg-gray-light py-12 lg:py-16 relative">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-dark text-3xl lg:text-[36px] font-bold text-center mb-6 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Фото говорят сами за себя
        </h2>
        <p
          className={`text-dark/70 text-base text-center mb-12 max-w-[700px] mx-auto transition-all duration-600 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Сколы появляются очень быстро. Защитная плёнка помогает избежать дорогостоящей покраски и сохранить автомобиль в отличном состоянии.
        </p>

        {/* Carousel */}
        <div
          className={`relative max-w-[700px] mx-auto transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-dark-card shadow-card-dark">
            {photos.map((photo, i) => (
              <img
                key={photo}
                src={photo}
                alt={`Повреждение ЛКП ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/60 rounded-full flex items-center justify-center text-white hover:text-yellow hover:bg-dark transition-colors z-10"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/60 rounded-full flex items-center justify-center text-white hover:text-yellow hover:bg-dark transition-colors z-10"
              aria-label="Следующее фото"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-dark/60 rounded-full px-3 py-1 text-white text-xs font-medium z-10">
              {current + 1} / {photos.length}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-yellow w-7' : 'bg-dark/20 hover:bg-dark/40'
                }`}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
