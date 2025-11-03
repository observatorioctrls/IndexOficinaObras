let desmontada = false;

document.addEventListener('DOMContentLoaded', function () {
    setupBoxInteractions();
    startParticleSystem();
});

function setupBoxInteractions() {
    const box = document.getElementById('box3d');

    if (!box) {
        console.error('Elemento box3d não encontrado');
        return;
    }

    box.addEventListener('click', handleBoxClick);
}

function handleBoxClick() {
    if (desmontada) return;
    desmontada = true;

    const box = document.getElementById('box3d');
    box.classList.add('desmontar');

    setTimeout(() => {
        box.classList.add('alinhar');
    }, 1200);
}

function startParticleSystem() {

    setInterval(createParticle, 400);
}

function createParticle() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) {
        console.error('Elemento particles não encontrado');
        return;
    }

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 6000);
}