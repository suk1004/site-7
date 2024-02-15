$(document).ready(function(){

  /* Accommodation 비주얼 */
  $('.a_visual').slick({
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });

  /* Accommodation 룸카드 */
  $(".deluxe_info").hide();
  $(".suite_info").hide();
  $(".deluxe:before").hide();
  
  $(".deluxe").hover(function(){
    $('.deluxe>h2').hide();
    $('')
    $(this).find(".deluxe_info").stop().slideDown();
  },function(){
    $('.deluxe>h2').fadeIn('slow');
    $(this).find(".deluxe_info").stop().slideUp();
  });

  $(".suite").hover(function(){
    $('.suite>h2').hide();
    $(this).find(".suite_info").stop().slideDown();
  },function(){
    $('.suite>h2').fadeIn('slow');
    $(this).find(".suite_info").stop().slideUp();
  });

});