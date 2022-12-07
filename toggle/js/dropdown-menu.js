/*Dropdown Menu*/
$('.js-form-tell-story-region').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.js-dropdown-menu').slideToggle(300);
});
$('.js-form-tell-story-region').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.js-dropdown-menu').slideUp(300);
});
$('.js-form-tell-story-region .js-dropdown-menu li').click(function () {
  $(this).parents('.js-form-tell-story-region').find('span').text($(this).text());
  $(this).parents('.js-form-tell-story-region').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/
