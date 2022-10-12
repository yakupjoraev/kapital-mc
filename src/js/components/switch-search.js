


function switchSearch() {
  const searchBtn = document.querySelectorAll('[data-search]')

  searchBtn.forEach(element => {
    element.addEventListener('click', function () {
      let body = document.querySelector('body')
      body.classList.toggle('with-search')
    })
  });
}

switchSearch()


