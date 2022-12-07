var $page = $('html, body');
$('.detal-instructions__links-link[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


