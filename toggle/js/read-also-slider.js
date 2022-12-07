$('.read-also__slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true
      }
    },
  ]
});
