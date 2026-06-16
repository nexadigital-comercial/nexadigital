// ==========================
// CONFIGURAÇÃO CENTRAL
// ==========================

const WHATSAPP_NUMBER = '5511992225025';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de solicitar um orçamento.';
const WHATSAPP_URL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll('.whatsapp-link').forEach((link) => {

    link.setAttribute('href', WHATSAPP_URL);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');

});


// ==========================
// ANIMAÇÃO AO SCROLL
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.15
});

const hiddenElements =
document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {

    observer.observe(element);

});


// ==========================
// HEADER DINÂMICO
// ==========================

const header =
document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    }
    else{

        header.classList.remove('scrolled');

    }

});


// ==========================
// SCROLL SUAVE + NAVBAR ATIVA
// ==========================

const navLinks =
document.querySelectorAll('.nav-link');

navLinks.forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({

                behavior:'smooth',
                block:'start'

            });

        }

    });

});

const sections =
document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            navLinks.forEach((link) => {

                link.classList.toggle(
                    'active',
                    link.dataset.section === entry.target.id
                );

            });

        }

    });

}, {
    rootMargin: '-40% 0px -50% 0px'
});

sections.forEach((section) => {

    navObserver.observe(section);

});


// ==========================
// EFEITO NOS CARDS
// ==========================

const cards =
document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.boxShadow =
        '0 15px 40px rgba(109,0,204,.15)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = 'none';

    });

});


// ==========================
// CONSOLE NEXA DIGITAL
// ==========================

console.log(`
=================================
        NEXA DIGITAL
=================================

Site desenvolvido por:
Felipe Miguel

Desenvolvimento Web
Landing Pages
Sistemas Web

=================================
`);