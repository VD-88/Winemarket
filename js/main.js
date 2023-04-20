$(document).ready(function () {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
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