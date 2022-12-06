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

