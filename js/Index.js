// Função que leva para a aréa de criar quizzes
function createQuiz() {
    const initialPage = document.querySelector("#Select-quiz");
    const createPage = document.querySelector(".Create_quiz");
    const firstSection = document.querySelector('.First.Section');

    initialPage.classList.add("Hide")
    createPage.classList.remove("Hide")
    firstSection.classList.remove('Hide')
}

// Renderizar quizzes do usuário do localStorage
function userQuizRender () {

//Pegando os quizzes do usuário no localStorage
let arrayLocalStorage = localStorage.getItem("quizzesUser") // Pegando de volta a variável em forma de string
let quizzesUserArray = JSON.parse(arrayLocalStorage) // Transformando a string em array de novo

    const userQuizContainer = document.querySelector(".user_quiz_container")

    if (userQuizContainer.childElementCount !== 0) {
        userQuizContainer.innerHTML = ''
    }

    quizzesUserArray.forEach (userQuiz => {
        const div = 
            `<div class="Quiz" onclick="acessQuiz(${userQuiz.id})">
                <h4>${userQuiz.title}</h4>
            </div>`

        userQuizContainer.innerHTML += div

            const lastDiv = userQuizContainer.lastElementChild
            lastDiv.style.backgroundImage = `url('${userQuiz.image}')`
        })
}

// Renderizando os quizzes gerais da API
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
            <img src="${quiz.image}" alt="">
            <span></span>
            <h4>${quiz.title}</h4>  
        </div>
        `];
    });

    let allQuizzes = document.querySelector('.Quiz_container');

    for(let i = 0; i < divs.length; i++) {
        allQuizzes.innerHTML += divs[i][0];
}
});
