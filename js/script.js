
//Funcion carrusel
document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = carrusel.querySelectorAll("img");
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");
    let indiceActual = 0;
    let intervalo;
  
    function mostrarImagen(indice) {
      imagenes.forEach((imagen, i) => {
        if (i === indice) {
          imagen.style.display = "block";
        } else {
          imagen.style.display = "none";
        }
      });
    }

    function iniciarIntervalo(){
      intervalo = setInterval(() => {
      indiceActual++;
      if (indiceActual >= imagenes.length) {
        indiceActual = 0;
      }
      mostrarImagen(indiceActual);
      }, 3000);
    }
  
    mostrarImagen(indiceActual);
    iniciarIntervalo();

    botonAnterior.addEventListener("click", function() {
      clearInterval(intervalo);
      indiceActual--;
      if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
      }
      mostrarImagen(indiceActual);
      iniciarIntervalo();
    });
  
    botonSiguiente.addEventListener("click", function() {
      clearInterval(intervalo);
      indiceActual++;
      if (indiceActual >= imagenes.length) {
        indiceActual = 0;
      }
      mostrarImagen(indiceActual);
      iniciarIntervalo();
    });
  });
  

  //Funcion mostrar menu
  document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    var menu = document.getElementById("menu");
    
    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation(); 
        
        if (menu.style.display === "block") {
            menu.style.display = "none"; 
        } else {
            var rect = menuIcon.getBoundingClientRect(); 
            var menuWidth = menu.offsetWidth;
            var menuHeight = menu.offsetHeight;
            
            menu.style.display = "block"; 
            menu.style.top = rect.top + "px"; 
            menu.style.left = rect.left - 220 + "px"; 
        }
    });

    //Funcion ocultar menu
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && event.target !== menuIcon) {
            menu.style.display = "none"; 
        }
    });
});

//Modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown' , function (e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});