export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-medium text-xs">
          © 2025 «Заклей Пленкой»
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-medium">
          <span className="hover:text-yellow cursor-pointer transition-colors">
            Политика конфиденциальности
          </span>
          <span className="hover:text-yellow cursor-pointer transition-colors">
            Обработка cookies
          </span>
          <span className="hover:text-yellow cursor-pointer transition-colors">
            Информация на сайте не является публичной офертой
          </span>
        </div>
      </div>
    </footer>
  );
}
