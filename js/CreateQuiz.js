function nextSection(section){
    section.classList.add('Hide');
    if (section.className.includes('First')){
        let nextSection = document.querySelector('.Second.Section');
        nextSection.classList.remove('Hide');
    }else if (section.className.includes('Second')){
        let nextSection = document.querySelector('.Third.Section');
        nextSection.classList.remove('Hide');
    }else if (section.className.includes('Third')){
        let nextSection = document.querySelector('.Last.Section');
        nextSection.classList.remove('Hide');
    }else if (section.className.includes('Last')){
        let thisPage = document.querySelector('.Create_quiz');
        thisPage.classList.add('Hide');
        let quizPage = document.querySelector('.Quiz_page');
        quizPage.classList.remove('Hide');
    }
}

function goToHome(home, section){
    section.classList.add('Hide');
    home.classList.remove('Hide');
}

function createQuiz() {
    const initialPage = document.querySelector("#Select-quiz")
    const createPage = document.querySelector("#section_one")

    initialPage.classList.add("Hide")
    createPage.classList.remove("Hide")
}