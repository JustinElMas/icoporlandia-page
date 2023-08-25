// for (let i  = 0; i < 100; i++){
//     const $lape = document.getElementById("lap");
//     $lape.innerHTML += i + "</br>";
// };

const $spanDateForNews = document.querySelector("#date_for_news");

//dateNow
/* const $dateNow = new Date();

const dateFormated = $dateNow.toLocaleTimeString('es-Es');


$spanDateForNews.textContent = dateFormated;
 */

//Mostrar las categorias de la tienda

/* Code for scroll page up */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("boton-subir").style.display = "block";
  } else {
    document.getElementById("boton-subir").style.display = "none";
  }
}

// Hacer scroll hacia arriba cuando se hace clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
