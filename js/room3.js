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
  $(".superior_info").hide();
  $(".deluxe_info").hide();
  $(".superior:before").hide();
  
  $(".superior").hover(function(){
    $('.superior>h2').hide();
    $('')
    $(this).find(".superior_info").stop().slideDown();
  },function(){
    $('.superior>h2').fadeIn('slow');
    $(this).find(".superior_info").stop().slideUp();
  });

  $(".deluxe").hover(function(){
    $('.deluxe>h2').hide();
    $(this).find(".deluxe_info").stop().slideDown();
  },function(){
    $('.deluxe>h2').fadeIn('slow');
    $(this).find(".deluxe_info").stop().slideUp();
  });

});