function comparator() {
    return Math.random() - 0.5; 
}

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

let questionsQtt 

function acessQuiz(quizId) {
    axios
    .get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    .then((quizzes) => {
        quizzesData = quizzes.data
        const filteredQuiz = quizzesData.filter((quizzesData) => {
            if (quizzesData.id == quizId) {
                return true
            }
        })
        selectedQuiz = filteredQuiz[0] 
        console.log(selectedQuiz)
    
        homePage.classList.add('Hide')
        quizPage.classList.remove('Hide')
    
        const quizTitle = document.querySelector('.Quiz_title')
        quizTitle.innerHTML = `<h1>${selectedQuiz.title}</h1>`
        quizTitle.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${selectedQuiz.image})`
    
        const questions = selectedQuiz.questions
        questionsQtt = questions.length
    
        for(let i = 0; i < questions.length; i++) {
            questions[i].answers.sort(comparator)
    
            quizPage.innerHTML += `
            <div class="Question">
                <div class="Question_title" id="Question-1">
                    <h3>${questions[i].title}</h3>
                </div>
                <ul></ul>
            </div>
            `
            const questionTitle = document.querySelectorAll('.Question_title')
            questionTitle[i].style.background = `${questions[i].color}`
            
            quizQuestions = document.querySelectorAll('ul')
            const quizzAnswers = questions[i].answers
    
            for(let j = 0; j < quizzAnswers.length; j++) {
                if (quizzAnswers[j].isCorrectAnswer === true) {
                    quizQuestions[i].innerHTML += `
                    <li class="correct" onclick="tryAnswer(this)">
                        <img src="${quizzAnswers[j].image}" alt="">
                        <span><strong>${quizzAnswers[j].text}</strong></span>
                    </li>
                    `
                } else {
                    quizQuestions[i].innerHTML += `
                    <li class="wrong" onclick="tryAnswer(this)">
                        <img src="${quizzAnswers[j].image}" alt="">
                        <span><strong>${quizzAnswers[j].text}</strong></span>
                    </li>
                    `
                }
            }
        }
    
        const header = document.querySelector('header')
        header.scrollIntoView()
    })
}

let totalTries = 0
let correctAnswer = 0

function tryAnswer(esse) {
    const questionBox = esse.parentNode
    let nextQuestion = questionBox.firstElementChild
    if (nextQuestion.classList.contains('Not_selected') || nextQuestion.nextElementSibling.classList.contains('Not_selected')) {
        console.log('NAO')
        return
    }

    questionsQtt--
    totalTries++
    if (esse.classList.contains('correct')) {
        correctAnswer++
    }
    console.log(esse)
    esse.classList.add('current')

    while (true) {
        if(!nextQuestion.classList.contains('current')) {
            nextQuestion.classList.add('Not_selected')
        }
        if(nextQuestion.classList.contains('correct')) {
            nextQuestion.classList.add('Correct')
        } else {
            nextQuestion.classList.add('Incorrect')
        }
        if (nextQuestion.nextElementSibling) {
            nextQuestion = nextQuestion.nextElementSibling
        } else {
            break
        }
    }

    if(questionsQtt === 0) {
        const score = Math.round((correctAnswer/totalTries)*100)
        console.log(score)
    }

    
    setTimeout(() => {
        questionBox.parentNode.nextElementSibling.scrollIntoView()
    }, 2000)
}