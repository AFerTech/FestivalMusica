document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
}
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `
        
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" 
        alt="imagen galeria">
        `;

    image.onclick = function () {
      //callback para identificar a que img se le da click
      mostrarImagen(i);
    };

    galeria.appendChild(image);
  }
}

function mostrarImagen(id) {
  const image = document.createElement("picture");
  image.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" 
        alt="imagen galeria">
        `;

  // Crea el overlay con la imagen
  const overlay = document.createElement("DIV");
  overlay.appendChild(image);
  overlay.classList.add("overlay");
  overlay.onclick= function(){
    const body=document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  }

  //  Btn para cerrar el modal
  // const cerrarModal = document.createElement("P");
  // cerrarModal.textContent = "X";
  // cerrarModal.classList.add("btn-cerrar");

  // cerrarModal.onclick = function () {
  //   const body = document.querySelector("body");
  //   body.classList.remove("fijar-body");
  //   overlay.remove();
  // };

  // overlay.appendChild(cerrarModal);


  
  // Añade al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
