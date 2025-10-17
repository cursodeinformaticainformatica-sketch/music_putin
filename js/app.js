const slides = document.querySelectorAll(".slide");  
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Función para mostrar la imagen actual
function showSlide(index) {    // hace q funcione el carrusel su trabajo es para q muestre la imagen y oculta las siguientes imagenes
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none"; // block va a mostrar y luego oculta con none
  });
}

// Botones manuales
prevBtn.addEventListener("click", () => {  // este regresa
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {   // sigue
  currentIndex = (currentIndex + 1) % slides.length; //slide length lo q hace esq sea negativo
  showSlide(currentIndex);
});


