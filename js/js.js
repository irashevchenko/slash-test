$(document).ready(function() {
  var slider; var prevClick;
  $('#menu').on("click","a",function(e){
   e.preventDefault();
   var id = $(this).attr('href');
   scroll_menu(id);
   prevClick = id;
 });

 $('#select-menu').on("change", function () {
   var id = $('#select-menu').val();
   scroll_menu(id);
   prevClick = id;
 });

  function initSlider() {
      slider = $('.bxslider').bxSlider({
          mode: 'vertical',
          captions: true,
          auto: true,
          easing: 'easeOutBack',
          speed: 1000,
          autoHover: true,
          controls: false,
          slideWidth: 300
      });
  };
  initSlider();

  $('.portfolio-img').mouseover(function(){
  	$(this).find('.invisible').addClass("visible");
  }).mouseout(function(){
  	$('.invisible').removeClass("visible");
  });

  $(document).on("click", '.visible', function(){
  	$(this).closest('.portfolio-img').find('img[data-fancybox-href]').click();
  });

  $('[data-fancybox-href]').fancybox({
  	openEffect	: 'elastic',
    closeEffect	: 'elastic',
    helpers : {
      title : {
        type : 'outside'
      }
    }
  });

  function scroll_menu(id) {
    if (id == '#features') {
      $('#features').slideDown();
      slider.destroySlider();
      initSlider();
    } else{
      $('#features').slideUp();
    }
    var featuresTop = $('#features').height();
    var headerTop= $('#header').height();
    var top = $(id).offset().top;
    if ((id == '#portfolio') && (prevClick =='#features')|| (id =='#contact')&& (prevClick =='#features')) {
      var featuresTop = $('#features').height();
      $('body,html').animate({scrollTop: top-headerTop-featuresTop}, 1500);
    } else{
      $('body,html').animate({scrollTop: top-headerTop}, 1500);
    }
  }
});

