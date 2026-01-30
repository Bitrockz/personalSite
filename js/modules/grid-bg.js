export function initGrid() {
    const canvas = document.getElementById('grid-canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let mouseX = -100, mouseY = -100;
    
    // Настройки сетки
    const gridSize = 40;
    const pointSize = 1;
    
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        // Рисуем точки
        for (let x = 0; x <= width; x += gridSize) {
            for (let y = 0; y <= height; y += gridSize) {
                
                // Вычисляем расстояние до мыши
                const dx = x - mouseX;
                const dy = y - mouseY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                // Чем ближе мышь, тем ярче и больше точка
                const maxDist = 200;
                let alpha = 0.1;
                let size = pointSize;
                
                if (dist < maxDist) {
                    const factor = (maxDist - dist) / maxDist;
                    alpha += factor * 0.5;
                    size += factor * 2; // Увеличиваем размер
                    
                    // Рисуем линии к соседям если близко к мыши (эффект нейросети)
                    if (factor > 0.5) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${factor * 0.2})`;
                        ctx.stroke();
                    }
                }
                
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
}