$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  //slider
  $(".slide_01").slick({
    dots: true,
    prevArrow: $(".xi-angle-left-thin"),
    nextArrow: $(".xi-angle-right-thin"),
  });

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
      $(".slide_02 .item .mbn-image .text").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".slide_02 .item .mbn-image").index(this);
      $(".slide_02 .item .mbn-image .text").eq(idx).removeClass("active");
    }
  );

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
  $(".bottom ul").hide().eq(0).show();

  $(".main-best .top li").click(function () {
    $(".main-best .top li").removeClass("on");
    $(this).addClass("on");

    $(".bottom ul").hide();

    var idx = $(this).index();
    $(".bottom ul").eq(idx).show(idx);
  });
});
