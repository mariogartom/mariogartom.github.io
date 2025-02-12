const images = document.querySelectorAll(".elem_img");
const crosses = document.querySelectorAll(".desc_cross");
const portElems = document.querySelectorAll(".port_elem")

images.forEach((image) => {
    image.addEventListener("click", () => {
        const targetId = image.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
    
        targetElement.classList.toggle("hidden");
        targetElement.classList.toggle("visible");

        images.forEach(image => {
            image.classList.remove("active");
            image.classList.add("disabled");
        });
    });
});

crosses.forEach((cross) => {
    cross.addEventListener("click", () => {
        const target = cross.getAttribute("data-target");

        const targetElement = document.getElementById(target); // Primer elemento
    
        targetElement.classList.toggle("hidden");
        targetElement.classList.toggle("visible");

        images.forEach((image) => {
            image.classList.remove("disabled");
            image.classList.add("active");
        });
    });
});