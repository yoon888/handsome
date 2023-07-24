$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  $(".header").hover(
    function () {
      $(".header-trans").css("display", "block");
      $(".header-wrap").css("display", "none");
    },
    function () {
      $(".header-trans").css("display", "none");
      $(".header-wrap").css("display", "block");
    }
  );

  //slider
  $(".slide-image").slick({
    items: 5,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // main-brand;
  $(".mbn-slide").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: true,
  });

  $(".mbn-slide .mbn-item .mbn-image-b").hover(
    function () {
      var idx = $(".mbn-slide .mbn-item .mbn-image-b").index(this);
      $(".mbn-slide .mbn-item .mbn-image-b .text").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".mbn-slide .mbn-item .mbn-image-b").index(this);
      $(".mbn-slide .mbn-item .mbn-image-b .text")
        .eq(idx)
        .removeClass("active");
    }
  );

  $(".mbn-slide .mbn-item .mbn-image").hover(
    function () {
      var idx = $(".mbn-slide .mbn-item .mbn-image").index(this);
      console.log(idx);
      $(".mbn-slide .mbn-item .mbn-image .text").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".mbn-slide .mbn-item .mbn-image").index(this);
      $(".mbn-slide .mbn-item .mbn-image .text").eq(idx).removeClass("active");
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
