

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
       fetch('./db/homeTienda.json')
   //trae los datos del JSON al HTML
           .then( informacion =>{
               return informacion.json();
           })
    //muestra los datos 
           .then(datos =>{
              
               console.log(datos);
               mostrar(datos);
           })
    //mensaje de error si los datos no se imprimen
           .catch(error => console.error('Error al obtener el JSON:', error));



//función para imprimir los datos en el HTML           
function mostrar(objetos){
   objetos.forEach((item, i) => {
       listaTienda.innerHTML += `
       <div id="Articulo" class="Item-box">
               <img class="Item-img" src="${item.imagen}" alt="Producto" loading="lazy"> 
               <div class="Item-name"><h2 class="Item-h2">${item.nombre}</h2></div>

       </div>
           `
   });
}



//Las funciones cambiarImagen son específicas para cada sección, y se utiliza una condición para determinar que array de imágenes debe manipularse.

      // Definir arrays con las rutas de las imágenes para cada sección
      let imagenesItem1 = ["/img/tienda/anillos/luchia1.webp","/img/tienda/anillos/luchia2.webp","/img/tienda/anillos/anillosPichi.webp","/img/tienda/anillos/anillosPichi2.webp"];
      let imagenesItem2 = ["/img/tienda/anillos/converted_hanon1.webp", "/img/tienda/anillos/hanon2.webp","/img/tienda/anillos/anillosPichi.webp","/img/tienda/anillos/anillosPichi2.webp"];
      let imagenesItem3 = ["/img/tienda/anillos/rina1.webp","/img/tienda/anillos/rina2.webp","/img/tienda/anillos/anillosPichi.webp","/img/tienda/anillos/anillosPichi2.webp"];
      let imagenesItem4 = ["/img/tienda/anillos/karen1.webp", "/img/tienda/anillos/karen2.webp"];
      let imagenesItem5 = ["/img/tienda/anillos/coco1.webp", "/img/tienda/anillos/coco2.webp"];
      let imagenesItem6 = ["/img/tienda/anillos/noel1.webp", "/img/tienda/anillos/noel2.webp"];
      let imagenesItem7 = ["/img/tienda/anillos/seira1.webp", "/img/tienda/anillos/seira2.webp"];
    
      // Inicializar índices para cada sección
      let indiceImagenItem1 = 0;
      let indiceImagenItem2 = 0;
      let indiceImagenItem3 = 0;
      let indiceImagenItem4 = 0;
      let indiceImagenItem5 = 0;
      let indiceImagenItem6 = 0;
      let indiceImagenItem7 = 0;
    
      function cambiarImagen(idImagen, arrayImagenes) {
        let imagen = document.getElementById(idImagen);


        //El símbolo % se utiliza para cuando se llegue al final del array, se vuelva al principio.
        if (arrayImagenes === imagenesItem1) {
          indiceImagenItem1 = (indiceImagenItem1 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem1];
        } else if (arrayImagenes === imagenesItem2) {
          indiceImagenItem2 = (indiceImagenItem2 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem2];
        }else if (arrayImagenes === imagenesItem3) {
          indiceImagenItem3 = (indiceImagenItem3 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem3];
        }else if (arrayImagenes === imagenesItem4) {
          indiceImagenItem4 = (indiceImagenItem4 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem4];
        }else if (arrayImagenes === imagenesItem5) {
          indiceImagenItem5 = (indiceImagenItem5 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem5];
        }else if (arrayImagenes === imagenesItem6) {
          indiceImagenItem6 = (indiceImagenItem6 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem6];
        }else if (arrayImagenes === imagenesItem7) {
          indiceImagenItem7 = (indiceImagenItem7 + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[indiceImagenItem7];
        }
      }


 // Función para mostrar u ocultar el botón basado en la posición de desplazamiento y el ancho de la ventana. Se ha usado ChatGPT para esta función
 window.onscroll = function() {
  mostrarOcultarBoton();
};

window.onresize = function() {
  mostrarOcultarBoton();
};


function mostrarOcultarBoton() {
  let botonSubir = document.getElementById("botonSubir");
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