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

  $(".hb-left").hover(
    function () {
      $(".hb-left li ul").stop().slideDown("fast");
    },
    function () {
      $(".hb-left-category").stop().slideUp("fast");
    }
  );

  //slider
  $(".slide-image").slick({
    items: 5,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".main .slide img").hover(
    function () {
      $(".main .arrows").stop().show();
    },
    function () {
      $(".main .arrows img").stop().hide();
    }
  );

  //main-brand
  $(".mbn-slide").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: true,
  });

  var mbitem = $(".main-brand .bottom img");
  console.log(mbitem);

  $(".main-brand .bottom")
    .eq(idx)
    .hover(
      function () {
        $(".main-brand .bottom > .text").eq(idx).css("display", "block");
      },
      function () {
        $(".main-brand .bottom > .text").eq(idx).css("display", "none");
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
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: false,
  });

  //banner
  $(".banner-inner").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    dots: true,
    nextArrow: $(".next-new"),
    prevArrow: $(".prev-new"),
  });

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

  $(".bottom-items").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });
});
