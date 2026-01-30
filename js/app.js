import { initGrid } from './modules/grid-bg.js';
import { initScrambler } from './modules/scrambler.js';
import { initPreloader, initMagneticButtons } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Запускаем загрузочный экран
    initPreloader();

    // 2. Фон и эффекты текста (из предыдущего ответа)
    initGrid();
    
    // Запускаем дешифровку с задержкой, чтобы видно было после прелоадера
    setTimeout(() => {
        initScrambler();
    }, 2000);

    // 3. UI улучшения
    initMagneticButtons();

    // 4. Логика кастомного курсора
    const cursor = document.getElementById('cursor');
    
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => {
            // Используем transform для лучшей производительности
            cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        });

        // Эффект при наведении на ссылки
        document.querySelectorAll('a, button, input, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('scale-[3]', 'mix-blend-difference', 'bg-white');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('scale-[3]', 'mix-blend-difference', 'bg-white');
            });
        });
    }

    console.log("%c NEXUS SYSTEMS ONLINE ", "background: #fff; color: #000; padding: 4px; font-weight: bold;");
});