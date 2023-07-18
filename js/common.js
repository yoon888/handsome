$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  $(".header").hover(function () {
    $(this).addClass("active");
  });
  //slider
  $(".slide-image").slick({
    items: 5,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".main .slide").hover(
    function () {
      $(".main .arrows img").animate({ opacity: 0.6 });
    },
    function () {
      $(".main .arrows img").animate({ opacity: 0 });
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

  // var items = $('.mbn-brand .mbn-slide .mbn-image .bottom img')
  // var texts = $('.mbn-brand .mbn-slide .mbn-image .bottom .text')
  // $(items).each(function(i){
  //   $(this).mouseover(function(){
  //     $(this).find('texts').stop().css('display','block')
  //   })
  //   $(this).mouseout(function(){
  //     $(this).find('texts').stop().css('display','none')
  // })

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

  var items = $(".main-best .bottom .photo img");

  // $(items).each(function (idx) {
  //   $(this).mouseover(function () {
  //     $(this)
  //       .find(".main-best .bottom-items .items .photo .front a:first-child").stop().animate({opacity:0},3000);
  //       $(this).find(".main-best .bottom-items .items .photo .front a:last-child").stop().animate({opacity:1},3000);
  //       $(this)
  //       .find(".main-best .bottom-items .items .photo .front a:first-child").stop().animate({opacity:1},3000);
  //       .find(".main-best .bottom-items .items .photo .front a:last-child").stop().animate({opacity:0},3000);
  //   });
});
