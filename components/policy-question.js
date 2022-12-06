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
