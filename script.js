const questions = [
  'Quem foi que gritou "independência ou morte"?',
  "Qual é a capital da França?",
  "Qual é o maior planeta do nosso sistema solar?",
  "Qual é a atual capital do Brasil?",
]
const options = [
  ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
  ["Londres", "Paris", "Berlim", "Madrid"],
  ["Vênus", "Marte", "Júpiter", "Saturno"],
  ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"],
]
const correctAnswers = [2, 1, 2, 3]

let reloadButton = document.getElementById("reload")
let nowQuestion

function getRandomQuestionIndex() {
  return Math.floor(Math.random() * questions.length)
}

function generateQuestions() {
  nowQuestion = getRandomQuestionIndex()
  document.getElementById("question").innerHTML = questions[nowQuestion]

  const optionsContainer = document.querySelectorAll("button.alternative")
  optionsContainer.forEach((element, index) => {
    element.textContent = options[nowQuestion][index]
    element.value = index
  })

  document.getElementById("statusAnswer").innerHTML = ""
  reloadButton.style.display = "none"
}

function selectButton() {
  const alternatives = document.querySelectorAll(".alternative")

  alternatives.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.value
      checkAnswer(answer)
    })
  })
}

function checkAnswer(answer) {
  answer = parseInt(answer)
  let statusAnswer = document.getElementById("statusAnswer")
  if (answer === correctAnswers[nowQuestion]) {
    statusAnswer.innerHTML = "Acertou!!!"
  } else {
    statusAnswer.innerHTML = `Errou! Resposta correta: ${
      options[nowQuestion][correctAnswers[nowQuestion]]
    }`
  }
  reloadButton.style.display = "block"
}

reloadButton.addEventListener("click", () => {
  generateQuestions()
})

generateQuestions()
selectButton()