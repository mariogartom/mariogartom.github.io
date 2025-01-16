// const navbar = document.getElementById('navbar');
// const newItems = document.querySelector('.new-items');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) { // Detecta el scroll
//         navbar.classList.add('visible'); // Oculta la barra
//     } else {
//         navbar.classList.remove('visible'); // Muestra la barra
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const excludeSection = document.getElementById('start'); // Sección donde la barra debe desaparecer

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('visible'); // Oculta la barra
            } else {
                navbar.classList.remove('visible'); // Muestra la barra
            }
        });
    });

    observer.observe(excludeSection); // Observa la sección a excluir
});