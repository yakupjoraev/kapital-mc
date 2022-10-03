function policyQuestionSelect() {
  const questionSelect = document.querySelector('.policy-question__select')

  questionSelect.addEventListener('click', function () {
    questionSelect.classList.toggle('policy-question-active')
  })
}

policyQuestionSelect();
