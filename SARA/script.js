

document.addEventListener('DOMContentLoaded', function() {

    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    

    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            

            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
                

                const modulesSection = document.getElementById('modules');
                if (modulesSection) {
                    modulesSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 150);
        });
    }
    

    const projectTitle = document.querySelector('.project-title');
    if (projectTitle) {
        const originalText = projectTitle.textContent;
        projectTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                projectTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        

        setTimeout(typeWriter, 500);
    }

    const infoButton = document.querySelector('.info-btn');
    if (infoButton) {
        infoButton.addEventListener('click', function() {
            alert('Em desenvolvimento: Página de informações sobre o projeto');
        });
    }
    

    const footerInfoButton = document.querySelector('footer .page-button:last-child');
    if (footerInfoButton) {
        footerInfoButton.addEventListener('click', function() {
            alert('Em desenvolvimento: Página de informações sobre o projeto');
        });
    }
    

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
    

    const footerButtons = document.querySelectorAll('.page-button');
    
    footerButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});