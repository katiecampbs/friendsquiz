// Import the questionList from the external file
import quizData from './questions.js';

const questionsOne = quizData.questionListOne;
const questionsTwo = quizData.questionListTwo;
const questionsThree = quizData.questionListThree;
let questionElement, buttons, currentQuestionIndex, score, scoreTwo, scoreThree, scoreContainer, refreshBtn;

// The code will begin on the "DOMContentLoaded" event (once the page has fully loaded)
document.addEventListener("DOMContentLoaded", function () {
    questionElement = document.getElementById("question");
    buttons = document.querySelectorAll(".btn");
    currentQuestionIndex = 0;
    scoreContainer = document.getElementById("score-container"); // Initialize score container
    score = 0;
    runRoundOne();

    // Listens for the start new round button click
    document.addEventListener("click", function (event) {
        // Check if the clicked element is the "Start round two" button
        if (event.target.id === "start-round-two-btn") {
            runRoundTwo();
        }
        if (event.target.id === "start-round-three-btn") {
            runRoundThree();
        }
    });

    // Listen for the refresh button to be clicked. If clicked, it triggers the quiz to start from the beginning
    refreshBtn = document.getElementById("btn-refresh");
    refreshBtn.addEventListener("click", handleClick);
});

/** Reset the answer button colour after it has turned red or green to show if answer is correct */
function resetButtonColors() {
    buttons.forEach(function (button) {
        button.style.backgroundColor = ""; // Reset button color
    });
}

function runRoundOne() {
    //Insert the first question from the question list into the paragraph with an id of "question"
    questionElement.textContent = questionsOne[0].question;

    //Cycle through the answers in the first question on the list and inserts an answer as text content to each of the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionsOne[0].answers[i];
    }
    /**
     * Run the checkAnswer function in the event that any of the buttons are clicked
    */
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            const answer = questionsOne[currentQuestionIndex].answers[index];
            checkAnswer(answer, button);
        });
    });

    /**
     * Check the answer on the button clicked against the answer in the questions list and displays an alert for the user
     */
    function checkAnswer(answer, button) {
        let currentQuestion = questionsOne[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
            score++;
        } else {
            button.style.backgroundColor = "red";
        }

        // Reset button colors using a function and then move to the next questio
        resetButtonColors();

        // Increment the question list by one
        currentQuestionIndex++;

        if (currentQuestionIndex < questionsOne.length) {
            // Display the next question
            questionElement.textContent = questionsOne[currentQuestionIndex].question;
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].textContent = questionsOne[currentQuestionIndex].answers[i];
            }
        } else {
            // Quiz is completed, replace the content with the score
            scoreContainer = document.getElementById("score-container");
            scoreContainer.innerHTML = `<h1>Quiz Score</h1><p>You scored: ${score} out of 5!</p><button class="btn--restart" id="start-round-two-btn">Start round two</button>`;
        };
    }

    function runRoundTwo() {
        console.log(questionsTwo);
        // Reset variables and run the second round
        scoreTwo = 0;
        currentQuestionIndex = 0;
        scoreContainer.innerHTML = ""; // Clear score container

        //Insert the first question from the question list into the paragraph with an id of "question"
        questionElement.textContent = questionsTwo[0].question;

        //Cycle through the answers in the first question on the list and inserts an answer as text content to each of the buttons
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = questionsTwo[0].answers[i];
        }
        /**
         * Run the checkAnswer function in the event that any of the buttons are clicked
        */
        buttons.forEach(function (button, index) {
            button.addEventListener("click", function () {
                const answer = questionsTwo[currentQuestionIndex].answers[index];
                checkAnswer(answer, button);
            });
        });

        /**
         * Check the answer on the button clicked against the answer in the questions list and displays an alert for the user
         */
        function checkAnswer(answer, button) {
            let currentQuestion = questionsTwo[currentQuestionIndex];
            if (answer === currentQuestion.correctAnswer) {
                button.style.backgroundColor = "green";
                scoreTwo++;
            } else {
                button.style.backgroundColor = "red";
            }

            // Reset button colors and then move to the next question
            resetButtonColors();

            // Increment the question list by one
            currentQuestionIndex++;

            if (currentQuestionIndex < questionsTwo.length) {
                // Display the next question
                questionElement.textContent = questionsTwo[currentQuestionIndex].question;
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].textContent = questionsTwo[currentQuestionIndex].answers[i];
                }
            } else {
                // Quiz is completed, replace the content with the score
                scoreContainer = document.getElementById("score-container");
                scoreContainer.innerHTML = `<h1>Quiz Score</h1><p>On round two you scored: ${scoreTwo} out of 5!</p><button class="btn--restart" id="start-round-three-btn">Start round three</button>`;
            }
        };


        function runRoundThree() {
            console.log(questionsThree);
            // Reset variables and run the second round
            scoreThree = 0;
            currentQuestionIndex = 0;
            scoreContainer.innerHTML = ""; // Clear score container

            //Insert the first question from the question list into the paragraph with an id of "question"
            questionElement.textContent = questionsThree[0].question;

            //Cycle through the answers in the first question on the list and inserts an answer as text content to each of the buttons
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].textContent = questionsThree[0].answers[i];
            }
            /**
             * Run the checkAnswer function in the event that any of the buttons are clicked
            */
            buttons.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    const answer = questionsThree[currentQuestionIndex].answers[index];
                    checkAnswer(answer, button);
                });
            });

            /**
             * Check the answer on the button clicked against the answer in the questions list and displays an alert for the user
             */
            function checkAnswer(answer, button) {
                let currentQuestion = questionsThree[currentQuestionIndex];
                if (answer === currentQuestion.correctAnswer) {
                    button.style.backgroundColor = "green";
                    scoreThree++;
                } else {
                    button.style.backgroundColor = "red";
                }

                // Reset button colors using a function after a short delay, and then move to the next question
                resetButtonColors();

                // Increment the question list by one
                currentQuestionIndex++;

                if (currentQuestionIndex < questionsThree.length) {
                    // Display the next question
                    questionElement.textContent = questionsThree[currentQuestionIndex].question;
                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].textContent = questionsThree[currentQuestionIndex].answers[i];
                    }
                } else {
                    // Quiz is completed, replace the content with the score
                    scoreContainer = document.getElementById("score-container");
                    scoreContainer.innerHTML = `<h1>Quiz Score</h1><p>On round three you scored: ${scoreThree} out of 5!</p>`;
                }
            };
        }

        function handleClick() {
            score = 0;
            currentQuestionIndex = 0;
            scoreContainer.innerHTML = ""; // Clear score container
            runRoundOne();
        }