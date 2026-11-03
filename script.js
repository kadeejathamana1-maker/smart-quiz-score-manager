const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Kerala", "Delhi", "Mumbai", "Chennai"],
        correct: "Delhi"
    },
    {
        question: "Which language is used for web styling?",
        answers: ["Python", "HTML", "CSS", "SQL"],
        correct: "CSS"
    },
    {
        question: "Which is a Python data type?",
        answers: ["List", "Website", "Browser", "Monitor"],
        correct: "List"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
    let current = questions[currentQuestion];

    questionElement.textContent = current.question;
    answerButtons.innerHTML = "";

    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            checkAnswer(answer);
        });

        answerButtons.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        resultElement.textContent = "Correct Answer!";
    } else {
        resultElement.textContent = "Wrong Answer!";
    }

    answerButtons.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        resultElement.textContent = "";
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        answerButtons.innerHTML = "";
        resultElement.textContent =
            "Your Score: " + score + " / " + questions.length;
        nextButton.style.display = "none";
    }
});

showQuestion();