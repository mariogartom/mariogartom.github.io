const navbar = document.getElementById('navbar');
const newItems = document.querySelector('.new-items');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Detecta el scroll
        navbar.classList.add('scrolled'); // Aplica la clase de estilo
    } else {
        navbar.classList.remove('scrolled'); // Revertir estilos si subes
    }

    if (window.scrollY > 400) { // Detecta el scroll
        newItems.classList.remove('hidden'); // Muestra los nuevos elementos
    } else {
        newItems.classList.add('hidden'); // Oculta los nuevos elementos
    }
});
