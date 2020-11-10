//CARROSEL 

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// OnePage SCROLL


$('.navegar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});


// BOTAO VOLTAR AO TOPO


$(document).ready(function () {
  $("body").scroll(function() {
      if($(this).scrollTop() == 0){
        $(".back-to-top").css("display", "none");
      } else {
        $(".back-to-top").css("display", "block");
      }
    });
  $(".back-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 800);
     });
  });



  /* treinando qualquer coisa */ 


