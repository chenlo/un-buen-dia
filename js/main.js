document.addEventListener('DOMContentLoaded', () => {
    // Añadir efecto de hover con sonido opcional
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', () => {
            hotspot.style.transform = 'translateY(-10px) scale(1.05)';
            
            // Añadir efecto de brillo
            const glowEffect = document.createElement('div');
            glowEffect.classList.add('glow-effect');
            hotspot.appendChild(glowEffect);
            
            // Reproducir sonido de hover (opcional)
            // const hoverSound = new Audio('sounds/hover.mp3');
            // hoverSound.volume = 0.2;
            // hoverSound.play();
        });
        
        hotspot.addEventListener('mouseleave', () => {
            hotspot.style.transform = 'translateY(0) scale(1)';
            
            // Eliminar efecto de brillo
            const glowEffect = hotspot.querySelector('.glow-effect');
            if (glowEffect) {
                glowEffect.remove();
            }
        });
        
        hotspot.addEventListener('click', (e) => {
            // Añadir una pequeña animación al hacer clic
            hotspot.style.transform = 'scale(0.95)';
            
            // Reproducir sonido de clic (opcional)
            // const clickSound = new Audio('sounds/click.mp3');
            // clickSound.volume = 0.3;
            // clickSound.play();
            
            setTimeout(() => {
                hotspot.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Añadir efecto de distorsión al título
    const title = document.querySelector('header h1');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.transform = 'skew(-5deg)';
            title.style.textShadow = '5px 5px 0 #ff0000, 10px 10px 0 #00ff00, 15px 15px 0 #0000ff';
        });
        
        title.addEventListener('mouseleave', () => {
            title.style.transform = 'skew(0)';
            title.style.textShadow = '3px 3px 0 #ff0000, 6px 6px 0 #00ff00, 9px 9px 0 #0000ff';
        });
    }
    
    // Añadir efecto de parpadeo al subtítulo
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        setInterval(() => {
            subtitle.style.opacity = Math.random() > 0.5 ? '1' : '0.7';
        }, 500);
    }
}); 