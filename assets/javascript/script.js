// Import the questionList from the external file
import quizData from './questions.js';

const questions = quizData.questionList;

//The code will begin on the "DOMContentLoaded" event (once the page has fully loaded)
document.addEventListener("DOMContentLoaded", function() {
    let questionElement = document.getElementById("question");
    let buttons = document.querySelectorAll(".btn");
    let currentQuestionIndex = 0;
    let score = 0;

    //Inserts the first question from the question list into the paragraph with an id of "question"
    questionElement.textContent = questions[0].question;
    
    //Cycles through the answers in the first question on the list and inserts an answer as text content to each of the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[0].answers[i];
    }
    /**
     * Runs the checkAnswer function in the event that any of the buttons are clicked
    */
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            const answer = questions[currentQuestionIndex].answers[index];
            checkAnswer(answer, button);
        });
    });

    function resetButtonColors() {
        buttons.forEach(function (button) {
            button.style.backgroundColor = ""; // Reset button color
        });
    }
    /**
     * Checks the answer on the button clicked against the answer in the questions list and displays an alert for the user
     */
    function checkAnswer(answer, button) {
        let currentQuestion = questions[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
            score = ++score;
        } else {
            button.style.backgroundColor = "red";
        }

        // Reset button colors after a short delay and then move to the next question
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
                alert(`End of the quiz! You scored ${score} out of 10!`);
            }
        }, 1000);
    }
});

//Code from sentry.io which refreshes the page on click of the button
const refreshBtn = document.getElementById("btn-refresh");
function handleClick() {
    window.location.reload();
}
refreshBtn.addEventListener("click", handleClick);

