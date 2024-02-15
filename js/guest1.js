$(document).ready(function(){
  $(".title").click(function(){
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });
});