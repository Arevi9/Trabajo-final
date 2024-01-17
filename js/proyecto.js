

//Hacer aparecer y desaparecer el menú en versión móvil al hacer click

document.addEventListener('DOMContentLoaded', function() {
    const mobileNavIcon = document.querySelector('.Nav-mobile-icon');
    const mobileNav = document.querySelector('.Nav-mobile');
  
    mobileNavIcon.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  });



const listaTienda = document.getElementById("Articulo");

// Hacer una solicitud HTTP para obtener el JSON realizando fetch
       fetch('./json/homeTienda.json')
   //trae los datos del JSON al HTML
           .then( informacion =>{
               return informacion.json();
           })
    //muestra los datos 
           .then(datos =>{
              
               console.log(datos);
               mostrar(datos);
           })
    //mensaje de error si los datos no son leídos
           .catch(error => console.error('Error al obtener el JSON:', error));



//función para imprimir los datos en el HTML           
function mostrar(objetos){
   objetos.forEach((item, i) => {
       listaTienda.innerHTML += `
       <div id="Articulo" class="Item-box">
               <img class="Item-img" src="${item.imagen}" alt="Producto"> 
               <div class="Item-name"><h2 class="Item-h2">${item.nombre}</h2></div>

       </div>
           `
   });
}



//Las funciones cambiarImagen son específicas para cada sección, y se utiliza una condición para determinar que array de imágenes debe manipularse.

      // Definir arrays con las rutas de las imágenes para cada sección
      var imagenesSeccion1 = ["/img/tienda/anillos/luchia1.webp","/img/tienda/anillos/luchia2.webp"];
      var imagenesSeccion2 = ["/img/tienda/anillos/converted_hanon1.webp", "/img/tienda/anillos/hanon2.webp"];
      var imagenesSeccion3 = ["/img/tienda/anillos/rina1.webp","/img/tienda/anillos/rina2.webp"];
      var imagenesSeccion4 = ["/img/tienda/anillos/karen1.webp", "/img/tienda/anillos/karen2.webp"];
      var imagenesSeccion5 = ["/img/tienda/anillos/coco1.webp", "/img/tienda/anillos/coco2.webp"];
      var imagenesSeccion6 = ["/img/tienda/anillos/noel1.webp", "/img/tienda/anillos/noel2.webp"];
      var imagenesSeccion7 = ["/img/tienda/anillos/seira1.webp", "/img/tienda/anillos/seira2.webp"];
    
      // Inicializar índices para cada sección
      var indiceImagenSeccion1 = 0;
      var indiceImagenSeccion2 = 0;
      var indiceImagenSeccion3 = 0;
      var indiceImagenSeccion4 = 0;
      var indiceImagenSeccion5 = 0;
      var indiceImagenSeccion6 = 0;
      var indiceImagenSeccion7 = 0;
    
      function cambiarImagen(idImagen, arrayImagenes) {
        var imagen = document.getElementById(idImagen);
    
        // Cambiar la fuente de la imagen
        //El símbolo % se utiliza para asegurarse de que el índice esté dentro de los límites del array, por lo que si llega al final, vuelve al principio.
        if (arrayImagenes === imagenesSeccion1) {
          indiceImagenSeccion1 = (indiceImagenSeccion1 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion1];
        } else if (arrayImagenes === imagenesSeccion2) {
          indiceImagenSeccion2 = (indiceImagenSeccion2 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion2];
        }else if (arrayImagenes === imagenesSeccion3) {
          indiceImagenSeccion3 = (indiceImagenSeccion3 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion3];
        }else if (arrayImagenes === imagenesSeccion4) {
          indiceImagenSeccion4 = (indiceImagenSeccion4 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion4];
        }else if (arrayImagenes === imagenesSeccion5) {
          indiceImagenSeccion5 = (indiceImagenSeccion5 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion5];
        }else if (arrayImagenes === imagenesSeccion6) {
          indiceImagenSeccion6 = (indiceImagenSeccion6 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion6];
        }else if (arrayImagenes === imagenesSeccion7) {
          indiceImagenSeccion7 = (indiceImagenSeccion7 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenSeccion7];
        }
      }



 // Función para mostrar u ocultar el botón basado en la posición de desplazamiento y el ancho de la ventana
 window.onscroll = function() {
  mostrarOcultarBoton();
};

window.onresize = function() {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  var botonSubir = document.getElementById("botonSubir");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (window.innerWidth < 768) {
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