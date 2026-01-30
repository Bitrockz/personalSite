export function initScrambler() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@&";
    
    const elements = document.querySelectorAll('.scramble-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scramble(entry.target);
                observer.unobserve(entry.target); // Запускаем один раз
            }
        });
    }, { threshold: 0.5 });
    
    elements.forEach(el => observer.observe(el));
    
    function scramble(element) {
        let iterations = 0;
        const originalText = element.dataset.text || element.innerText;
        
        const interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            
            iterations += 1 / 3; // Скорость расшифровки
        }, 30);
    }
}