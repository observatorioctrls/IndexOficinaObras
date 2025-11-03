

document.addEventListener('DOMContentLoaded', function() {

  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'var(--shadow)';
    });
  });
  

  const navLinks = document.querySelectorAll('.nav .btn');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {

      if (!this.classList.contains('active')) {
        e.preventDefault();

        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          this.style.transform = '';

          window.location.href = this.href;
        }, 150);
      }
    });
  });
  

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    

    setTimeout(typeWriter, 500);
  }
  

  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const bg = document.querySelector('.bg');
    if (bg) {
      bg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});