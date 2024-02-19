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
  