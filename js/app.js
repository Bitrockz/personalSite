import { initGrid } from './modules/grid-bg.js';
import { initScrambler } from './modules/scrambler.js';

document.addEventListener('DOMContentLoaded', () => {
    // Запуск канвас фона
    initGrid();
    
    // Запуск "дешифровщика" текста
    initScrambler();

    // Логика курсора
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Увеличение курсора при наведении на ссылки
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('scale-150', 'bg-white/20'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('scale-150', 'bg-white/20'));
    });
    
    console.log("%c SYSTEM READY ", "background: #3b82f6; color: #fff; padding: 4px; font-weight: bold;");
});