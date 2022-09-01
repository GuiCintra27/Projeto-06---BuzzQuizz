// Função para sair da página do quiz
function exitQuizPage () {
    const initialPage = document.querySelector("#Select-quiz")
    const pageQuiz = document.querySelector(".Quiz_page")
    
    initialPage.classList.remove('Hide')
    pageQuiz.classList.add("Hide")

    const header = document.querySelector('header')
    header.scrollIntoView()
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