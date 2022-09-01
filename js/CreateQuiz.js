const urlServer = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';
let amountOfQuestions = 0, amountOfLevels = 0, cont = 0, filterAnswerResult = [];
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

function nextSection(section) {

	if (section.className.includes('First')) {
		firstSection(section);
	} else if (section.className.includes('Second')) {
		secondSection(section);
	} else if (section.className.includes('Third')) {
		thirdSection(section);
	} else if (section.className.includes('Last')) {
		const thisPage = document.querySelector('.Create_quiz');
		thisPage.classList.add('Hide');
		const quizPage = document.querySelector('.Quiz_page');
		quizPage.classList.remove('Hide');
	}
}

function goToHome(home, section) {
	section.classList.add('Hide');
	home.classList.remove('Hide');
}

function firstSection(section) {
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

	if (titleResult && imgUrlResult && questionsResult && levelsResult) {

		quiz.title = title;
		quiz.image = imgUrl;
		amountOfQuestions = questions;
		amountOfLevels = levels;

		section.classList.add('Hide');
		const secondSection = document.querySelector('.Third.Section');
		secondSection.classList.remove('Hide');
		nextSection(secondSection);
	} else {
		if (!titleResult) {
			problem.push(`Título do quiz`);
		}

		if (!imgUrlResult) {
			problem.push(`Url da imagem`);
		}

		if (!questionsResult) {
			problem.push(`Quantidade das questões`);
		}

		if (!levelsResult) {
			problem.push(`Quantidade dos níveis`);
		}
		alert(`Os seguintes dados não foram preenchidos corretamente: ${problem.join(', ')}`)
	}
}

function secondSection() {
	let form = document.querySelector('.Form_question');

	for (i = 0; i < amountOfQuestions; i++) {
		if (i === 0) {
			let firstQuestion = `            
		<div class="Options Hide" data-form="${i + 1}" onclick="toggleForm(this)">
			<h3>Pergunta 1</h3>
			<img src="images/Pencil-icon.svg" alt="">
		</div>
		<form data-form="${i + 1}">

			<h3 onclick="toggleForm(this.parentNode)">Pergunta 1</h3>
			<input type="text" placeholder="Texto da pergunta" data-secondSection='pergunta ${i + 1}'>
			<input type="text" placeholder="Cor de fundo da pergunta" data-secondSection="cor ${i + 1}">

			<h3>Resposta correta</h3>
			<input type="text" placeholder="Resposta correta" data-secondSection="resposta ${i + 1}">
			<input type="text" placeholder="URL da imagem" data-secondSection="resposta-imagem ${i + 1}">

			<h3>Respostas incorretas</h3>
			<div>
				<input type="text" placeholder="Resposta incorreta 1" data-secondSection="incorreta ${i + 1}.1">
				<input type="text" placeholder="URL da imagem 1" data-secondSection="incorreta-imagem ${i + 1}.1">
			</div>

			<div>
				<input type="text" placeholder="Resposta incorreta 2" data-secondSection="incorreta ${i + 1}.2">
				<input type="text" placeholder="URL da imagem 2" data-secondSection="incorreta-imagem ${i + 1}.2">
			</div>

			<div>
				<input type="text" placeholder="Resposta incorreta 3" data-secondSection="incorreta ${i + 1}.3">
				<input type="text" placeholder="URL da imagem 3" data-secondSection="incorreta-imagem ${i + 1}.3">
			</div>
		</form>
	`;
			form.innerHTML += firstQuestion;
		} else {
			let secondQuestion = `
		<div class="Options" data-form="${i + 1}" onclick="toggleForm(this)">
			<h3>Pergunta ${i + 1}</h3>
			<img src="images/Pencil-icon.svg" alt="">
		</div>
		<form class="Hide" data-form="${i + 1}">

			<h3 onclick="toggleForm(this.parentNode)" >Pergunta ${i + 1}</h3>
			<input type="text" placeholder="Texto da pergunta" data-secondSection='pergunta ${i + 1}'>
			<input type="text" placeholder="Cor de fundo da pergunta" data-secondSection="cor ${i + 1}">

			<h3>Resposta correta</h3>
			<input type="text" placeholder="Resposta correta" data-secondSection="resposta ${i + 1}">
			<input type="text" placeholder="URL da imagem" data-secondSection="resposta-imagem ${i + 1}">

			<h3>Respostas incorretas</h3>
			<div>
				<input type="text" placeholder="Resposta incorreta 1" data-secondSection="incorreta ${i + 1}.1">
				<input type="text" placeholder="URL da imagem 1" data-secondSection="incorreta-imagem ${i + 1}.1">
			</div>

			<div>
				<input type="text" placeholder="Resposta incorreta 2" data-secondSection="incorreta ${i + 1}.2">
				<input type="text" placeholder="URL da imagem 2" data-secondSection="incorreta-imagem ${i + 1}.2">
			</div>

			<div>
				<input type="text" placeholder="Resposta incorreta 3" data-secondSection="incorreta ${i + 1}.3">
				<input type="text" placeholder="URL da imagem 3" data-secondSection="incorreta-imagem ${i + 1}.3">
			</div>
		</form>
	`;
			form.innerHTML += secondQuestion;
		}
	}
}

