let questionList = [
    {
        question: "What is the name of Ross and Monica's dog when they were kids?",
        answers: ['Buster','Fluffy','Rex','Rover'],
        correctAnswer: 'Buster'
    },
    {
        question: "Which character famously yelled, 'We were on a break!' during the series?",
        answers: ['Ross','Chandler','Joey','Phoebe'],
        correctAnswer: 'Ross'
    },
    {
        question: "What is the name of the coffee shop where the friends frequently hang out?",
        answers: ['Central Perk','Java Jolt','Espresso Emporium','The Percolator'],
        correctAnswer: 'Central Perk'
    },
    {
        question: "Who played the role of Ross Geller in the TV show 'Friends'?",
        answers: ['Matt LeBlanc','Matthew Perry','David Schwimmer','Courteney Cox'],
        correctAnswer: 'David Schwimmer'
    },
    {
        question: "What is the profession of Ross Geller in the show?",
        answers: ['Paleontologist','Chef','Actor','Accountant'],
        correctAnswer: 'Paleontologist'
    },
    {
        question: "Which character briefly lived with a woman named Janice, known for her distinctive laugh?",
        answers: ['Monica','Chandler','Phoebe','Joey'],
        correctAnswer: 'Chandler'
    },
    {
        question: "Which character is known for her famous song, 'Smelly Cat'?",
        answers: ['Monica','Phoebe','Rachel','Janice'],
        correctAnswer: 'Phoebe'
    },
    {
        question: "What is the name of Ross and Monica's father?",
        answers: ['Bob','Jack','Richard','George'],
        correctAnswer: 'Jack'
    },
    {
        question: "What does Joey not share?",
        answers: ['His apartment','His food','His clothes','His acting tips'],
        correctAnswer: 'His food'
    },
    {
        question: "What is the name of the coffee shop employee who frequently serves the friends at Central Perk?",
        answers: ['Gunther','Walter','Roger','Steven'],
        correctAnswer: 'Gunther'
    }
]

//The code will begin on the "DOMContentLoaded" event (once the page has fully loaded)
document.addEventListener("DOMContentLoaded", function() {
    let questionElement = document.getElementById("question");
    let buttons = document.querySelectorAll(".btn");
    let currentQuestionIndex = 0;
    let score = 0;
    
    //Inserts the first question from the question list into the paragraph with an id of "question"
    questionElement.textContent = questionList[0].question;
    
    //Cycles through the answers in the first question on the list and inserts an answer as text content to each of the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionList[0].answers[i];
    };
    /**
     * Runs the checkAnswer function in the event that any of the buttons are clicked
    */
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            const answer = questionList[currentQuestionIndex].answers[index];
            checkAnswer(answer);
        });
    });
    /**
     * Checks the answer on the button clicked against the answer in the questions list and displays an alert for the user
     */
    function checkAnswer(answer) {
        let currentQuestion = questionList[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            alert('Correct answer!');
            score = ++score;
        } else {
            alert('Incorrect answer!');
        }

        //Increments the question list by one
        currentQuestionIndex++;
        if (currentQuestionIndex < questionList.length) {
            // Display the next question
            questionElement.textContent = questionList[currentQuestionIndex].question;
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].textContent = questionList[currentQuestionIndex].answers[i];
            }
        } else {
            alert(`End of the quiz! You scored ${score} out of 10!`);
        }
    }
});

//Code from sentry.io which refreshes the page on click of the button
const refreshBtn = document.getElementById("btn-refresh");
function handleClick() {
    window.location.reload();
}
refreshBtn.addEventListener("click", handleClick);

