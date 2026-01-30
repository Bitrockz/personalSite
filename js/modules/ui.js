// 1. Preloader Logic
export function initPreloader() {
    const preloader = document.getElementById('preloader');
    const bar = document.getElementById('loader-bar');
    const text = document.getElementById('loader-text');
    
    if (!preloader) return;

    let width = 0;
    const interval = setInterval(() => {
        // Случайный шаг загрузки для реалистичности
        width += Math.floor(Math.random() * 10) + 1;
        
        if (width > 100) width = 100;
        
        bar.style.width = width + '%';
        text.innerText = `LOADING RESOURCES... ${width}%`;

        if (width === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 50); // Скорость загрузки
}

// 2. Magnetic Buttons Logic
export function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');
    const isMobile = window.innerWidth < 768;

    if (isMobile) return;

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Смещаем кнопку к курсору (делим на 5 для мягкости)
            btn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}