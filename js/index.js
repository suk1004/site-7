/* 예약 팝업 숫자 증감 */
function createCounter(container) {
  const counterElement = container.querySelector('.counter-value');
  const decrementElement = container.querySelector('.counter-control.remove');
  const incrementElement = container.querySelector('.counter-control.add');

  let counterValue = 0;

  function updateCounter() {
    counterElement.textContent = counterValue;
  }

  decrementElement.addEventListener('click', () => {
    if (counterValue > 0) {
      counterValue--;
      updateCounter();
    }
    toggleActiveClass(decrementElement, incrementElement);
  });

  incrementElement.addEventListener('click', () => {
    counterValue++;
    updateCounter();
    toggleActiveClass(incrementElement, decrementElement);
  });

  function toggleActiveClass(activeElement, inactiveElement) {
    activeElement.classList.add('active');
    inactiveElement.classList.remove('active');
  }
}

const counterContainers = document.querySelectorAll('.counter-container');
counterContainers.forEach(createCounter);

$(document).ready(function(){

  /* 서브메뉴 */
  $(".sub").hide();
  
  $(".main").hover(function(){
    $(this).find(".sub").stop().fadeIn();
    $(".sub_bgbox").stop().fadeIn();
  },function(){
    $(this).find(".sub").stop().fadeOut();
    $(".sub_bgbox").stop().fadeOut();
  });

  /* 예약 팝업 */
  $('.reserv_choose').hide();
  
  $('.r_caption').click(function () {
    $('.reserv_choose').fadeToggle();
  });

  /* 메인 */
  $('.autoplay').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });

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