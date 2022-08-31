const initialPage = document.querySelector("#Select-quiz")
const pageQuizTwo = document.querySelector(".Quiz_page")

function exitQuizPage () {
    initialPage.classList.remove('Hide')
    pageQuizTwo.classList.add("Hide")
}

// Função para renderizar o quiz clicado
function acessQuiz(quizId) {
    selectedQuiz = quizzesData.filter((quizzesData) => {
        if (quizzesData.id == quizId) {
            return true
        }
    })
    console.log(selectedQuiz)

    homePage.classList.add('Hide')
    quizPage.classList.remove('Hide')

    const header = document.querySelector('header')
    header.scrollIntoView()
}