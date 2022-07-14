$(document).ready(function(){

  var seleccion = $('.detalle-actividad');

  seleccion.on('click', function(e){
    e.preventDefault();
    if(!$(this).parent().parent().hasClass('seleccionando')){
      $(this).parent().parent().addClass('seleccionando');
      $(this).html('<span class="lines_"></span> Ocultar detalles');
      $(this).parent().siblings('.actividad-desglose').slideDown();
      /* $('body,html').stop().animate({
        scrollTop: $(this).parent().siblings('.actividad-desglose').offset().top
      }, 1000); */
    }else{
      $(this).parent().parent().removeClass('seleccionando');
      $(this).parent().siblings('.actividad-desglose').slideUp();
      $(this).html('<span class="line_"></span> Ver detalles');
    }

  });

  
  
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      $('.text-header-favc').removeClass("p80-0");
      $('#actividades').removeClass("mt-2");
    } else {
      reveals[i].classList.remove("active");
      $('.text-header-favc').addClass("p80-0");
      $('#actividades').addClass("mt-2");
    }
  }
}

window.addEventListener("scroll", reveal);



});
