
//Hacer aparecer y desaparecer el menú en versión móvil al hacer click

document.addEventListener('DOMContentLoaded', function() {
    const mobileNavIcon = document.querySelector('.Nav-mobile-icon');
    const mobileNav = document.querySelector('.Nav-mobile');
  
    mobileNavIcon.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  });




const imagenesTarot = document.getElementById("tarot");

// Hacer una solicitud HTTP para obtener el JSON realizando fetch
fetch('./db/tarot.json')
//trae los datos del JSON al HTML
        .then( ilustracion=>{
            return ilustracion.json();
        })
 //muestra los datos 
        .then(info =>{
           
            console.log(info);
            mostrar(info);
        })
 //mensaje de error si los datos no son leídos
        .catch(error => console.error('Error al obtener el JSON:', error));



//función para imprimir las imágenes en el HTML

function mostrar(cartas){
  cartas.forEach((tarot, i) => {
      imagenesTarot.innerHTML += `
      <img class="Tarot-img" src=${tarot.img} alt=${tarot.alt}  loading="lazy">
          `
  });
}



 // Función para mostrar u ocultar el botón basado en la posición de desplazamiento y el ancho de la ventana.  Se ha usado ChatGPT para esta función
 window.onscroll = function() {
    mostrarOcultarBoton();
  };
  
  window.onresize = function() {
    mostrarOcultarBoton();
  };
  
  function mostrarOcultarBoton() {
    var botonSubir = document.getElementById("botonSubir");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (window.innerWidth < 1200) {
        botonSubir.style.display = "block";
      } else {
        botonSubir.style.display = "none";
      }
    } else {
      botonSubir.style.display = "none";
    }
  }
  
  // Función para desplazarse hacia arriba al hacer clic en el botón
  function subirAlInicio() {
    document.body.scrollTop = 0;  // Para navegadores que no soportan document.documentElement
    document.documentElement.scrollTop = 0;  // Funciona en la mayoría de los navegadores
  }