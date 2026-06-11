import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Gift, ShieldCheck, Award, Clock, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, inView } = useInView();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    const el = heroRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      return () => el.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const bgStyle = {
    transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`,
    transition: 'transform 0.15s ease-out',
  };
  const contentStyle = {
    transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
    transition: 'transform 0.15s ease-out',
  };
  const particleContainerStyle = {
    transform: `translate(${mousePos.x * 45}px, ${mousePos.y * 45}px)`,
    transition: 'transform 0.12s ease-out',
  };

  const particles = [
    { w: 14, h: 14, l: 15, t: 12, d: 14, del: 0 },
    { w: 18, h: 18, l: 78, t: 18, d: 18, del: 2 },
    { w: 12, h: 12, l: 42, t: 25, d: 12, del: 4 },
    { w: 20, h: 20, l: 65, t: 35, d: 16, del: 1 },
    { w: 16, h: 16, l: 25, t: 45, d: 20, del: 6 },
    { w: 22, h: 22, l: 88, t: 55, d: 15, del: 3 },
    { w: 14, h: 14, l: 55, t: 65, d: 17, del: 5 },
    { w: 18, h: 18, l: 12, t: 72, d: 13, del: 7 },
    { w: 12, h: 12, l: 72, t: 82, d: 19, del: 2 },
    { w: 20, h: 20, l: 35, t: 88, d: 14, del: 8 },
    { w: 16, h: 16, l: 92, t: 42, d: 16, del: 4 },
    { w: 14, h: 14, l: 48, t: 75, d: 18, del: 1 },
  ];

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Parallax Background */}
      <div
        className="absolute inset-[-40px] z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...bgStyle,
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(23,27,29,0.6) 0%, rgba(23,27,29,0.85) 100%)',
          transform: `translate(${mousePos.x * -5}px, ${mousePos.y * -5}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-[-60px] z-[2] pointer-events-none overflow-hidden" style={particleContainerStyle}>
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.w}px`,
              height: `${p.h}px`,
              left: `${p.l}%`,
              top: `${p.t}%`,
              background: 'radial-gradient(circle, rgba(250,254,12,0.6) 0%, rgba(250,254,12,0.15) 60%, transparent 100%)',
              boxShadow: '0 0 24px rgba(250,254,12,0.45), 0 0 48px rgba(250,254,12,0.15)',
              animation: `floatParticle ${p.d}s ease-in-out infinite`,
              animationDelay: `${p.del}s`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-[72px]" style={contentStyle}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          {/* Left column */}
          <div className="max-w-[700px]">
            {/* Headline */}
            <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight break-words">
                ОКЛЕЙКА АВТО
                <br />
                ПОЛИУРЕТАНОВОЙ
                <br />
                ПЛЁНКОЙ
              </h1>
              <div className="mt-2 h-1 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] bg-yellow rounded-full" />
            </div>

            {/* Subheadline */}
            <p className={`mt-6 text-white/85 text-base sm:text-lg leading-relaxed max-w-[540px] transition-all duration-600 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Сохраните ЛКП и стоимость машины. Расчёт за 2 минуты. Гарантия 7 лет.
            </p>

            {/* Location subtitle */}
          <p className={`mt-3 text-white/50 text-sm font-medium transition-all duration-600 ease-out delay-250 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            м. Павелецкая
          </p>

          {/* 3 compact USP lines */}
            <div className={`mt-6 flex flex-col gap-2.5 transition-all duration-600 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: ShieldCheck, text: 'Гарантия на срок эксплуатации авто' },
                { icon: Award, text: '1500+ авто оклеены' },
                { icon: Clock, text: 'Не режем плёнку на кузове' },
              ].map((usp, i) => {
                const Icon = usp.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-yellow shrink-0" />
                    <span className="text-white/70 text-sm font-medium">{usp.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className={`mt-8 transition-all duration-500 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-yellow text-dark font-bold text-base px-9 py-4 rounded-xl hover:scale-[1.03] hover:shadow-glow active:scale-[0.98] transition-all duration-200"
              >
                Оставить заявку и получить расчёт
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right column: promo dashboard */}
          <div className={`w-full lg:w-auto lg:max-w-[340px] transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="relative bg-yellow rounded-2xl py-6 px-5 sm:py-12 sm:px-8 flex flex-col items-center text-center gap-3 sm:gap-6 animate-promo-glow overflow-hidden">
              <div className="absolute top-0 right-0 bg-dark text-yellow text-[10px] sm:text-xs font-extrabold px-3 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl rounded-tr-2xl uppercase tracking-wider">
                Акция
              </div>
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Gift size={36} className="sm:hidden text-yellow animate-gift-bounce" />
                <Gift size={56} className="hidden sm:block text-yellow animate-gift-bounce" />
              </div>
              <div>
                <p className="text-dark font-extrabold text-base sm:text-xl lg:text-2xl leading-tight">
                  При бронировании любого элемента — бронирование фар в подарок!
                </p>
                <p className="text-dark/70 font-semibold text-xs sm:text-sm mt-2 sm:mt-3">
                  Экономия до 6 000 ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10">
        <span className="text-gray-medium text-xs">Листайте вниз</span>
        <ChevronDown size={20} className="text-gray-medium animate-bounce-down" />
      </div>

    </section>
  );
}
