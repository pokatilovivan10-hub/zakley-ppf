import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  image: string;
  title: string;
  desc: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    image: '/images/bmw-xm.jpg',
    title: 'BMW XM',
    desc: 'Срок выполнения: 3 дня. Материал: NAR Premium PPF Matte. Задача: сохранить цвет и защитить от сколов. Результат: премиальный вид + защита кузова.',
    gallery: [
      '/images/bmw-xm.jpg',
      '/images/bmw-xm-2.jpg',
      '/images/bmw-xm-3.jpg',
      '/images/bmw-xm-4.jpg',
      '/images/bmw-xm-5.jpg',
    ],
  },
  {
    image: '/images/li-auto-l9.jpg',
    title: 'Li Auto L9',
    desc: 'Срок выполнения: 3 дня. Материал: ZEN PPF Matte. Задача: защита с первых км. Результат: сдержанный премиум без лишнего глянца.',
    gallery: [
      '/images/li-auto-l9.jpg',
      '/images/li-auto-l9-2.jpg',
      '/images/li-auto-l9-3.jpg',
      '/images/li-auto-l9-4.jpg',
      '/images/li-auto-l9-5.jpg',
      '/images/li-auto-l9-6.jpg',
    ],
  },
  {
    image: '/images/bmw-x6m.jpg',
    title: 'BMW X6M',
    desc: 'Срок выполнения: 3 дня. Материал: Just Wrap PPF Soft. Задача: сохранить яркий красный цвет. Результат: насыщенность цвета + защита.',
    gallery: [
      '/images/bmw-x6m.jpg',
      '/images/bmw-x6m-2.jpg',
      '/images/bmw-x6m-3.jpg',
      '/images/bmw-x6m-4.jpg',
      '/images/bmw-x6m-5.jpg',
    ],
  },
  {
    image: '/images/mercedes-gls.jpg',
    title: 'Mercedes GLS',
    desc: 'Срок выполнения: 3 дня. Материал: Just Wrap PPF Hard. Задача: восстановить блеск и защитить. Результат: глубина цвета + защита ЛКП.',
    gallery: [
      '/images/mercedes-gls.jpg',
      '/images/mercedes-gls-2.jpg',
      '/images/mercedes-gls-3.jpg',
      '/images/mercedes-gls-4.jpg',
    ],
  },
  {
    image: '/images/kia-mohave.jpg',
    title: 'Kia Mohave',
    desc: 'Срок выполнения: 4 дня. Материал: Just Wrap PPF (Black Matte). Задача: сменить цвет + защитить. Результат: брутальный вид + защита кузова.',
    gallery: [
      '/images/kia-mohave.jpg',
      '/images/kia-mohave-2.jpg',
      '/images/kia-mohave-3.jpg',
      '/images/kia-mohave-4.jpg',
      '/images/kia-mohave-5.jpg',
      '/images/kia-mohave-6.jpg',
      '/images/kia-mohave-7.jpg',
      '/images/kia-mohave-8.jpg',
      '/images/kia-mohave-9.jpg',
      '/images/kia-mohave-10.jpg',
    ],
  },
  {
    image: '/images/bmw-x7.jpg',
    title: 'BMW X7',
    desc: 'Срок выполнения: 3 дня. Материал: ZEN PPF - ST. Задача: защита премиум-SUV. Результат: сатиновый вид + защита от сколов.',
    gallery: [
      '/images/bmw-x7.jpg',
      '/images/bmw-x7-2.jpg',
      '/images/bmw-x7-3.jpg',
      '/images/bmw-x7-4.jpg',
      '/images/bmw-x7-5.jpg',
      '/images/bmw-x7-6.jpg',
      '/images/bmw-x7-7.jpg',
      '/images/bmw-x7-8.jpg',
    ],
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setActiveImageIdx(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (activeProject) {
      setActiveImageIdx((prev) => (prev + 1) % activeProject.gallery.length);
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setActiveImageIdx((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length);
    }
  };

  return (
    <section id="portfolio" className="bg-dark py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-yellow text-4xl lg:text-[48px] font-extrabold text-center mb-4 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Наши проекты
        </h2>
        <p
          className={`text-gray-medium text-base text-center mb-14 transition-all duration-600 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Реальные автомобили наших клиентов после оклейки PPF
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className={`group rounded-2xl overflow-hidden bg-dark-card border border-dark-border cursor-pointer transition-all duration-600 hover:-translate-y-1 hover:border-yellow/30 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-yellow/0 group-hover:bg-yellow/10 transition-colors duration-300" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow/90 text-dark font-bold text-sm px-5 py-2.5 rounded-full">
                    Смотреть проект
                  </div>
                </div>
                <h3 className="absolute bottom-4 left-5 text-white font-bold text-xl">
                  {project.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-medium text-sm leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 bg-dark-card rounded-2xl max-w-[900px] w-full max-h-[90vh] overflow-y-auto border border-dark-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:text-yellow hover:bg-dark transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[16/10] bg-dark">
              <img
                src={activeProject.gallery[activeImageIdx]}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              {activeProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/70 rounded-full flex items-center justify-center text-white hover:text-yellow hover:bg-dark transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/70 rounded-full flex items-center justify-center text-white hover:text-yellow hover:bg-dark transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {activeProject.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === activeImageIdx ? 'bg-yellow' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-white font-bold text-2xl mb-3">{activeProject.title}</h3>
              <p className="text-gray-medium text-base leading-relaxed">{activeProject.desc}</p>
              {activeProject.gallery.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {activeProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                        idx === activeImageIdx ? 'border-yellow' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
