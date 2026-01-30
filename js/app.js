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


    console.log("%c NEXUS SYSTEMS ONLINE ", "background: #fff; color: #000; padding: 4px; font-weight: bold;");
});