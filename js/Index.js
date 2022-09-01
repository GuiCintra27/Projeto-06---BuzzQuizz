// Função que leva para a aréa de criar quizzes
function createQuiz() {
    const initialPage = document.querySelector("#Select-quiz");
    const createPage = document.querySelector(".Create_quiz");
    const firstSection = document.querySelector('.First.Section');

    initialPage.classList.add("Hide")
    createPage.classList.remove("Hide")
    firstSection.classList.remove('Hide')
}

//Guardando os quizzes do usuário no localStorage
const quizEx = {title: "esdrinhas", nome: "esdras"}

let createdQuizString = JSON.stringify(quizEx) //Dentro do JSON vai a variável com a resposta em objeto que o servidor dá quando o quiz é criado ou então id (depende)
localStorage.setItem("quiz", createdQuizString) // Armazenando a string/id (depende) do objeto

let quizLocalStorage = localStorage.getItem("quiz") // Pegando de volta a variável em forma de string
let quizDesestringado = JSON.parse(quizLocalStorage) // Transformando a string em objeto/id (depende) de novo

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
            <h4>${quiz.title}</h4>  
        </div>
        `, quiz.image];
    });

    let allQuizzes = document.querySelector('.Quiz_container');

    for(let i = 0; i < divs.length; i++) {
        allQuizzes.innerHTML += divs[i][0];
        const lastDiv = allQuizzes.lastElementChild
        lastDiv.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('${divs[i][1]}')`
    }
});
