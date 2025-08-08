document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            // Fecha os outros itens
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Smooth scrolling para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de hover nos cards de receitas
    const recipeItems = document.querySelectorAll('.recipe-item');
    
    recipeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Botão de compra - pode ser integrado com seu gateway de pagamento
    const buyButton = document.getElementById('buy-button');
    
    if (buyButton) {
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a integração com o gateway de pagamento
            alert('Ótima escolha! Você será redirecionado para a página de pagamento.');
            // window.location.href = 'URL_DO_SEU_PAGAMENTO';
        });
    }
    
    // Animação suave ao rolar a página
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-item, .recipe-item, .offer-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Define as propriedades iniciais para a animação
    window.addEventListener('load', () => {
        const animatedElements = document.querySelectorAll('.benefit-item, .recipe-item, .offer-content');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
        });
        
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);
});