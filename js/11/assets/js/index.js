$(function(){
    $('.slider__top').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    })
})

$(function(){
    $('.slider__mid').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        accessibility: true,
        variableWidth: '0px',

        
    })
})