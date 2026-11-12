// array

const quizData = [{
    question: "testing first question",
    answers: ["testing1, testing2, testing3, testing4"],
    correct: "testing2"
},
{
    question: "testing second question",
    answers: ["testing1, testing2, testing3, testing4"],
    correct: "testing4"
}
];


// varible

let questionA1 = document.getElementById("#question");
let answersA1 = document.getElementById("#answers");
let resultA1 = document.getElementById("#result");
let scoreA1 = document.getElementById("#score");
let totalA1 = document.getElementById("#total");
let restartBtn = document.getElementById("#restart");

let currentQuestion = 0;
let score = 0;


// function

function selectAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
    else {
        showResult();

    }
}

function showResult() {
    quiz.style.display = 'none';
    resultA1.classList.remove('hide');
    scoreA1.textContent = score;
    totalA1.textContent = quizData.length;
}

restartBtn.addEventListener("clic", () => {
    currentQuestion = 0;
    score = 0;
    resultA1.classList.add('hide');
    quiz.style.display = 'block';
    loadingQuestion();
});


loadingQuestion();
