const urlServer = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';
let amountOfQuestions = 0, amountOfLevels = 0;
let quiz = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
};

function nextSection(section){
   
    if (section.className.includes('First')){
        firstSection(section);
    }else if (section.className.includes('Second')){
        secondSection(section);
    }else if (section.className.includes('Third')){
        const nextSection = document.querySelector('.Last.Section');
        nextSection.classList.remove('Hide');
    }else if (section.className.includes('Last')){
        const thisPage = document.querySelector('.Create_quiz');
        thisPage.classList.add('Hide');
        const quizPage = document.querySelector('.Quiz_page');
        quizPage.classList.remove('Hide');
    }
}

function goToHome(home, section){
    section.classList.add('Hide');
    home.classList.remove('Hide');
}

function firstSection(section){
    const title = document.querySelector("[data-firstSection='1']").value;
    const imgUrl = document.querySelector("[data-firstSection='2']").value;
    let questions = document.querySelector("[data-firstSection='3']").value;
    let levels = document.querySelector("[data-firstSection='4']").value;

    questions = Number(questions);
    levels = Number(levels);


    const titleResult = title.length > 20 && title.length < 61;
    const imgUrlResult = imgUrl.includes('https://');
    const questionsResult = questions >= 3;
    const levelsResult = levels >= 2;
    let problem = [];

    if (titleResult && imgUrlResult && questionsResult && levelsResult){
       
        quiz.title = title;
        quiz.image = imgUrl;
        amountOfQuestions = questions;
        amountOfLevels = levels;

        section.classList.add('Hide');
        const nextSection = document.querySelector('.Second.Section');
        nextSection.classList.remove('Hide');
    }else {
        if (!titleResult){
            problem.push(`Título do quiz`);
        }

        if (!imgUrlResult){
            problem.push(`Url da imagem`);
        }

        if (!questionsResult){
            problem.push(`Quantidade das questões`);
        }

        if (!levelsResult){
            problem.push(`Quantidade dos níveis`);
        }
        alert(`Os seguintes dados não foram preenchidos corretamente: ${problem.join(', ')}`)
    }
}

function secondSection(section){
    section.classList.add('Hide');
    const nextSection = document.querySelector('.Third.Section');
    nextSection.classList.remove('Hide');
}