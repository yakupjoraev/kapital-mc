// function topResize() {
//   $('.top-container').each(function() {
//     var hh = $(this).height();
//     // console.log(hh);
//     if ($(window).width() <= 1080) {
//       $('.allContent').css('padding-top', '' + hh + 'px');
//       $('#citySelectPopUp.active').css('top', '' + hh + 'px');
//     } else(
//         $('.allContent').removeAttr('style')
//     )
//   });
// }
// function onScroll() {
//   if($(window).width() <= 1080) {
//     topResize();
//   }
//   // if ($(window).scrollTop() > 0) $('#citySelectPopUp').removeClass('active');
//   if ($(".content_list ul a").length <= 1) {
//     return false;
//   } else {
//     $(".content_list ul a").each(function() {
//       var hash = $(this).attr("href");
//       if (hash.indexOf('#') === -1)
//         return false;
//       var target = $(hash);
//       if (
//         target.offset().top > $(document).scrollTop() &&
//         target.offset().top < $(document).scrollTop() + $(window).height()
//       ) {
//         $(".content_list ul a.active").removeClass("active");
//         $(this).addClass("active");
//         return false;
//       } else {
//         $(this).removeClass("active");
//       }
//     });
//   }
// }

// $(document).on("scroll", onScroll);

if (window.matchMedia("(max-width: 1080px)").matches) {
  (function () {

    'use strict';

    var m = document.querySelector("main.main"),
      h = document.querySelector("header.header"),
      hHeight;

    function setTopPadding() {
      hHeight = h.offsetHeight;
      m.style.paddingTop = hHeight + "px";
    }

    function onScroll() {

      window.addEventListener("scroll", _.throttle(callbackFunc, 200));
      /**
       * Replace the line above with the following one
       * to see how many more times the "callbackFunc" is executed
       */
      // window.addEventListener("scroll", callbackFunc);

      function callbackFunc() {
        c.style.visibility = "visible";
        var y = window.pageYOffset;
        if (y > 150) {
          h.classList.add("scroll");
        } else {
          h.classList.remove("scroll");
        }
      }
    }

    window.onload = function () {
      setTopPadding();
      onScroll();
    };

    window.onresize = function () {
      setTopPadding();
    };
  })();
}


