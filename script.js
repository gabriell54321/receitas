document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Mobile
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fecha todos os itens primeiro
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abre apenas o item clicado
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
        
        // Melhorar acessibilidade
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
    
    // Smooth scrolling para links - otimizado para mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botão de compra - otimizado para touch
    const buyButton = document.getElementById('buy-button');
    
    if (buyButton) {
        // Feedback tátil para mobile
        buyButton.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        buyButton.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulação de redirecionamento para página de pagamento
            window.location.href = 'https://exemplo.com/checkout';
        });
    }
    
    // Melhorar performance de animações em mobile
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-item, .recipe-item, .offer-content');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
        
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(animateOnScroll);
            ticking = true;
        }
    });
    
    // Inicializar animações
    window.addEventListener('load', () => {
        const animatedElements = document.querySelectorAll('.benefit-item, .recipe-item, .offer-content');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        animateOnScroll();
    });
    
    // Prevenir zoom em inputs em iOS
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
});