function topResize() {
  $('.top-container').each(function() {
    var hh = $(this).height();
    // console.log(hh);
    if ($(window).width() <= 1080) {
      $('.allContent').css('padding-top', '' + hh + 'px');
      $('#citySelectPopUp.active').css('top', '' + hh + 'px');
    } else(
        $('.allContent').removeAttr('style')
    )
  });
}
function onScroll() {
  if($(window).width() <= 1080) {
    topResize();
  }
  // if ($(window).scrollTop() > 0) $('#citySelectPopUp').removeClass('active');
  if ($(".content_list ul a").length <= 1) {
    return false;
  } else {
    $(".content_list ul a").each(function() {
      var hash = $(this).attr("href");
      if (hash.indexOf('#') === -1)
        return false;
      var target = $(hash);
      if (
        target.offset().top > $(document).scrollTop() &&
        target.offset().top < $(document).scrollTop() + $(window).height()
      ) {
        $(".content_list ul a.active").removeClass("active");
        $(this).addClass("active");
        return false;
      } else {
        $(this).removeClass("active");
      }
    });
  }
}

$(document).on("scroll", onScroll);
