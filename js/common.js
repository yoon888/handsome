$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  // $(".header").hover(
  //   function () {
  //     $(".header-trans").css("display", "block");
  //     $(".header-wrap").css("display", "none");
  //   },
  //   function () {
  //     $(".header-trans").css("display", "none");
  //     $(".header-wrap").css("display", "block");
  //   }
  // );

  //slider
  $(".slide_01").slick({
    dots: true,
    prevArrow: $(".xi-angle-left-thin"),
    nextArrow: $(".xi-angle-right-thin"),
  });

  // main-brand;
  // $(".mbn-slide").slick({
  //   infinite: false,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   arrows: false,
  //   dots: true,
  // });
  // var swiper = new Swiper(".mbn-slide", {
  //   slidesPerView: 6,
  //   spaceBetween: 20,
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
  // });

  $(".slide_02 .item .mbn-image-b").hover(
    function () {
      var idx = $(".slide_02 .item .mbn-image-b").index(this);
      $(".slide_02 .item .mbn-image-b .text").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".slide_02 .item .mbn-image-b").index(this);
      $(".slide_02 .item .mbn-image-b .text").eq(idx).removeClass("active");
    }
  );

  $(".slide_02 .item .mbn-image").hover(
    function () {
      var idx = $(".slide_02 .item .mbn-image").index(this);
      console.log(idx);
      $(".slide_02 .item .mbn-image .text").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".slide_02 .item .mbn-image").index(this);
      $(".slide_02 .item .mbn-image .text").eq(idx).removeClass("active");
    }
  );

  //main-new
  $(".main-new .left li").eq(0).addClass("active");
  $(".right .items").hide().eq(0).show();

  $(".main-new .left li").click(function () {
    $(".main-new .left li").removeClass("active");
    $(this).addClass("active");

    $(".right .items").hide();

    var idx = $(this).index();
    $(".right .items").eq(idx).show(idx);
  });

  $(".main-new .items").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    dots: false,
  });

  //banner

  //main-best
  $(".main-best .top li").eq(0).addClass("on");
  $(".bottom-items").hide().eq(0).show();

  $(".main-best .top li").click(function () {
    $(".main-best .top li").removeClass("on");
    $(this).addClass("on");

    $(".bottom-items").hide();

    var idx = $(this).index();
    $(".bottom-items").eq(idx).show(idx);
  });

  // $(".main-best .bottom .photo img").hover(
  //   function () {
  //     var idx = $(".main-best .bottom .photo front").index(this);
  //     $(".main-best .bottom .photo front:first").eq(idx).css("display", "none");
  //     $(".main-best .bottom .photo front:first:last")
  //       .eq(idx)
  //       .css("display", "block");
  //   },
  //   function () {
  //     var idx = $(".main-best .bottom .photo front").index(this);
  //     $(".main-best .bottom .photo front:first")
  //       .eq(idx)
  //       .css("display", "block");
  //     $(".main-best .bottom .photo front:first:last")
  //       .eq(idx)
  //       .css("display", "none");
  //   }
  // );
});
