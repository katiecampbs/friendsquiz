// Import the questionList from the external file
import quizData from './questions.js';

const questions = quizData.questionList;
let questionElement, buttons, currentQuestionIndex, score, scoreContainer;

function runQuiz() {
    //Insert the first question from the question list into the paragraph with an id of "question"
    questionElement.textContent = questions[0].question;

    //Cycle through the answers in the first question on the list and inserts an answer as text content to each of the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[0].answers[i];
    }
    /**
     * Run the checkAnswer function in the event that any of the buttons are clicked
    */
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            const answer = questions[currentQuestionIndex].answers[index];
            checkAnswer(answer, button);
        });
    });

    /** Reset the answer button colour after it has turned red or green to show if answer is correct */
    function resetButtonColors() {
        buttons.forEach(function (button) {
            button.style.backgroundColor = ""; // Reset button color
        });
    }
    /**
     * Check the answer on the button clicked against the answer in the questions list and displays an alert for the user
     */
    function checkAnswer(answer, button) {
        let currentQuestion = questions[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
            score = ++score;
        } else {
            button.style.backgroundColor = "red";
        }

        // Reset button colors using a function after a short delay, and then move to the next question
        setTimeout(function () {
            resetButtonColors();

            // Increment the question list by one
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                // Display the next question
                questionElement.textContent = questions[currentQuestionIndex].question;
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].textContent = questions[currentQuestionIndex].answers[i];
                }
            } else {
                // Quiz is completed, replace the content with the score
                scoreContainer = document.getElementById("score-container");
                scoreContainer.innerHTML = `<h1>Quiz Score</h1><p>You scored: ${score} out of 10!</p>`;
            }
        }, 1000);
    }
};
        
// The code will begin on the "DOMContentLoaded" event (once the page has fully loaded)
document.addEventListener("DOMContentLoaded", function () {
    questionElement = document.getElementById("question");
    buttons = document.querySelectorAll(".btn");
    currentQuestionIndex = 0;
    score = 0;
    runQuiz();
});

// Listen for the refresh button to be clicked. If clicked it triggers the quiz to start from the beginning
let refreshBtn = document.getElementById("btn-refresh");
function handleClick() {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.innerHTML = ""; // Clear score container
    runQuiz();
}
refreshBtn.addEventListener("click", handleClick);
