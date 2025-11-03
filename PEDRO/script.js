

document.addEventListener('DOMContentLoaded', function() {

    const demoToggle = document.getElementById('demoToggle');
    const toggleTexts = document.querySelectorAll('.demo-toggle .toggle-text');
    

    function updateToggleText() {
        toggleTexts.forEach(text => {
            text.classList.toggle('hidden');
        });
    }
    

    if (demoToggle) {
        demoToggle.addEventListener('change', function() {
            updateToggleText();

            const toggleContent = this.closest('.toggle-content');
            if (toggleContent) {
                toggleContent.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    toggleContent.style.transform = 'scale(1)';
                }, 150);
            }
        });
    }
    

    const contradictionCards = document.querySelectorAll('.contradiction-card');
    
    contradictionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(198, 40, 40, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        

        setTimeout(typeWriter, 500);
    }

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const ctaSection = document.querySelector('.cta-section');
        
        if (ctaSection) {
            ctaSection.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    

    function titleGlowEffect() {
        if (mainTitle) {
            mainTitle.style.textShadow = '2px 2px 4px rgba(198, 40, 40, 0.7)';
            setTimeout(() => {
                mainTitle.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
            }, 1000);
        }
    }
    

    setInterval(titleGlowEffect, 5000);
    

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    

    const animatedElements = document.querySelectorAll('.info-card, .demo-section, .cta-section, .contradiction-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    

    console.log('Página inicial da Crítica Digital ao Capitalismo carregada');
    console.log('Projeto: Análise interativa das contradições do sistema capitalista');
});