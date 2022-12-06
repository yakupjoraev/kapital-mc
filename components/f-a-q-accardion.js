// Аккордеон
function faqAccordion() {
  const items = document.querySelectorAll('.accordion-f-a-q__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion-f-a-q__item-active')) {
              parent.classList.remove('accordion-f-a-q__item-active')
          } else {
              document
                  .querySelectorAll('.accordion-f-a-q__item')
                  .forEach(child => child.classList.remove('accordion-f-a-q__item-active'))
              parent.classList.add('accordion-f-a-q__item-active')
          }
      })
  })
}
faqAccordion()
