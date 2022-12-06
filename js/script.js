
$(document).ready(function(){
  // --> 이게 리사이즈 보다 밑에 있음 왜 작동을 안하는지....
  // $('.hamburger').click(function(){
  //   $(this).toggleClass('active');
  //   $('.main-menu').toggleClass('active');
  //   $('.hamburger span:first-child').toggleClass('active');
  //   $('.hamburger span:last-child').toggleClass('active');
  // });

  $(window).scroll(function(){

    const sct = $(window).scrollTop();
    

  if(sct >= 300){
    $('.header-area .logo').addClass('active');
    $('.header-area .second-logo').addClass('active')
  }else{
    $('.header-area .logo').removeClass('active');
    $('.header-area .second-logo').removeClass('active')
  }

  
  });



  // 서브메뉴 보이게 -> 이것도 미디어 안에 넣으면 안됨.

  $('.main-menu li').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');


    $('.sub-menu-area').addClass('active');

  });

  $('.sub-menu-area').mouseleave(function(){
      $(this).removeClass('active');
  });



  function AOS_MOBILE() {
    if (matchMedia("screen and (max-width: 1800px)").matches) {
  
      $('.aos1').attr('data-aos', 'zoom-in-down');
      $('.aos2').attr('data-aos', 'zoom-in-down');
      $('.aos3').attr('data-aos', 'zoom-in-down');
  
    }
  } // 768px 이하일 때 left_con 의 애니메이션 효과를 fade-down 으로 바꾼다.
  AOS_MOBILE();




  //////////////////////////////////////////////////////////////////////////////////


  AOS.init();
  layout();
  //리사이즈
  $(window).resize(function(){
    ww = $(window).width();
    layout();
  });


  /// 선생님 수정본///
  function layout(){
    var ww = $(window).width();
    swiper.updateContainerSize();`xx`

    // --> 안굴러감.
    if(ww >= 1140){
      var swiper = new Swiper(".secondSwiper",{
        direction: "vertical",
        slidesPerView:1,
        slidesPerGroups:1,
        autoplay:{
          delay : 3000,
          disableOnInteraction:false,
          },
          // 반복여부
          loop : true,
          speed : 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
      // $('.main-menu li').mouseenter(function(){
      //   let result = $(this).attr('data-alt');
      //   $('.sub-menu').removeClass('active');
      //   $(`#${result}`).addClass('active');


      //   $('.sub-menu-area').addClass('active');

      // });

      // $('.sub-menu-area').mouseleave(function(){
      //     $(this).removeClass('active');
      // });


    } else{
      $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.hamburger span:first-child').toggleClass('active');
        $('.hamburger span:last-child').toggleClass('active');
      });
    }

    
  }

  


  
}); //end