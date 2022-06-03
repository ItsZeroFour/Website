$(function(){
  $('.design-slider').slick({
    dots: false,                                         // Убирает преключатели
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="./images/Arrow-left.svg" alt="arrow left">',
    nextArrow: '<img class="arrow arrow-right" src="./images/Arrow-right.svg" alt="arrow right">'
  });
});