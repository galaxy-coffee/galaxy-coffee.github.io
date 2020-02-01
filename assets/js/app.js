$(document).ready(function(){
    $('.sliderMenu').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
responsive: [
    {
breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
          adaptiveHeight: true,
      }
    }
        ]
    });
});
