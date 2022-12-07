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

// Аккордеон
// function faqAccordion() {
//   const items = document.querySelectorAll('.accordion-f-a-q__item-trigger')
//   items.forEach(item => {
//       item.addEventListener('click', () => {
//           const parent = item.parentNode
//           if (parent.classList.contains('accordion-f-a-q__item-active')) {
//               parent.classList.remove('accordion-f-a-q__item-active')
//           } else {
//               document
//                   .querySelectorAll('.accordion-f-a-q__item')
//                   .forEach(child => child.classList.remove('accordion-f-a-q__item-active'))
//               parent.classList.add('accordion-f-a-q__item-active')
//           }
//       })
//   })
// }
// faqAccordion();

function accardionTwo() {
  const items = document.querySelectorAll('.accordion-f-a-q__item-trigger')

  items.forEach(item => {
    const parent = item.parentNode
    parent.addEventListener('click', () => {
      document.querySelectorAll('.accordion-f-a-q__item')
      parent.classList.toggle('accordion-f-a-q__item-active')
    })
  })
  console.log(items);
}
accardionTwo();

// Вместо класса можно использовать data-атрибуты: "[data-clear-button]"
document.querySelectorAll(".clear-input")
  .forEach(function (elem) {
    elem.onclick = function (e) {
      // Если необходимо предотвратить/отменить событие по умолчанию,
      // то необходимо вызвать метод preventDefault у события
      // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
      // e.preventDefault();
      // если необходимо также предотвратить дальнейшее "всплытие" события,
      // то необходимо вызвать метод stopPropagation у события
      // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
      // e.stopPropagation();
      let selector = this.dataset.clearSelector;
      document.querySelectorAll(".form-tell-story__input")
        .forEach(function (item) {
          item.value = "";
        });
    };
  });

function policyQuestionSelect() {
  const questionSelect = document.querySelector('.policy-question__select')

  if (!questionSelect) {
    return null
  }

  questionSelect.addEventListener('click', function () {
    questionSelect.classList.toggle('policy-question-active')
  })
}

policyQuestionSelect();


$('.read-also__slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true
      }
    },
  ]
});


var $page = $('html, body');
$('.detal-instructions__links-link[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});


function switchSearch() {
  const searchBtn = document.querySelectorAll('[data-search]')

  searchBtn.forEach(element => {
    element.addEventListener('click', function () {
      let body = document.querySelector('body')
      body.classList.toggle('with-search')
    })
  });
}

switchSearch();


function topResize() {
  $('.top-container').each(function () {
    var hh = $(this).height();
    // console.log(hh);
    if ($(window).width() <= 1080) {
      $('.allContent').css('padding-top', '' + hh + 'px');
      $('#citySelectPopUp.active').css('top', '' + hh + 'px');
    } else (
      $('.allContent').removeAttr('style')
    )
  });
}
function onScroll() {
  if ($(window).width() <= 1080) {
    topResize();
  }
  // if ($(window).scrollTop() > 0) $('#citySelectPopUp').removeClass('active');
  if ($(".content_list ul a").length <= 1) {
    return false;
  } else {
    $(".content_list ul a").each(function () {
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

