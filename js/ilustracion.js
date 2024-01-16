const imagenesTarot = document.getElementById("tarot");

// Hacer una solicitud HTTP para obtener el JSON realizando fetch
fetch('./json/tarot.json')
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



function mostrar(cartas){
  cartas.forEach((tarot, i) => {
      imagenesTarot.innerHTML += `
      <img class="Tarot-img" src=${tarot.img} alt=${tarot.alt}>
          `
  });
}