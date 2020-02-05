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
        arrows: true,
        centerMode: false,
        slidesToShow: 1,
          adaptiveHeight: true,
      }
    }
        ]
    });
});

/*Scroll*/

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 1000);
});


/*Burger*/

$("#header__burger").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});













