$(function(){

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true
    })

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })

});