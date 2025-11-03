document.addEventListener('DOMContentLoaded', function() {

    function updateLogTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', {hour12: false});
        document.getElementById('logTime').textContent = timeString;
    }
    

    updateLogTime();
    setInterval(updateLogTime, 1000);
    

    const typingText = document.querySelector('.typing-text');
    const texts = [
        "search agent(e) manifesto",
        "help",
        "about",
        "ls -la"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {

            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {

            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        

        if (!isDeleting && charIndex === currentText.length) {

            typingDelay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        
        setTimeout(typeText, typingDelay);
    }
    

    setTimeout(typeText, 1000);
    

    const accessButton = document.getElementById('accessButton');
    
    accessButton.addEventListener('click', function() {

        this.style.transform = 'scale(0.95)';

        const originalText = this.querySelector('.button-text').textContent;
        this.querySelector('.button-text').textContent = 'Conectando...';
        this.disabled = true;
        

        setTimeout(() => {
            alert('Redirecionando para o projeto Agent(e)...');
            window.location.href = 'https://leonardo-agent-e-git-main-observatorio-ctrl-s-projects.vercel.app'; 
            this.disabled = false;
            this.style.transform = '';
        }, 1500);
    });
    

    const logModules = [
        'tracking.module',
        'intention.analyzer',
        'behavior.predictor',
        'data.collector',
        'pattern.recognizer'
    ];
    
    const logMessages = [
        'nova intenção detectada: "dúvida disfarçada de busca"',
        'padrão comportamental identificado: usuário hesitante',
        'coletando dados de navegação silenciosa',
        'rastro digital atualizado com 127 novos pontos',
        'algoritmo de previsão ajustado para perfil atual',
        'sincronizando com bancos de dados externos',
        'monitoramento de atividade em segundo plano ativo'
    ];
    
    function updateLogMessage() {
        const randomModule = logModules[Math.floor(Math.random() * logModules.length)];
        const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
        
        document.getElementById('logModule').textContent = randomModule;
        document.getElementById('logMessage').textContent = randomMessage;
    }
    

    setInterval(updateLogMessage, 5000);
    

    function randomGlitch() {
        const elements = document.querySelectorAll('.project-name, .logo-ascii pre');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        randomElement.style.animation = 'glitch 0.3s';
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 300);
    }
    

    setInterval(randomGlitch, Math.random() * 20000 + 10000);
});