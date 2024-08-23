$(document).ready(function () {
    $('.carousel-track').slick({
        infinite: true,
        slidesToShow: 3, // Number of items to show
        slidesToScroll: 1, // Number of items to scroll
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
