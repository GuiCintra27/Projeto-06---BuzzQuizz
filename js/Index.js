// Função que leva para a aréa de criar quizzes
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
    const divs = quizzesData.map((quiz) => {
        return [`
        <div class="Quiz" onclick="acessQuiz(${quiz.id})">
            <h4>${quiz.title}</h4>
        </div>
        `, quiz.image];
    });

    let allQuizzes = document.querySelector('.Quiz_container');

    for(let i = 0; i < divs.length; i++) {
        allQuizzes.innerHTML += divs[i][0];
        const lastDiv = allQuizzes.lastElementChild
        lastDiv.style.backgroundImage = `url('${divs[i][1]}')`
    }
});
