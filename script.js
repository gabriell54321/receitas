document.addEventListener('DOMContentLoaded', function() {
    // Contador regressivo
    function startCountdown() {
        let minutes = 30;
        let seconds = 0;
        const countdownElement = document.getElementById('countdown');
        
        const countdown = setInterval(function() {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                    countdownElement.textContent = "00:00";
                    document.querySelector('.offer-bar p').textContent = "🚨 OFERTA ENCERRADA!";
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            
            const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
            countdownElement.textContent = `${displayMinutes}:${displaySeconds}`;
        }, 1000);
    }
    
    startCountdown();
    
    // Contador de pessoas
    function updateRemaining() {
        const remainingElement = document.getElementById('remaining');
        let remaining = 50;
        const interval = setInterval(function() {
            if (remaining <= 0) {
                clearInterval(interval);
                return;
            }
            const decrement = Math.floor(Math.random() * 3) + 1;
            remaining -= decrement;
            if (remaining < 0) remaining = 0;
            remainingElement.textContent = remaining;
        }, 30000); // Atualiza a cada 30 segundos
    }
    
    updateRemaining();
    
    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });
    
    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Fecha todas as respostas
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });
            
            // Abre a resposta clicada se não estiver ativa
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('show');
            }
        });
    });
    
    // Smooth scrolling para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Não aplicar smooth scroll para links externos
            if (this.getAttribute('href').startsWith('#') && !this.getAttribute('href').includes('mailto')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Efeito de hover nos botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Rastreamento de cliques nos botões de compra
    const buyButtons = document.querySelectorAll('a[href="https://pay.cakto.com.br/3fupip4_518014"]');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar código de rastreamento (Google Analytics, Facebook Pixel, etc)
            console.log('Botão de compra clicado - redirecionando para o checkout');
            window.location.href = 'https://pay.cakto.com.br/3fupip4_518014';
        });
    });
    
    // Animação de destaque para a seção de oferta quando o usuário rola até ela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
        observer.observe(offerSection);
    }
});