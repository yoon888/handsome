$(function () {
  //main
  $(".slide_01").slick({
    dots: true,
    prevArrow: $(".xi-angle-left-thin"),
    nextArrow: $(".xi-angle-right-thin"),
  });

  $(".main-new .items").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    dots: false,
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    autoplay: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  $(".banner-inner").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    dots: true,
    arrows: true,
  });

  $(".bottom-items").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: false,
  });

  $(".main-contents .mc-slide").slick({
    infinite: false,
    centerMode: true,
    centerPadding: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
  });
});
