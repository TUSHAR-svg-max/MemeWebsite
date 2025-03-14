// Quiz Questions
const quizData = [
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    }
];

// Select quiz elements
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");

// Load a random question
function loadQuiz() {
    let randomIndex = Math.floor(Math.random() * quizData.length);
    let questionData = quizData[randomIndex];

    quizQuestion.innerText = questionData.question;
    quizOptions.innerHTML = "";

    questionData.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option, questionData.answer);
        quizOptions.appendChild(button);
    });
}

// Check if the answer is correct
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct! 🎉");
    } else {
        alert("Oops! The correct answer was: " + correct);
    }
    loadQuiz(); // Load a new question after answering
}

// Load the first question when the page loads
loadQuiz();
