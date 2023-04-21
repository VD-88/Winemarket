$(document).ready(function () {
  $('.responsive').slick({
    mobileFirst: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          fade: false,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
          infinite: true,
          dots: true,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });
});
