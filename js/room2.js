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
  $(".suite_info").hide();
  $(".superior:before").hide();
  
  $(".superior").hover(function(){
    $('.superior>h2').hide();
    $('')
    $(this).find(".superior_info").stop().slideDown();
  },function(){
    $('.superior>h2').fadeIn('slow');
    $(this).find(".superior_info").stop().slideUp();
  });

  $(".suite").hover(function(){
    $('.suite>h2').hide();
    $(this).find(".suite_info").stop().slideDown();
  },function(){
    $('.suite>h2').fadeIn('slow');
    $(this).find(".suite_info").stop().slideUp();
  });

});