function validSecondSection(section) {
	let questions = [];
	for (i = 0; i < amountOfQuestions; i++) {

		let question = {
			title: document.querySelector(`[data-secondSection='pergunta ${i + 1}']`).value,
			color: document.querySelector(`[data-secondSection='cor ${i + 1}']`).value,
			answers: [
				{
					text: document.querySelector(`[data-secondSection='resposta ${i + 1}']`).value,
					image: document.querySelector(`[data-secondSection='resposta-imagem ${i + 1}']`).value,
					isCorrectAnswer: true
				},
				{
					text: document.querySelector(`[data-secondSection='incorreta ${i + 1}.1']`).value,
					image: document.querySelector(`[data-secondSection='incorreta-imagem ${i + 1}.1']`).value,
					isCorrectAnswer: false
				},
				{
					text: document.querySelector(`[data-secondSection='incorreta ${i + 1}.2']`).value,
					image: document.querySelector(`[data-secondSection='incorreta-imagem ${i + 1}.2']`).value,
					isCorrectAnswer: false
				},
				{
					text: document.querySelector(`[data-secondSection='incorreta ${i + 1}.3']`).value,
					image: document.querySelector(`[data-secondSection='incorreta-imagem ${i + 1}.3']`).value,
					isCorrectAnswer: false
				}
			]
		};

		let titleResult = question.title.length >= 20;
		let colorResult = question.color.length === 7 && question.color[0] === '#';
		let answerResult = '';
		let problem = [];
		let cont = i;

		filterAnswers(question)
		i = cont;
		if (filterAnswerResult[0].text === '' || (filterAnswerResult[1].text === '' && filterAnswerResult[2].text === '' && filterAnswerResult[3].text === '')) {
			answerResult = false;
		} else {
			answerResult = filterAnswerResult[0].text.length > 0 && (filterAnswerResult[1].text.length > 0 || filterAnswerResult[2].text.length > 0 || filterAnswerResult[3].text.length > 0);
		}

		if (titleResult && colorResult && answerResult) {
			question.answers = filterAnswerResult;
			questions.push(question);

			if (questions.length === amountOfQuestions) {
				quiz.questions = questions;
				section.classList.add('Hide');
				const thirdSection = document.querySelector('.Third.Section');
				thirdSection.classList.remove('Hide');
				nextSection(thirdSection);
			}
		} else {
			if (!titleResult) {
				problem.push(`Título da questão ${i + 1}`);
			}
			if (!colorResult) {
				problem.push(`cor da questão ${i + 1}`);
			}
			if (!answerResult) {
				problem.push(`Perguntas da questão ${i + 1}`);
			}
			alert(`Os seguintes dados não foram preenchidos corretamente: ${problem.join(', ')}`)
		}
		cont = 0;
		filterAnswerResult = []
	}
}

function filterAnswers(question) {
	let mark = 0;
	for (l = 0; l < question.answers.length; l++) {
		let answer = question.answers[l].text.length > 20 && question.answers[l].image.includes('https://');

		if (l === 0 && answer) {
			mark = 1;
		}

		if (mark === 1) {
			if (!answer) {
				question.answers[l].text = '';
				question.answers[l].image = '';
			}

			if (l === question.answers.length - 1) {
				for (k = 0; k < question.answers.length; k++) {
					if (k === 0) {
						filterAnswerResult.push({
							text: question.answers[k].text,
							image: question.answers[k].image,
							isCorrectAnswer: true
						});
					} else {
						filterAnswerResult.push({
							text: question.answers[k].text,
							image: question.answers[k].image,
							isCorrectAnswer: false
						});
					}

				}
			}
		} else {
			question.answers[l].text = '';
			question.answers[l].image = '';
			if (l === question.answers.length - 1) {
				for (i = 0; i < question.answers.length; i++) {
					filterAnswerResult.push({
						text: question.answers[i].text,
						image: question.answers[i].image,
						isCorrectAnswer: false
					});
				}
			}
		}
	}
}

function toggleForm(form) {
	let data = form.dataset.form;
	let show = document.querySelectorAll(`[data-form='${data}']`);

	for (i = 0; i < show.length; i++) {
		let option = show[i];
		option.classList.toggle('Hide');
	}
}

function thirdSection(section){
	
}