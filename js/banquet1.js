$(document).ready(function(){
  /* Banquet */
  // ballroom 이미지 슬라이드
  $('.br_image').slick({
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
});