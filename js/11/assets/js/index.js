$(function () {
    $('.slider__top').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    })
})

$(function () {
    $('.slider__mid').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
})

$(function () {
    $('.slider__bott__wrapper').slick({
        dots: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        accessibility: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 9,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
})

let socClass = $(".footer__mid__contacts__soc").children()
jQuery.each(socClass, function (e) {
    $(socClass[e]).on("mouseover", function () {
        let clas = $(socClass[e]).attr("class")
        let newLink = $(`.${clas}`).find("use").attr("xlink:href").replace("_w", "_r")
        $(`.${clas}`).find("use").attr("xlink:href", newLink)
    })

    $(socClass[e]).on("mouseout", function () {
        let clas = $(socClass[e]).attr("class")
        let newLink = $(`.${clas}`).find("use").attr("xlink:href").replace("_r", "_w")
        $(`.${clas}`).find("use").attr("xlink:href", newLink)
    })

})

$(window).resize(function () {
    let width = $(window).width();
    console.log(width)
    let logo1 = $('.footer__logo>img')
    let logo2 = $('.footer__mid>img')
    let logo3 = $('.footer>img')
    let olddiv = $('.footer__logo')
    let newdiv = $('.footer__mid')
    let newdiv2 = $('.footer')
    if (width <= 753) {
        $(newdiv).prepend(logo1);
    } else if (width > 753) {
        $(olddiv).prepend(logo2);
    }
    if (width <= 305) {
        $(logo2).css(({
            "margin-left": "20%",
            "margin-bottom": "40px"
        }))
        $(newdiv2).prepend(logo2);
    } else if (width > 305) {
        $(newdiv).prepend(logo3);
    }

});
