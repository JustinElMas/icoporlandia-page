const $spanDateForNews = document.querySelector("#date_for_news");

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
