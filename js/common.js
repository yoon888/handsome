$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  $(".slide-image").slick({
    dots: false,
    items: 5,
    cssClass: "slick-dots",
    nextArrow: $(".right-arrow"),
    prevArrow: $(".left-arrow"),
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // $(".page").fullpage({
  //   //options here
  //   autoScrolling: true,
  //   scrollHorizontally: true,
  //   menu: false,
  //   navigation: true,
  //   responsive: {
  //     breakpoints: [
  //       {
  //         width: 768,
  //         sections: ['.item01','.item02']
  //       },
  //     ]
  // });

  $(".bottom-items").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });

  $(".mbn-slide").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: true,
  });

  $(".mbn-image").mouseover(function () {
    $(".mbn-image .text").show();

    $(".mbn-image").mouseleave(function () {
      $(".mbn-image .text").css("display", "none");
    });
  });
});
