

document.addEventListener('DOMContentLoaded', function() {

    animateStats();
    

    typeWriterEffect();
    

    setupFeatureCards();
    
});


function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-card .number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30; 
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target === Infinity ? '∞' : target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 50);
    });
}


function typeWriterEffect() {
    const title = document.querySelector('.hero h1');
    if (!title) return;
    
    const originalText = title.textContent;
    title.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    

    setTimeout(typeWriter, 500);
}


function setupFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {

        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        

        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('expanded');
            }
        });
    });
}



