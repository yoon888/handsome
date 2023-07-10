$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    $('.main_slide_01').slick({
      autoplay : true,
      slidesToShow: 4,
      autoplaySpeed: 3000,
      responsive: [
        {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      ]
    });
    $('.main_slide_02').slick({
      autoplay : true,
      slidesToShow: 4,
      autoplaySpeed: 2000,
      responsive: [
        {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      ]
    });
})