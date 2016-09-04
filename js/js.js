$(document).ready(function() {
  $('#menu').on("click","a",function(e){
   e.preventDefault();
   var id = $(this).attr('href');
   if ((id == '#features') && (!$('#features').hasClass("visible-features"))) {
     $('#features').addClass("visible-features");
   }
   var top = $(id).offset().top;
   $('body,html').animate({scrollTop: top-170}, 1500);
 });
  var slider = $('.bxslider').bxSlider({
   mode: 'vertical', 
   captions: true,
   auto: true,
   useCSS: false,
   easing: 'easeOutBack',
   speed: 2000,
   autoHover: true
 });
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
  $(".select-menu").select2({
    minimumResultsForSearch: Infinity
  });
});

