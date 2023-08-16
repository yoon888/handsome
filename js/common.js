$(function () {
  $(".header").load("../inc/header.html");
  $(".footer").load("../inc/footer.html");

  //main-brand
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

  //main-new

  $(".main-new .right .items li").hover(
    function () {
      var idx = $(".main-new .right .items li").index(this);
      $(".main-new .right .items li #back").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".main-new .right .items li").index(this);
      $(".main-new .right .items li #back").eq(idx).removeClass("active");
    }
  );

  $(".main-new-leftList li").eq(0).addClass("active");
  $(".right ul").hide().eq(0).show();

  $(".main-new-leftList li").click(function () {
    $(".main-new-leftList li").removeClass("active");
    $(this).addClass("active");

    $(".right ul").hide();

    var mainNew = $(this).index();
    console.log(mainNew);
    $(".right ul").eq(mainNew).show();
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

  $(".main-best .bottom .bottom-items li").hover(
    function () {
      var idx = $(".main-best .bottom .bottom-items li").index(this);
      $(".main-best .bottom .bottom-items li #last").eq(idx).addClass("active");
    },
    function () {
      var idx = $(".main-best .bottom .bottom-items li").index(this);
      $(".main-best .bottom .bottom-items li #last")
        .eq(idx)
        .removeClass("active");
    }
  );

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
