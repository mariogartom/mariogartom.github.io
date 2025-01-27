// Selecciona todas las imágenes con la clase toggleImage
const images = document.querySelectorAll(".elem_img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        const targetId = image.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
    
        targetElement.classList.toggle("hidden");
        targetElement.classList.toggle("visible");

        image.classList.toggle("active");
        image.classList.toggle("disabled");
    });
});

const crosses = document.querySelectorAll(".desc_cross");

crosses.forEach((cross) => {
    cross.addEventListener("click", () => {
        const targets = cross.getAttribute("data-target").split(",");

        const firstElement = document.getElementById(targets[0]); // Primer elemento
        const secondElement = document.getElementById(targets[1]); // Segundo elemento
    
        firstElement.classList.toggle("hidden");
        firstElement.classList.toggle("visible");

        secondElement.classList.toggle("active");
        secondElement.classList.toggle("disabled");
    });
});