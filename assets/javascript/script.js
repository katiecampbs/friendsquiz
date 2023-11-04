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

document.addEventListener("DOMContentLoaded", function() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = questionList[0].question;
    let buttons = document.querySelectorAll(".btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionList[0].answers[i];
    };
    let currentQuestionIndex = 0;
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            const answer = questionList[currentQuestionIndex].answers[index];
            checkAnswer(answer);
        });
    });
    function checkAnswer(answer) {
        let currentQuestion = questionList[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            alert('Correct answer!');
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
            alert('End of the quiz!');
        }
    }
});


