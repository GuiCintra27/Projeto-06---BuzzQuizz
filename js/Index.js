function createQuiz() {
    const initialPage = document.querySelector("#Select-quiz");
    const createPage = document.querySelector(".Create_quiz");
    const firstSection = document.querySelector('.First.Section');

    initialPage.classList.add("Hide")
    createPage.classList.remove("Hide")
    firstSection.classList.remove('Hide')
}
// Renderizando os quizzes da API
let selectedQuiz 
let quizzesData

const quizPage = document.querySelector('.Quiz_page')
const homePage = document.querySelector('#Select-quiz')

axios
.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
.then((quizzes) => {
    quizzesData = quizzes.data;
    console.log(quizzes.data) // CONSOLE.LOG
    const divs = quizzesData.map((quiz) => {
        return `
        <div class="Quiz" onclick="acessQuiz(${quiz.id})">
            <h4>${quiz.title}</h4>
        </div>
        `;
    });
    let allQuizzes = document.querySelector('.Quiz_container');
    allQuizzes.innerHTML = ''; // Essa linha é removível depois de tirarmos os quizzes estáticos do HTML
    for(let i = 0; i < divs.length; i++) {
        allQuizzes.innerHTML += divs[i];
    }
});

// Função para renderizar o quiz clicado
function acessQuiz(quizId) {
    selectedQuiz = quizzesData.filter((quizzesData) => {
        if (quizzesData.id == quizId) {
            return true
        }
    })

    homePage.classList.add('Hide')
    quizPage.classList.remove('Hide')

    
    const header = document.querySelector('header')
    header.scrollIntoView()
}