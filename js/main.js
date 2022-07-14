$(document).ready(function(){


  $('.open-modal').on('click', function(e){
  	e.preventDefault();
  	var modal = $(this).attr('data-modal');
  	$(modal).fadeIn();
  	if($(modal).hasClass('modal-habitaciones')){
  		$('.resultado-imagen').slick('setPosition');
  	}
  });

  $('.close-modal, .btn-close-modal').on('click', function(e){
  e.preventDefault();
  $('.modal').fadeOut();
  });


  $('.menu-click').on('click', function(e){
    e.preventDefault();
    var menu = $(this).attr('data-menu');
    $('.'+menu+'-menu').slideToggle();
  });

    $(".submit-btn, .submit-btn input").submit(function(e) {
      e.preventDefault();
  });


  $('a.menu-bar').on('click', function(e){
    e.preventDefault();
    $('.main-menu').removeClass('hide-menu');
    $('html, body').addClass('open-menu');
    $('.main-menu').addClass('show-menu');
  });

  $('.close-menu').on('click', function(e){
    e.preventDefault();
    $('.main-menu').removeClass('show-menu');
    $('.main-menu').addClass('hide-menu');
    $('html, body').removeClass('open-menu');
  });


  var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -100) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };

  var window_width = $(window).width();

  if(window_width <= 768){
      animateHTML().init();
  }




});
