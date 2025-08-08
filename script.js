document.addEventListener('DOMContentLoaded', function() {
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
            button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Redirecionamento para o checkout
    const buyButtons = document.querySelectorAll('a[href="https://pay.cakto.com.br/3fupip4_518014"]');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Adicione aqui qualquer lógica de rastreamento antes do redirecionamento
            window.location.href = 'https://pay.cakto.com.br/3fupip4_518014';
        });
    });
});