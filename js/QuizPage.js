const initialPage = document.querySelector("#Select-quiz")
    const pageQuizTwo = document.querySelector(".Quiz_page")

function toQuizPage() {
    initialPage.classList.add('Hide')
    pageQuizTwo.classList.remove("Hide")
}

function exitQuizPage () {
    initialPage.classList.remove('Hide')
    pageQuizTwo.classList.add("Hide")
}